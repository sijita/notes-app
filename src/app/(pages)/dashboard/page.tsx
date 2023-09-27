import AllNotes from "@/app/components/dashboard/AllNotes";
import Header from "@/app/components/ui/Header";

export default async function page() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header id="" titleValue="" buttons={false} />
      <AllNotes />
    </div>
  );
}
