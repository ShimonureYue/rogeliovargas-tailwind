'use client';
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TextUnderline } from "@/components/TextUnderline";

const About = ({ aboutRef }) => {
  const basics = useTranslations("basics");
  const basicsLabels = useTranslations("Basics");

  return (
    <section id="section-about" ref={aboutRef} className="px-2 pb-36 pt-0  md:px-20">
      <div className="flex justify-center md:justify-start">
        <TextUnderline>{basicsLabels("aboutMe")}</TextUnderline>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,_1fr)]">
        <div className="mb-3 flex w-full justify-center md:mb-0">
          <div className="relative size-12 md:size-20 lg:size-28">
            <Image
              className="rounded-full"
              src="/rogeliovargas-photo.jpeg"
              alt="Rogelio Vargas Photo"
              fill
            />
          </div>
        </div>
        <div className="text-sm text-white">
          <p className="mb-16 text-center md:text-left">{basics("summary")}</p>
          <div className="mb-8">
            <ul className="grid grid-cols-1 gap-3 gap-x-2 text-center md:grid-cols-2 md:text-left xl:grid-cols-3 ">
              <li>
                <strong className="text-orange-light">
                  {basicsLabels("name")}
                </strong>
                {basics("name")}
              </li>
              <li>
                <strong className="text-orange-light">
                  {basicsLabels("age")}
                </strong>
                {basics("age")}
              </li>
              <li>
                <strong className="text-orange-light">
                  {basicsLabels("label")}
                </strong>
                {basics("label")}
              </li>
              <li>
                <strong className="text-orange-light">
                  {basicsLabels("location.citizenship")}
                </strong>
                {basics("location.citizenship")}
              </li>
              <li>
                <strong className="text-orange-light">
                  {basicsLabels("location.region")}
                </strong>
                {basics("location.region")}
              </li>
              <li className="text-wrap">
                <strong className="text-orange-light">
                  {basicsLabels("email")}
                </strong>
                {basics("email")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
