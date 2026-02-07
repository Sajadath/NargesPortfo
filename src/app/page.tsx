import HeroSection from "@/components/heroSection/HeroSection";
import Image from "next/image";
import mainBg from "../../public/main/highMainBackground.png";

export default function Home() {
  return (
    <main className="bg-[url('/main/highMainBasdckground.png')] bg-cover bg-center relative ">
      <Image
        fill
        placeholder="blur"
        quality={100}
        className="object-cover -z-1"
        src={mainBg}
        alt="mainBG"
      />

      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </main>
  );
}
