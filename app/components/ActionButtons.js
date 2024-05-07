import Link from "next/link";

export default function ActionButtons({ fromDetails }) {
  return (
    <div className={`flex w-full gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button className="w-full bg-indigo-600 hover:bg-indigo-800">
        Interested
      </button>

      <Link
        href="/payment"
        className="w-full text-center bg-[#464849] rounded-md px-2 py-2 border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </Link>
    </div>
  );
}
