import InfoCard from "./global-components/InfoCard";
import Link from "next/link";
import BarChart from "./projects/components/BarChart";
import BigPieChart from "./projects/components/BigPieChart";
import SmallPieChart from "./projects/components/SmallPieChart";

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

  var riskData = {
    datasets: [
      {
        data: [10, 20],
        backgroundColor: ["#27A108", "#c23035"],
      },
    ],
    labels: ["Normal", "Due Date"],
  };

  var projectData = {
    datasets: [
      {
        data: [67, 25, 16, 33],
        backgroundColor: ["#1DB42C", "#28CECE", "#21ABA3", "#1C787E"],
      },
    ],
    labels: ["Jalan Tol", "Jalan Non-Tol", "Bendungan", "Air Minum"],
  };

  return (
    <section className="flex flex-col gap-3 justify-center lg:grid lg:grid-cols-2 m-4 md:mx-20 ">
      <div className="">
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border border-gray-200 p-2 rounded-2xl mb-3">
          {cards.map((card) => (
            <InfoCard
              value={card.value}
              label={card.label}
              className={" md:items-start"}
            />
          ))}
        </div>
        <BarChart />
        <BigPieChart
          title={"Risk Status Signed Project"}
          data={riskData}
          height={200}
          width={200}
        />
      </div>
      <div className="flex flex-col gap-3">
        <SmallPieChart
          title={"Total Project"}
          data={projectData}
          height={200}
          width={200}
        />
        <SmallPieChart
          title={"Signed Project"}
          data={projectData}
          height={200}
          width={200}
        />
        <SmallPieChart
          title={"Longlist Project"}
          data={projectData}
          height={200}
          width={200}
        />
        <SmallPieChart
          title={"Shortlist Project"}
          data={projectData}
          height={200}
          width={200}
        />
      </div>
    </section>
  );
}
