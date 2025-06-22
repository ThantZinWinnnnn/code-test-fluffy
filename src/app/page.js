import AnimatedPageBackground from "@/components/animated-page-bg/animated-page-bg";
import Illustrations from "@/components/illustrations/illustrations";
import InitialLoader from "@/components/loading/initial-loader";
import SectionContainer from "@/components/section-container/section-container";
import Image from "next/image";
import StickyLogoSection from "@/components/sticky-logo-section";
import AnimatedTypography from "@/components/animated-typography/animated-typography";
import SocialFooter from "@/components/social-footer";

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
          <AnimatedPageBackground />
        </section>
        <section className="w-full h-screen bg-[#fbf6ec]">
          <div className="container mx-auto flex items-center justify-center h-full max-w-[1500px] px-4 relative z-10">
            <img src="/assets/logo.webp" alt="logo" />
          </div>
        </section>
        <section className="w-full h-screen bg-[#fbf6ec] flex items-center justify-center">
          <div className="w-full  ml-auto max-w-3xl px-3">
            <AnimatedTypography
              lines={[
                "ふわふわの動物たちに、",
                "囲まれて暮らしたい",
                "ペットや動物が大好きなあなたへ",
              ]}
            />
          </div>
        </section>
        <Illustrations />
      </SectionContainer>
      <SocialFooter />
      <InitialLoader />
    </main>
  );
}
