export default function GlitchTitle({ label }) {
  return (
    <h1
      data-text={label}
      aria-label={label}
      className='before:clip-[rect(0, 900px, 0, 0)] after:overflow-hidenn after:clip-[rect(0, 900px, 0, 0)] relative z-10 m-0 text-[2.25rem] font-bold uppercase tracking-[0.04em] text-white-light [text-shadow:_2px_0_var(--red-light)] before:absolute before:left-[-2px] before:top-0 before:hidden before:w-full before:animate-glitch-before before:overflow-hidden before:bg-transparent before:content-[attr(data-text)] after:absolute after:left-[2px] after:top-0 after:hidden after:w-full after:animate-glitch-after after:bg-transparent after:content-[attr(data-text)] sm:before:block sm:after:block md:text-[3.5rem] lg:text-[4.25rem]'
    >
      {label}
    </h1>
  );
}
