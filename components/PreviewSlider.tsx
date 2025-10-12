'use client';

import { PreviewData } from '@/lib/content';
import { useState } from 'react';

interface PreviewSliderProps {
  data: PreviewData;
}

export default function PreviewSlider({ data }: PreviewSliderProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex gap-4 mb-6 justify-center">
        {data.tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === index
                ? 'bg-soft-gold text-gray-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {data.tabs[activeTab].images.map((image, index) => (
          <div key={index} className="relative aspect-[3/4] bg-gradient-to-br from-glass-purple to-deep-blue rounded-lg overflow-hidden flex items-center justify-center">
            <div className="text-white text-center p-8">
              <p className="text-2xl font-bold mb-2">{data.tabs[activeTab].label}</p>
              <p className="text-lg">頁面 {index + 1}</p>
              <p className="text-sm mt-4 opacity-75">（圖片即將上傳）</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 italic">
        {data.note}
      </p>
    </div>
  );
}
