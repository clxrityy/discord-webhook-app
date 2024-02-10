import Hero from "@/components/misc/Hero";
import Navbar from "@/components/layout/Navbar";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";




export default function Home() {
  return (
    <main className="h-screen relative">
      <Suspense fallback={<Loading size={30} />}>
        <Navbar />
      </Suspense>
      <div className="h-[60vh] px-10 py-7">
        <Hero />
      </div>
    </main>
  );
}
