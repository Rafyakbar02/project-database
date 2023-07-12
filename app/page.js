import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <BottomNav />
      </div>
    </main>
  );
}
