'use client';
import useFullHeight from '@/hooks/useFullHeight';
export default function SectionFullHeight ({ children }) {
  const styleHeight = useFullHeight();
  return (
    <div className='relative text-center transition-[all_0.5s_ease_0s] h-[calc(_100vh_-_60px)]' style={styleHeight}>
      {children}
    </div>
  );
}