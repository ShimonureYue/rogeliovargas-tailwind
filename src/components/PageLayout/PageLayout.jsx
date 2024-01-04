import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

export default function PageLayout({ children, locale }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Footer');
  return (
    <>
      <main className='m-[30px]'>{children}</main>
      <div className='fixed min-h-16 bottom-[30px] left-0 w-full bg-blue-dark opacity-100 visible z-10'>
        <div className='flex px-[60px] pt-3 pb-7 text-white-dark justify-between items-center flex-col-reverse sm:flex-row'>
          <div className='text-sm text-center'>{t('copy')}</div>
          <div className='text-xl float-right'>
            <Link
              className='inline-block'
              href='https://www.linkedin.com/in/rogelio-vargas-marquez/'
              aria-label='Linkedin'
              target='_blank'
            >
              <IoLogoLinkedin />
            </Link>
            <Link
              className='inline-block pl-3'
              href='https://github.com/ShimonureYue'
              aria-label='Github'
              target='_blank'
            >
              <IoLogoGithub />
            </Link>
          </div>
        </div>
      </div>
      <div className='fixed top-0 left-0 w-full h-[30px] bg-blue-light z-20' />
      <div className='fixed right-0 top-0 w-[30px] h-full bg-blue-light z-20' />
      <div className='fixed bottom-0 left-0 w-full h-[30px] bg-blue-light z-20' />
      <div className='fixed left-0 top-0 w-[30px] h-full bg-blue-light z-20' />
    </>
  );
}
