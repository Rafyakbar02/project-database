import InfoCard from "@/components/InfoCard";
import FiltersPanel from "@/components/FiltersPanel";

export default function Home() {
  return (
    <div>
      <section className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-4 m-4 md:mx-20">
        <InfoCard number={141} type={"Total Projects"} />
        <InfoCard number={33} type={"Signed Projects"} />
        <InfoCard number={58} type={"Longlist Projects"} />
        <InfoCard number={50} type={"Shortlist Projects"} />
      </section>
    </div>
  );
}
