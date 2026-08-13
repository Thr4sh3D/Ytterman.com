import { PricingPackages } from '@/components/PricingPackages';

interface PricingProps {
  onPackageSelect: (packageId: string) => void;
}

/**
 * Bakåtkompatibel wrapper. All publicerad prissättning kommer från den centrala
 * konfiguration som används av PricingPackages.
 */
export const Pricing = ({ onPackageSelect: _onPackageSelect }: PricingProps) => (
  <PricingPackages />
);
