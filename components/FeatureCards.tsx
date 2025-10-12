import { FeatureData } from '@/lib/content';

interface FeatureCardsProps {
  features: FeatureData[];
}

export default function FeatureCards({ features }: FeatureCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
        >
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            {feature.title}
          </h3>
          <p className="text-gray-600 mb-2">
            {feature.desc}
          </p>
          {feature.ref && (
            <p className="text-sm text-soft-gold">
              {feature.ref}
            </p>
          )}
          {feature.note && (
            <p className="text-sm text-gray-500 italic mt-2">
              {feature.note}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
