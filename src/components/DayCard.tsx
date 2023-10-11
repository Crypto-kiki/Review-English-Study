// DayCard.tsx
import Link from "next/link";
import { FC } from "react";

type DayCardProps = {
  index: number;
};

const DayCard: FC<DayCardProps> = ({ index }) => {
  return (
    <Link href={`/day/${index + 1}`}>
      <li className="text-center border-black border-2 font-medium rounded-lg shadow-md shadow-gray-300">
        Day {index + 1}
      </li>
    </Link>
  );
};

export default DayCard;
