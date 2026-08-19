import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DIGITAL_PRODUCT_OFFERS,
  isDigitalProductOrderable,
  type DigitalProductKey,
} from '@/config/commercialOffers';

interface ProductActionProps {
  productKey: DigitalProductKey;
  className?: string;
}

export const ProductAction = ({ productKey, className = '' }: ProductActionProps) => {
  const product = DIGITAL_PRODUCT_OFFERS[productKey];

  if (isDigitalProductOrderable(product) && product.paymentLink) {
    return (
      <Button asChild size="lg" className={`earth-gradient text-white hover:opacity-90 ${className}`}>
        <a href={product.paymentLink} target="_blank" rel="noopener noreferrer">
          Beställ
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    );
  }

  return (
    <Button asChild size="lg" className={`earth-gradient text-white hover:opacity-90 ${className}`}>
      <Link to={product.informationPath}>
        <Mail className="mr-2 h-5 w-5" />
        Begär information
      </Link>
    </Button>
  );
};
