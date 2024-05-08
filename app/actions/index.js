"use server";

import { createUser, findUserByCredential, updateInterest } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
export { handleInterest, performLogin, registerUser };
