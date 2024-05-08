import Image from "next/image";
import ActionButtons from "../ActionButtons";

export default function HeroSection({ eventData }) {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={eventData?.imageUrl}
          alt={eventData?.name}
          className="h-[450px] mx-auto"
          width={900}
          height={900}
        />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="text-2xl font-bold">{eventData?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{eventData?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{eventData?.interested_ids?.length} Interested</span>
            <span className="mx-1">|</span>
            <span>{eventData?.going_ids?.length} Going</span>
          </div>
        </div>

        <ActionButtons
          eventId={eventData.id}
          interested_ids={eventData.interested_ids}
          fromDetails={true}
        />
      </div>
    </section>
  );
}
