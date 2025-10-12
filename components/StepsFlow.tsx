import { FlowData } from '@/lib/content';

interface StepsFlowProps {
  steps: FlowData[];
}

export default function StepsFlow({ steps }: StepsFlowProps) {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 bg-soft-gold rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto mb-4">
            {index + 1}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            {step.title}
          </h3>
          <p className="text-gray-600">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
