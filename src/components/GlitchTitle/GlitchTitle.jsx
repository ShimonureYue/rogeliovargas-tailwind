export default function GlitchTitle({ label }) {
  return (
    <h1
      data-text={label}
      aria-label={label}
      className='relative tracking-[0.04em] text-[2.25rem] sm:text-[3.5rem] md:text-[4.25rem] uppercase mt-3 mr-0 mb-3 ml-0 text-white-light font-bold [text-shadow:_2px_0_var(--red-light)] z-10 before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-2px] before:w-full before:bg-transparent before:overflow-hidden before:clip-[rect(0, 900px, 0, 0)] before:animate-glitch-before after:content-[attr(data-text)] after:absolute after:top-0 after:left-[2px] after:w-full after:bg-transparent after:overflow-hidenn after:clip-[rect(0, 900px, 0, 0)] after:animate-glitch-after before:hidden after:hidden sm:before:block sm:after:block'
    >
      {label}
    </h1>
  );
}
