import { HeroData } from '@/lib/content';
import Link from 'next/link';

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-glass-purple via-deep-blue to-black">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          {data.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          {data.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href={data.primaryCta.href}
            className="px-8 py-4 bg-soft-gold text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            {data.primaryCta.label}
          </Link>
          <Link 
            href={data.secondaryCta.href}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
          >
            {data.secondaryCta.label}
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {data.badges.map((badge, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
