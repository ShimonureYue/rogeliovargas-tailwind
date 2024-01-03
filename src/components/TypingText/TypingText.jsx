'use client'
import { TypeAnimation } from 'react-type-animation';

export default function TypingText({ ariaLabel, sequence }) {
  return (
    <TypeAnimation
      className='font-normal tracking-[0] text-sm text-white-dark'
      aria-label={ariaLabel}
      sequence={sequence}
      repeat={Infinity}
    />
  );
}
