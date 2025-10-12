import { Metadata } from 'next';
import Section from '@/components/Section';
import PreviewSlider from '@/components/PreviewSlider';
import { getDataFromJson, PreviewData } from '@/lib/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '試閱樣章',
  description: '查看乾隆與楊貴妃的全方位命理解讀報告試閱版本',
};

export default function PreviewPage() {
  const previewData = getDataFromJson<PreviewData>('preview.json');

  return (
    <main className="min-h-screen bg-gray-50">
      <Section className="pt-24">
        <div className="text-center mb-12">
          <Link href="/" className="text-soft-gold hover:underline mb-4 inline-block">
            ← 返回首頁
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            試閱樣章
          </h1>
          <p className="text-lg text-gray-600">
            以下為乾隆與楊貴妃的命理解讀報告試閱版本
          </p>
        </div>

        <PreviewSlider data={previewData} />
      </Section>
    </main>
  );
}
