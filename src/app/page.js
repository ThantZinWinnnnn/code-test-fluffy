import Illustrations from "@/components/illustrations/illustrations";
import InitialLoader from "@/components/loading/initial-loader";
import SectionContainer from "@/components/section-container/section-container";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SectionContainer>
        <section className="h-screen bg-[#fbf6ec] w-full">
          <div className="w-[25rem] h-6 relative z-10 py-6 mx-6">
            <Image
              src="/assets/logo.webp"
              alt="logo"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section className="w-full h-screen bg-[#fbf6ec]"></section>
        <section className="w-full h-screen bg-[#fbf6ec]"></section>
        <Illustrations />
      </SectionContainer>
      <InitialLoader />
    </main>
  );
}
