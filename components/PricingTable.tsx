import { PlanData } from '@/lib/content';

interface PricingTableProps {
  plans: PlanData[];
}

export default function PricingTable({ plans }: PricingTableProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div 
          key={plan.id}
          className={`p-8 rounded-xl border-2 ${
            plan.id === 'full' 
              ? 'border-soft-gold bg-soft-gold/5 relative' 
              : 'border-gray-200 bg-white'
          }`}
        >
          {plan.id === 'full' && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-soft-gold text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              推薦
            </div>
          )}
          
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            {plan.name}
          </h3>
          
          <div className="mb-4">
            <span className="text-4xl font-bold text-gray-900">
              ${plan.price.toLocaleString()}
            </span>
          </div>

          <p className="text-gray-600 mb-6 text-sm">
            {plan.for}
          </p>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-soft-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <a 
            href="https://line.me/your-line"
            className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
              plan.id === 'full'
                ? 'bg-soft-gold text-gray-900 hover:bg-yellow-500'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            選擇方案
          </a>
        </div>
      ))}
    </div>
  );
}
