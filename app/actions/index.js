"use server";
import { revalidatePath } from "next/cache";

import {
  createUser,
  findUserByCredential,
  getEventById,
  updateGoing,
  updateInterest,
} from "@/db/queries";
import { redirect } from "next/navigation";
import { Resend } from "resend";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    let credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredential(credential);
    return found;
  } catch (error) {
    throw error;
  }
}

async function handleInterest(eventId, authId) {
  try {
    await updateInterest(eventId, authId);
    revalidatePath("/");
  } catch (err) {
    throw err;
  }
}
async function handleUpdateGoing(eventId, user) {
  try {
    await updateGoing(eventId, user?.id);
    await sendEmail(eventId, user);
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/");
  redirect("/");
}
async function sendEmail(eventId, user) {
  try {
    const event = await getEventById(eventId);
    const resend = new Resend(import.meta.env.RESEND_API);
    const message = `Dear ${user?.name}, you have been successfully registered for the evet, ${event?.name}. Please carry this email and add you official id to the venue. We are excited to have you here.`;
    const sent = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: user.email,
      subject: "Successfully registered for the event!",
      react: EmailTemplate({ message }),
    });
  } catch (err) {
    console.log(err);
  }
}
export { handleInterest, handleUpdateGoing, performLogin, registerUser };
