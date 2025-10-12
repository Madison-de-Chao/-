import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import FeatureCards from '@/components/FeatureCards';
import PreviewSlider from '@/components/PreviewSlider';
import PricingTable from '@/components/PricingTable';
import StepsFlow from '@/components/StepsFlow';
import FAQList from '@/components/FAQList';
import CTASection from '@/components/CTASection';
import { 
  getDataFromJson, 
  HeroData, 
  AboutData, 
  FeatureData, 
  PreviewData, 
  PlanData, 
  FlowData, 
  FAQData, 
  CTAData 
} from '@/lib/content';

export default function HomePage() {
  const heroData = getDataFromJson<HeroData>('hero.json');
  const aboutData = getDataFromJson<AboutData>('about.json');
  const featuresData = getDataFromJson<FeatureData[]>('features.json');
  const previewData = getDataFromJson<PreviewData>('preview.json');
  const plansData = getDataFromJson<PlanData[]>('plans.json');
  const flowData = getDataFromJson<FlowData[]>('flow.json');
  const faqData = getDataFromJson<FAQData[]>('faq.json');
  const ctaData = getDataFromJson<CTAData>('cta.json');

  return (
    <main>
      <HeroSection data={heroData} />
      
      <Section id="about" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          什麼是《全方位命理解讀報告》
        </h2>
        <p className="text-lg text-center mb-8 text-gray-700 max-w-4xl mx-auto">
          {aboutData.oneLiner}
        </p>
        <ul className="space-y-4 max-w-3xl mx-auto">
          {aboutData.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-6 h-6 text-soft-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="features" className="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          你會拿到什麼
        </h2>
        <FeatureCards features={featuresData} />
      </Section>

      <Section id="preview" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          試閱樣章
        </h2>
        <PreviewSlider data={previewData} />
      </Section>

      <Section id="pricing" className="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          方案與價格
        </h2>
        <PricingTable plans={plansData} />
      </Section>

      <Section id="flow" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          使用流程
        </h2>
        <StepsFlow steps={flowData} />
      </Section>

      <Section id="faq" className="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          常見問題
        </h2>
        <div className="max-w-3xl mx-auto">
          <FAQList faqs={faqData} />
        </div>
      </Section>

      <CTASection data={ctaData} />
    </main>
  );
}
