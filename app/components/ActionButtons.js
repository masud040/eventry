"use client";
import loadingSvg from "@/public/loading.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { handleInterest } from "../actions";
import useAuth from "../hooks/useAuth";

export default function ActionButtons({
  eventId,
  interested_ids,
  going_ids,
  fromDetails,
}) {
  const { auth } = useAuth();
  const isInterested = interested_ids?.find((id) => id === auth?.id);
  const isGoing = going_ids?.find((id) => id === auth?.id);
  const [interested, setInterested] = useState(isInterested);
  const [going, setGoing] = useState(isGoing);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  async function toggleInterest() {
    if (auth) {
      await handleInterest(eventId, auth.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  }
  async function handleGoing() {
    if (auth) {
      router.push(`/payment/${eventId}`);
    } else {
      router.push("/login");
    }
  }

  return (
    <div className={`flex w-full gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        onClick={() =>
          startTransition(() => {
            toggleInterest();
          })
        }
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        {isPending ? (
          <span className="flex items-center justify-center">
            <Image
              className="animate-spin"
              src={loadingSvg}
              height={25}
              width={25}
              alt="loading..."
            />
          </span>
        ) : (
          <span>Interested</span>
        )}
      </button>

      <button
        onClick={handleGoing}
        disabled={auth && isGoing}
        className={`w-full text-center bg-[#464849] rounded-md px-2 py-2 border hover:bg-[#3C3D3D] transition-colors active:translate-y-1 border-[#5F5F5F]/50 shadow-sm disabled:cursor-not-allowed disabled:hover:bg-green-500 cursor-pointer  ${
          isGoing && "bg-green-500 "
        }`}
      >
        Going
      </button>
    </div>
  );
}
