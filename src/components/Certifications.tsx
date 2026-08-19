import { OptimizedImage } from '@/components/OptimizedImage';
import { Shield, Award, CheckCircle, HardHat, ExternalLink } from 'lucide-react';
import { BAS, KA_CERT } from '@/config/company';

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
            Certifierad kontrollansvarig enligt Plan- och bygglagen med behörighet N.
            BAS-P och BAS-U redovisas separat som utbildning och kompetens för rollerna.
          </p>
        </div>
      )}
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Kontrollansvarig Certifikat */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Kontrollansvarig</h4>
                <p className="text-sm text-slate-500">{KA_CERT.issuer}</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-600">Certifikatsnummer:</span>
                <span className="font-semibold">{KA_CERT.certificateNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Behörighet:</span>
                <span className="font-semibold">{KA_CERT.authorization} (normal art)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Giltigt till:</span>
                <span className="font-semibold text-green-700">{KA_CERT.validUntil}</span>
              </div>
            </div>
            
            <div className="relative mb-4">
              <OptimizedImage
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751536744592-KA_copyright.png"
                alt="Certifikat för Kontrollansvarig enligt Plan- och bygglagen - Tobias Ytterman, Kiwa Certification"
                className="rounded-lg w-full h-auto border border-slate-200"
                width={400}
                height={500}
              />
              <div className="absolute top-2 right-2 bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">
                Giltigt
              </div>
            </div>

            {/* KIWA Certifikat Länk */}
            <a 
              href={KA_CERT.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full earth-gradient hover:opacity-90 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Verifiera certifikat hos KIWA
            </a>
          </div>
        </div>

        {/* BAS-P & BAS-U utbildningsintyg */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <HardHat className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">BAS-P & BAS-U – utbildning</h4>
                <p className="text-sm text-slate-500">{BAS.trainingProvider}</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-600">Kurstyp:</span>
                <span className="font-semibold">Webbkurs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Genomförd:</span>
                <span className="font-semibold">{BAS.completedOn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Giltigt till:</span>
                <span className="font-semibold text-green-700">{BAS.validUntil}</span>
              </div>
              <div className="text-xs text-slate-500 mt-2">
                Kursen omfattar aktuellt regelverk, däribland {BAS.regulation}
              </div>
            </div>
            
            <div className="relative">
              <OptimizedImage
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751537157850-BASUP_copyright.png"
                alt={`Kursintyg BAS-P och BAS-U – Tobias Ytterman, ${BAS.trainingProvider}`}
                className="rounded-lg w-full h-auto border border-slate-200"
                width={400}
                height={500}
              />
              <div className="absolute top-2 right-2 bg-green-700 text-white px-2 py-1 rounded text-xs font-semibold">
                Förnyat 2025
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h5 className="font-semibold text-slate-900 mb-1">Behörighet N</h5>
            <p className="text-sm text-slate-600">
              Certifierad kontrollansvarig för projekt av normal art enligt Plan- och bygglagen.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <HardHat className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h5 className="font-semibold text-slate-900 mb-1">Uppdaterad Säkerhetsutbildning</h5>
            <p className="text-sm text-slate-600">
              Genomförd utbildning för BAS-P och BAS-U enligt aktuellt regelverk.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h5 className="font-semibold text-slate-900 mb-1">Kontinuerlig Fortbildning</h5>
            <p className="text-sm text-slate-600">
              Regelbunden uppdatering av kunskap inom bygglagstiftning och säkerhet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
