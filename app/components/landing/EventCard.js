import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";
import EventSchema from "../metadata/EventSchema";

export default function EventCard({ event }) {
  const { id, name, details, location, imageUrl, interested_ids, going_ids } =
    event || {};

  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <EventSchema event={event} />
      <Image
        src={imageUrl}
        alt={name}
        className="w-full"
        width={400}
        height={300}
      />

      <div className="p-3">
        <Link href={`/details/${id}`} className="text-lg font-bold">
          {name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{interested_ids?.length} Interested</span>
          <span className="mx-1">|</span>
          <span>{going_ids?.length} Going</span>
        </div>
        <ActionButtons
          eventId={event.id}
          interested_ids={event.interested_ids}
          going_ids={event.going_ids}
        />
      </div>
    </div>
  );
}
