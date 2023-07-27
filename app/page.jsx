import InfoCard from "@/components/InfoCard";
import FiltersPanel from "@/components/FiltersPanel";

export default function Home() {
  return (
    <div>
      <FiltersPanel />
      <section className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-4 mx-4 md:mx-20">
        <InfoCard number={141} type={"Total Projects"} />
        <InfoCard number={33} type={"Signed Projects"} />
        <InfoCard number={58} type={"Long List Projects"} />
        <InfoCard number={50} type={"Short List Projects"} />
      </section>
    </div>
  );
}
