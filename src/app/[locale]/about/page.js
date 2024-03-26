import About from './About';
import { PageLayout } from '@/components/PageLayout';

const AboutPage = ({ params: { locale } }) => {
  return (
    <PageLayout locale={locale}>
      <About />
    </PageLayout>
  );
};

export default AboutPage;
