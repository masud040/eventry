export default function ActionButtons({ fromDetails }) {
  return (
    <div className={`flex w-full gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button className="w-full bg-indigo-600 hover:bg-indigo-800">
        Interested
      </button>

      <button className="w-full">Going</button>
    </div>
  );
}
