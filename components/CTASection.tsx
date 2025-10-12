import { CTAData } from '@/lib/content';
import Link from 'next/link';

interface CTASectionProps {
  data: CTAData;
}

export default function CTASection({ data }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-glass-purple via-deep-blue to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl mb-8 font-light">
          {data.line1}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={data.primary.href}
            className="px-8 py-4 bg-soft-gold text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            {data.primary.label}
          </Link>
          <Link 
            href={data.secondary.href}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
          >
            {data.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
