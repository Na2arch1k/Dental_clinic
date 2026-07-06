import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Technology } from "@/components/sections/Technology";
import { Doctors } from "@/components/sections/Doctors";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Appointment } from "@/components/sections/Appointment";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Technology />
      <Doctors />
      <Process />
      <Reviews />
      <FAQ />
      <Appointment />
    </>
  );
}
