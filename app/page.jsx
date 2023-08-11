import InfoCard from "./global-components/InfoCard";
import Link from "next/link";

export default function Home() {
    const cards = [
        { label: "Total Projects", value: 141, route: "/projects" },
        { label: "Signed Projects", value: 33, route: "/projects" },
        { label: "Longlist Projects", value: 58, route: "/projects" },
        { label: "Shortlist Projects", value: 50, route: "/projects" },
    ];

    return (
        <div>
            <section className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-4 m-4 md:mx-20">
                {cards.map((card) => (
                    <Link href={card.route}>
                        <InfoCard
                            value={card.value}
                            label={card.label}
                            className={
                                "min-w-fit cursor-pointer md:items-start"
                            }
                        />
                    </Link>
                ))}
            </section>
        </div>
    );
}
