import { Metadata } from 'next';
import Section from '@/components/Section';
import PricingTable from '@/components/PricingTable';
import { getDataFromJson, PlanData } from '@/lib/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '方案與價格',
  description: '選擇適合你的全方位命理解讀報告方案',
};

export default function PricingPage() {
  const plansData = getDataFromJson<PlanData[]>('plans.json');

  return (
    <main className="min-h-screen bg-gray-50">
      <Section className="pt-24">
        <div className="text-center mb-12">
          <Link href="/" className="text-soft-gold hover:underline mb-4 inline-block">
            ← 返回首頁
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            方案與價格
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            選擇最適合你的解讀報告方案
          </p>
        </div>

        <PricingTable plans={plansData} />

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            選好方案後，請透過以下方式聯繫我們：
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://line.me/your-line"
              className="px-6 py-3 bg-[#06C755] text-white rounded-lg font-semibold hover:bg-[#05b34c] transition-colors"
            >
              LINE 聯繫
            </a>
            <a 
              href="mailto:contact@rainbow-sanctuary.com"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Email 聯繫
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
