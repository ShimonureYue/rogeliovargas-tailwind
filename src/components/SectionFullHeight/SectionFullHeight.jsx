'use client';
import useFullHeight from '@/hooks/useFullHeight';
export default function SectionFullHeight ({ children }) {
  const styleHeight = useFullHeight();
  return (
    <div className='relative h-[calc(_100vh_-_60px)] text-center transition-[all_0.5s_ease_0s]' style={styleHeight}>
      {children}
    </div>
  );
}