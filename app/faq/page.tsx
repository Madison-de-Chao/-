import { Metadata } from 'next';
import Section from '@/components/Section';
import FAQList from '@/components/FAQList';
import { getDataFromJson, FAQData } from '@/lib/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '常見問題',
  description: '關於全方位命理解讀報告的常見問題與解答',
};

export default function FAQPage() {
  const faqData = getDataFromJson<FAQData[]>('faq.json');

  return (
    <main className="min-h-screen bg-gray-50">
      <Section className="pt-24">
        <div className="text-center mb-12">
          <Link href="/" className="text-soft-gold hover:underline mb-4 inline-block">
            ← 返回首頁
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            常見問題
          </h1>
          <p className="text-lg text-gray-600">
            解答你對全方位命理解讀報告的疑問
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQList faqs={faqData} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            還有其他問題？歡迎聯繫我們
          </p>
          <Link 
            href="/pricing"
            className="inline-block px-6 py-3 bg-soft-gold text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            查看方案與聯繫方式
          </Link>
        </div>
      </Section>
    </main>
  );
}
