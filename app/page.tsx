import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Stats from '@/components/Stats';
import QuickAccess from '@/components/QuickAccess';
import NewsSection from '@/components/NewsSection';
import Announcements from '@/components/Announcements';
import QuickLinks from '@/components/QuickLinks';
import Footer from '@/components/Footer';
import MotionShell from '@/components/MotionShell';
import LeadModal from '@/components/LeadModal';

const universitySchema = {
  '@context': 'https://schema.org', '@type': 'CollegeOrUniversity',
  name: 'Mahatma Gandhi University', url: 'https://www.mgu.ac.in/',
  address: { '@type': 'PostalAddress', streetAddress: 'Priyadarsini Hills', addressLocality: 'Kottayam', addressRegion: 'Kerala', postalCode: '686560', addressCountry: 'IN' },
};

export default function HomePage() {
  return <MotionShell>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
    <Header/>
    <main id="main-content"><Hero/><Ticker/><Stats/><QuickAccess/><NewsSection/><Announcements/><QuickLinks/></main>
    <Footer/><LeadModal/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(universitySchema) }}/>
  </MotionShell>;
}
