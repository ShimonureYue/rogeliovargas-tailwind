'use client';

export default function TextUnderline({ children }) {
  return (
    <div className='relative inline-block mb-6'>
      <span className='text-white uppercase'>{children}</span>
      <span className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-dark via-red-light to-orange-light rounded-full'></span>
    </div>
  );
}
