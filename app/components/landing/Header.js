import SearchBox from "../SearchBox";

export default function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Discover Events</h1>

      <div>
        <SearchBox />
      </div>
    </div>
  );
}
