import { OptimizedImage } from '@/components/OptimizedImage';
import { Shield, Award, CheckCircle } from 'lucide-react';

interface CertificationsProps {
  showTitle?: boolean;
  compact?: boolean;
}

export const Certifications = ({ showTitle = true, compact = false }: CertificationsProps) => {
  return (
    <div className={`${compact ? 'py-8' : 'py-12'}`}>
      {showTitle && (
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Certifieringar & Kvalifikationer
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Officiellt certifierad kontrollansvarig enligt Plan- och bygglagen med 
            fullständig behörighet för teknisk kontroll och slutbesiktning.
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Certifierad Kontrollansvarig
              </h4>
              <p className="text-slate-600">
                Certifikatsnummer: KA11926 - Behörighet N enligt Plan- och bygglagen. 
                Certifierad av Kiwa Certification AB med fullständig behörighet för 
                kontroll av projekt av normal art.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Kiwa Certification
              </h4>
              <p className="text-slate-600">
                Ackrediterad certifieringsorganisation som säkerställer högsta 
                kvalitet och regelefterlevnad enligt svenska byggstandarder.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Giltigt till 2030-07-03
              </h4>
              <p className="text-slate-600">
                Certifikatet är aktivt och giltigt i fem år från utfärdandedatum. 
                Kontinuerlig fortbildning säkerställer uppdaterad kunskap inom bygglagstiftning.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <OptimizedImage
            src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751536744592-KA_copyright.png"
            alt="Certifikat för Kontrollansvarig enligt Plan- och bygglagen - Tobias Ytterman, Kiwa Certification"
            className="rounded-xl shadow-lg w-full h-auto border border-slate-200"
            width={600}
            height={800}
          />
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Giltigt Certifikat
          </div>
        </div>
      </div>
    </div>
  );
};