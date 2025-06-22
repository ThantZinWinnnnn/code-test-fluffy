import InitialLoader from "@/components/loading/initial-loader";
import SectionContainer from "@/components/section-container/SectionContainer";
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
      </SectionContainer>
      <InitialLoader />
    </main>
  );
}
