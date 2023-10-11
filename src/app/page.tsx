import DayCard from "@/components/DayCard";
import { NextPage } from "next";
import data from "@/data.json";

const Home: NextPage = () => {
  return (
    <main className="py-24 px-12 min-h-screen flex flex-col justify-start items-center">
      <div className="font-semibold">Review English</div>
      <ul className="mt-12 w-full grid grid-cols-4 gap-4">
        {data.map((_, i) => (
          <DayCard key={i} index={i} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
