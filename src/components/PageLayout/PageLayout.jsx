import { Footer } from '@/components/Footer';
export default function PageLayout({ children }) {
  return (
    <>
      <main className='m-[30px]'>{children}</main>
      <Footer />
      <div className='fixed left-0 top-0 z-20 h-[30px] w-full bg-blue-light' />
      <div className='fixed right-0 top-0 z-20 h-full w-[30px] bg-blue-light' />
      <div className='fixed bottom-0 left-0 z-20 h-[30px] w-full bg-blue-light' />
      <div className='fixed left-0 top-0 z-20 h-full w-[30px] bg-blue-light' />
    </>
  );
}
