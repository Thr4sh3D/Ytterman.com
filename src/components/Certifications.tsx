import { OptimizedImage } from '@/components/OptimizedImage';
import { Shield, Award, CheckCircle, HardHat } from 'lucide-react';

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
            fullständig behörighet för teknisk kontroll och slutbesiktning samt 
            uppdaterade BAS-P och BAS-U certifikat.
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
                <p className="text-sm text-slate-500">Kiwa Certification AB</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-600">Certifikatsnummer:</span>
                <span className="font-semibold">KA11926</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Behörighet:</span>
                <span className="font-semibold">N (Normal art)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Giltigt till:</span>
                <span className="font-semibold text-green-600">2030-07-03</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative flex-shrink-0">
                <OptimizedImage
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751537468357-profile_pic_color_square.png"
                  alt="Tobias Ytterman - Certifierad Kontrollansvarig"
                  className="rounded-lg w-24 h-24 object-cover border border-slate-200"
                  width={96}
                  height={96}
                />
              </div>
              <div className="flex-1">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800">Certifierad enligt PBL</span>
                  </div>
                  <div className="text-xs text-green-700 mt-1">
                    Fullständig behörighet för teknisk kontroll
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BAS-P & BAS-U Certifikat */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <HardHat className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">BAS-P & BAS-U</h4>
                <p className="text-sm text-slate-500">UtbildningsKraft</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-600">Kurstyp:</span>
                <span className="font-semibold">Webbkurs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Genomförd:</span>
                <span className="font-semibold">25/6 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Giltigt till:</span>
                <span className="font-semibold text-green-600">24/6 2030</span>
              </div>
              <div className="text-xs text-slate-500 mt-2">
                Kursen omfattar gällande AFS från 1 jan 2025
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative flex-shrink-0">
                <OptimizedImage
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751537468357-profile_pic_color_square.png"
                  alt="Tobias Ytterman - BAS-P & BAS-U Certifierad"
                  className="rounded-lg w-24 h-24 object-cover border border-slate-200"
                  width={96}
                  height={96}
                />
              </div>
              <div className="flex-1">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="text-sm font-medium text-orange-800">Uppdaterad 2025</span>
                  </div>
                  <div className="text-xs text-orange-700 mt-1">
                    Certifierad för både BAS-P och BAS-U
                  </div>
                </div>
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
            <h5 className="font-semibold text-slate-900 mb-1">Fullständig Behörighet</h5>
            <p className="text-sm text-slate-600">
              Certifierad för teknisk kontroll och slutbesiktning enligt Plan- och bygglagen.
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
              Senaste BAS-P och BAS-U enligt gällande AFS från 2025.
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