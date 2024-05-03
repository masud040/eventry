import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";

export default function EventCard() {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src="/google-io-2023-1.png"
        alt="Event 1"
        className="w-full"
        width={400}
        height={300}
      />

      <div className="p-3">
        <Link href="/details/12" className="text-lg font-bold">
          Google I/O Extended
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">
          Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
        </p>
        <div className="text-[#737373] text-sm mt-1">
          <span>1k Interested</span>
          <span>|</span>
          <span>40K Going</span>
        </div>
        <ActionButtons />
      </div>
    </div>
  );
}
