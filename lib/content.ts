import { readFileSync } from 'fs';
import { join } from 'path';

export function getDataFromJson<T>(filename: string): T {
  const filePath = join(process.cwd(), 'data', filename);
  const fileContents = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}

export interface HeroData {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  badges: string[];
}

export interface AboutData {
  oneLiner: string;
  bullets: string[];
}

export interface FeatureData {
  title: string;
  desc: string;
  ref?: string;
  note?: string;
}

export interface PreviewData {
  tabs: Array<{
    id: string;
    label: string;
    images: string[];
  }>;
  note: string;
}

export interface PlanData {
  id: string;
  name: string;
  price: number;
  features: string[];
  for: string;
}

export interface FlowData {
  title: string;
  desc: string;
}

export interface FAQData {
  q: string;
  a: string;
}

export interface CTAData {
  line1: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}
