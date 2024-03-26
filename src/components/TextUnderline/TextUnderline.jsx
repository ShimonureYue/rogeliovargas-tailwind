'use client';

export default function TextUnderline({ children }) {
  return (
    <div className='relative mb-6 inline-block'>
      <span className='uppercase text-white'>{children}</span>
      <span className='absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-red-dark via-red-light to-orange-light'></span>
    </div>
  );
}
