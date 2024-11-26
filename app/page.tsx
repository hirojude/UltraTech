import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ServicesPage from "./Services/page";

import { title, subtitle } from "@/components/primitives";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BackgroundLines } from "@/components/ui/background-lines";
import img16 from "@/public/image16.jpg";
import img17 from "@/public/image17.jpg";
import img18 from "@/public/image18.jpg";
import img19 from "@/public/image19.jpg";
import img20 from "@/public/image20.jpg";

export default function Home() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image: img16,
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image: img17,
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: img18,
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image: img19,
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image: img20,
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image: img17,
    },
  ];

  return (
    <div className="bg-fixed-image">
      <div className="bg-overlay">
        <div className="content-wrapper">
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-0 m-0 h-[90vh]">
            <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[90vh] m-0 px-0">
              <div className="inline-block  text-center justify-center pt-0 mt-0 ">
                <div className="">
                  <span className={title({ size: "lg" })}>Ultra&nbsp;</span>
                  <span className={title({ color: "green", size: "lg" })}>
                    Tech&nbsp;
                  </span>
                  <br />
                  <span className={title({ size: "lg" })}>
                    Innovation at the Speed of Change
                  </span>
                </div>
                <div className={subtitle({ color: "green", class: "mt-8" })}>
                  Connecting you with the future of tech
                </div>
              </div>
              <div className="flex flex-row items-center justify-center mb-10 w-full mt-4">
                <AnimatedTooltip items={people} />
              </div>
            </section>
          </BackgroundLines>
          <section
            className="w-full relative isolate overflow-hidden bg-gradient-to-b from-white/20 to-[125%]  ring-1 ring-gray-900/5 dark:from-gray-500/20 dark:ring-gray-950/5 m-0 flex flex-col items-center "
            id="about"
          >
            <AboutPage />
          </section>
          <section className=" h-[100%]" id="services">
            <ServicesPage />
          </section>
          <section className="h-[100vh]" id="contacts">
            <ContactPage />
          </section>
        </div>
      </div>
    </div>
  );
}
