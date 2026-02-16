export interface FormData {
  // Step 1: Business Info
  businessType: string;
  name: string;
  email: string;
  phone?: string;

  // Step 2: Pain Point
  biggestFrustration: string;
  otherFrustration?: string;

  // Step 3: Impact
  timeWasted: string;
  monthlyRevenue: string;

  // Step 4: AI Readiness
  aiToolsUsed: string;
  aiToolsList?: string;
  aiWish: string;

  // Step 5: Price Qualifier
  priceFeeling: string;
}

export type FormStep = 1 | 2 | 3 | 4 | 5;
