'use client'
import { TypeAnimation } from 'react-type-animation';

export default function TypingText({ ariaLabel, sequence }) {
  return (
    <TypeAnimation
      className='text-base font-normal tracking-normal text-white-dark'
      aria-label={ariaLabel}
      sequence={sequence}
      repeat={Infinity}
    />
  );
}
