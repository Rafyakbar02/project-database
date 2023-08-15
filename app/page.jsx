import InfoCard from "./global-components/InfoCard";
import Link from "next/link";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

export default function Home() {
  const cards = [
    {
      label: "Total Projects",
      value: 141,
    },
    {
      label: "Signed Projects",
      value: 33,
    },
    {
      label: "Longlist Projects",
      value: 58,
    },
    {
      label: "Shortlist Projects",
      value: 50,
    },
  ];

  return (
    <section className="m-4 md:mx-20 sm:w-fit">
      <Link href={"/projects"}>
        <div className="bg-white border font-semibold border-gray-200 rounded-2xl mb-2 py-4 px-4 text-center flex justify-center items-center gap-1 hover:bg-neutral-100 transition-colors">
          View Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height={"18px"}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M268 112l144 144-144 144M392 256H100"
            />
          </svg>
        </div>
      </Link>
      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 border border-gray-200 p-2 rounded-2xl mb-3">
        {cards.map((card) => (
          <InfoCard
            value={card.value}
            label={card.label}
            className={"min-w-fit md:items-start"}
          />
        ))}
      </div>
      <BarChart />
      <PieChart />
    </section>
  );
}
