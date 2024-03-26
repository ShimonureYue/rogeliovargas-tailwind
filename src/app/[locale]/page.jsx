"use client";
import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { BsMouse2Fill } from "react-icons/bs";
import { PageLayout } from "@/components/PageLayout";
import { GlitchTitle } from "@/components/GlitchTitle";
import { SectionFullHeight } from "@/components/SectionFullHeight";
import { TypingText } from "@/components/TypingText";
import { TextUnderline } from "@/components/TextUnderline";
import About from "../[locale]/about/About";

export default function LocalePage({ params: { locale } }) {
  const t = useTranslations("LocalePage");

  const basicsLabels = useTranslations("Basics");
  const work = useTranslations("work");

  const totalItems = parseInt(work("total"), 10);
  const workItems = [];
  for (var i = 0; i < totalItems; i++) {
    workItems.push({
      name: work(`${i.toString()}.name`),
      position: work(`${i.toString()}.position`),
      url: work(`${i.toString()}.url`),
      startDate: work(`${i.toString()}.startDate`),
      endDate: work(`${i.toString()}.endDate`),
      summary: work(`${i.toString()}.summary`),
      highlights: work(`${i.toString()}.highlights`).split(","),
    });
  }
  const mouseRef = useRef(null);
  const aboutRef = useRef(null);
  // const portfolioRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 110,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollWindow = () => {
    if (window.scrollY > 100) {
      mouseRef.current.classList.remove("opacity-100");
      mouseRef.current.classList.add("opacity-0");
    }
    if (window.scrollY < 100) {
      mouseRef.current.classList.remove("opacity-0");
      mouseRef.current.classList.add("opacity-100");
    }
  };

  useEffect(() => {
    if (window.scrollY < 100) {
      mouseRef.current.classList.add("opacity-100");
      mouseRef.current.classList.remove("opacity-0");
    }
    window.addEventListener("scroll", handleScrollWindow, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, [mouseRef]);

  return (
    <PageLayout locale={locale}>
      <div className="mx-auto my-0 max-w-full md:max-w-screen-xl lg:max-w-screen-2xl">
        <SectionFullHeight>
          <div className="table size-full table-fixed">
            <div className="relative table-cell size-3 align-middle">
              <GlitchTitle label={t("title")} />
              <TypingText
                ariaLabel={`${t("subtitle")}, ${t("location")}`}
                sequence={[t("subtitle"), 500, t("location"), 500]}
              />
              <div
                ref={mouseRef}
                className="absolute bottom-[90px] left-1/2 animate-hithere text-xl text-orange-light opacity-0 transition-opacity delay-150 duration-300 ease-in-out hover:cursor-pointer"
                onClick={() => {
                  handleScroll(aboutRef.current);
                }}
              >
                <BsMouse2Fill />
              </div>
            </div>
          </div>
        </SectionFullHeight>
        <About aboutRef={aboutRef} />
        {/** Expirience */}
        <section id="expirience" className="px-2 pb-36 pt-0  md:px-20">
          <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:p-0">
            <div>
              <div className="flex justify-center md:justify-start">
                <TextUnderline>{basicsLabels("work")}</TextUnderline>
              </div>
              <div className="text-sm text-white">
                {workItems.map((workItem, key) => (
                  <div
                    key={`work-item-${key}`}
                    className='before:content-[" "] relative pb-12 pl-8 before:absolute before:left-0 before:top-[13px] before:h-full before:w-px before:bg-orange-light last:before:bg-transparent'
                  >
                    <div className='before:content-[" "] relative mb-3 flex w-fit gap-2 rounded border border-solid border-orange-light p-1 text-xs text-orange-light before:absolute before:left-[-32px] before:top-[50%] before:h-px before:w-8 before:bg-orange-light'>
                      <div key={`work-item-startDate-${key}`}>
                        {workItem.startDate}
                      </div>
                      -
                      <div key={`work-item-endDate-${key}`}>
                        {workItem.endDate}
                      </div>
                    </div>
                    <div key={`work-item-name-${key}`}>{workItem.name}</div>
                    <div key={`work-item-summary-${key}`}>
                      {workItem.summary}
                    </div>
                    <div key={`work-item-url-${key}`}>{workItem.url}</div>
                    {workItem.highlights.map((highlight, keyH) => (
                      <div key={`work-highlights-${key}-${keyH}`}>
                        {highlight}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-center md:justify-start">
                <TextUnderline>{basicsLabels("work")}</TextUnderline>
              </div>
              <div className="text-sm text-white">
                {workItems.map((workItem, key) => (
                  <div
                    key={`work-item-${key}`}
                    className='before:content-[" "] relative pb-12 pl-8 before:absolute before:left-0 before:top-[13px] before:h-full before:w-px before:bg-orange-light last:before:bg-transparent'
                  >
                    <div className='before:content-[" "] relative mb-3 flex w-fit gap-2 rounded border border-solid border-orange-light p-1 text-xs text-orange-light before:absolute before:left-[-32px] before:top-[50%] before:h-px before:w-8 before:bg-orange-light'>
                      <div key={`work-item-startDate-${key}`}>
                        {workItem.startDate}
                      </div>
                      -
                      <div key={`work-item-endDate-${key}`}>
                        {workItem.endDate}
                      </div>
                    </div>
                    <div key={`work-item-name-${key}`}>{workItem.name}</div>
                    <div key={`work-item-summary-${key}`}>
                      {workItem.summary}
                    </div>
                    <div key={`work-item-url-${key}`}>{workItem.url}</div>
                    {workItem.highlights.map((highlight, keyH) => (
                      <div key={`work-highlights-${key}-${keyH}`}>
                        {highlight}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="h-12 md:h-64"></div>
      </div>
    </PageLayout>
  );
}
