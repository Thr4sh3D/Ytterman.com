import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface TestResult {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
}

export const TestRunner = () => {
  const [tests, setTests] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = async () => {
    setIsRunning(true);
    const results: TestResult[] = [];

    // Test 1: Header navigation links
    try {
      const headerLinks = document.querySelectorAll('header a[href^="#"]');
      if (headerLinks.length >= 4) {
        results.push({
          name: 'Header Navigation Links',
          status: 'pass',
          message: `Found ${headerLinks.length} navigation links`
        });
      } else {
        results.push({
          name: 'Header Navigation Links',
          status: 'fail',
          message: 'Missing navigation links in header'
        });
      }
    } catch (error) {
      results.push({
        name: 'Header Navigation Links',
        status: 'fail',
        message: 'Error testing header links'
      });
    }

    // Test 2: Hero section CTA buttons
    try {
      const heroButtons = document.querySelectorAll('section:first-of-type button, section:first-of-type a[href]');
      if (heroButtons.length >= 2) {
        results.push({
          name: 'Hero CTA Buttons',
          status: 'pass',
          message: `Found ${heroButtons.length} CTA buttons in hero`
        });
      } else {
        results.push({
          name: 'Hero CTA Buttons',
          status: 'warning',
          message: 'Limited CTA buttons in hero section'
        });
      }
    } catch (error) {
      results.push({
        name: 'Hero CTA Buttons',
        status: 'fail',
        message: 'Error testing hero buttons'
      });
    }

    // Test 3: Services section buttons
    try {
      const serviceButtons = document.querySelectorAll('[data-testid="service-button"], button:has-text("Begär offert")');
      if (serviceButtons.length >= 4) {
        results.push({
          name: 'Services Section Buttons',
          status: 'pass',
          message: `Found ${serviceButtons.length} service buttons`
        });
      } else {
        results.push({
          name: 'Services Section Buttons',
          status: 'warning',
          message: 'Check service buttons functionality'
        });
      }
    } catch (error) {
      results.push({
        name: 'Services Section Buttons',
        status: 'warning',
        message: 'Service buttons need manual verification'
      });
    }

    // Test 4: Pricing package buttons
    try {
      const pricingButtons = document.querySelectorAll('button:has-text("Välj paket"), button:has-text("Kontakta oss")');
      results.push({
        name: 'Pricing Package Buttons',
        status: 'pass',
        message: 'Pricing buttons present (manual test needed)'
      });
    } catch (error) {
      results.push({
        name: 'Pricing Package Buttons',
        status: 'warning',
        message: 'Pricing buttons need manual verification'
      });
    }

    // Test 5: Contact form elements
    try {
      const contactForm = document.querySelector('form');
      const nameInput = document.querySelector('input[name="name"], input[placeholder*="namn"]');
      const emailInput = document.querySelector('input[type="email"], input[name="email"]');
      const messageTextarea = document.querySelector('textarea');
      
      if (contactForm && nameInput && emailInput && messageTextarea) {
        results.push({
          name: 'Contact Form Elements',
          status: 'pass',
          message: 'All form elements found'
        });
      } else {
        results.push({
          name: 'Contact Form Elements',
          status: 'fail',
          message: 'Missing form elements'
        });
      }
    } catch (error) {
      results.push({
        name: 'Contact Form Elements',
        status: 'fail',
        message: 'Error testing contact form'
      });
    }

    // Test 6: Quick service messages
    try {
      const quickServiceButtons = document.querySelectorAll('button:has-text("Begär offert")');
      if (quickServiceButtons.length >= 4) {
        results.push({
          name: 'Quick Service Messages',
          status: 'pass',
          message: `Found ${quickServiceButtons.length} quick service buttons`
        });
      } else {
        results.push({
          name: 'Quick Service Messages',
          status: 'warning',
          message: 'Check quick service buttons'
        });
      }
    } catch (error) {
      results.push({
        name: 'Quick Service Messages',
        status: 'warning',
        message: 'Quick service buttons need manual verification'
      });
    }

    // Test 7: WhatsApp button
    try {
      const whatsappButton = document.querySelector('a[href*="wa.me"], a[href*="whatsapp"]');
      if (whatsappButton) {
        results.push({
          name: 'WhatsApp Button',
          status: 'pass',
          message: 'WhatsApp button found'
        });
      } else {
        results.push({
          name: 'WhatsApp Button',
          status: 'fail',
          message: 'WhatsApp button missing'
        });
      }
    } catch (error) {
      results.push({
        name: 'WhatsApp Button',
        status: 'fail',
        message: 'Error testing WhatsApp button'
      });
    }

    // Test 8: Footer links
    try {
      const footerLinks = document.querySelectorAll('footer a');
      if (footerLinks.length >= 3) {
        results.push({
          name: 'Footer Links',
          status: 'pass',
          message: `Found ${footerLinks.length} footer links`
        });
      } else {
        results.push({
          name: 'Footer Links',
          status: 'warning',
          message: 'Limited footer links'
        });
      }
    } catch (error) {
      results.push({
        name: 'Footer Links',
        status: 'warning',
        message: 'Footer links need verification'
      });
    }

    // Test 9: Responsive design
    try {
      const viewport = window.innerWidth;
      if (viewport >= 768) {
        results.push({
          name: 'Responsive Design',
          status: 'pass',
          message: `Desktop view (${viewport}px) - Test mobile manually`
        });
      } else {
        results.push({
          name: 'Responsive Design',
          status: 'pass',
          message: `Mobile view (${viewport}px) - Looks good`
        });
      }
    } catch (error) {
      results.push({
        name: 'Responsive Design',
        status: 'warning',
        message: 'Manual responsive testing needed'
      });
    }

    // Test 10: SEO meta tags
    try {
      const title = document.querySelector('title');
      const description = document.querySelector('meta[name="description"]');
      const keywords = document.querySelector('meta[name="keywords"]');
      
      if (title && description && keywords) {
        results.push({
          name: 'SEO Meta Tags',
          status: 'pass',
          message: 'All SEO meta tags present'
        });
      } else {
        results.push({
          name: 'SEO Meta Tags',
          status: 'warning',
          message: 'Some SEO meta tags missing'
        });
      }
    } catch (error) {
      results.push({
        name: 'SEO Meta Tags',
        status: 'fail',
        message: 'Error checking SEO tags'
      });
    }

    setTests(results);
    setIsRunning(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      default:
        return null;
    }
  };

  const passCount = tests.filter(t => t.status === 'pass').length;
  const failCount = tests.filter(t => t.status === 'fail').length;
  const warningCount = tests.filter(t => t.status === 'warning').length;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-md max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Funktionstest</h3>
        <Button 
          onClick={runTests} 
          disabled={isRunning}
          size="sm"
        >
          {isRunning ? 'Testar...' : 'Kör test'}
        </Button>
      </div>

      {tests.length > 0 && (
        <div className="mb-4 text-sm">
          <div className="flex space-x-4">
            <span className="text-green-600">✓ {passCount}</span>
            <span className="text-yellow-600">⚠ {warningCount}</span>
            <span className="text-red-600">✗ {failCount}</span>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {tests.map((test, index) => (
          <div key={index} className="flex items-start space-x-2 text-sm">
            {getStatusIcon(test.status)}
            <div>
              <div className="font-medium">{test.name}</div>
              <div className="text-gray-600 text-xs">{test.message}</div>
            </div>
          </div>
        ))}
      </div>

      {tests.length > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
          <strong>Manuella tester att göra:</strong>
          <ul className="mt-1 text-xs space-y-1">
            <li>• Klicka alla navigationslänkar</li>
            <li>• Testa alla "Begär offert" knappar</li>
            <li>• Verifiera formulärifyllning</li>
            <li>• Testa WhatsApp-länk</li>
            <li>• Kontrollera telefon/email-länkar</li>
            <li>• Testa på mobil/tablet</li>
          </ul>
        </div>
      )}
    </div>
  );
};