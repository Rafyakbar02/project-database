import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className="p-4 flex flex-row gap-4 overflow-x-auto">
      <InfoCard number={141} type={"Total Projects"} />
      <InfoCard number={33} type={"Signed Projects"} />
      <InfoCard number={108} type={"Projects In-progress"} />
      <InfoCard number={"344.44T"} type={"Total Investment Amount (Rp.)"} />
      <InfoCard number={"77.25T"} type={"Total Exposure Amount (Rp.)"} />
    </section>
  );
}
