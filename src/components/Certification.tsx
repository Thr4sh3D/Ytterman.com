import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Search, Award } from 'lucide-react';

interface CertificationProps {
  title: string;
  description: string;
  imageSrc: string;
  certNumber?: string;
  issueDate?: string;
  issuedBy?: string;
}

export const Certification = ({
  title,
  description,
  imageSrc,
  certNumber,
  issueDate,
  issuedBy
}: CertificationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </div>
        
        <p className="text-slate-600 mb-4">{description}</p>
        
        {certNumber && (
          <div className="text-sm text-slate-500 mb-1">
            <span className="font-medium">Certifikatnummer:</span> {certNumber}
          </div>
        )}
        
        {issueDate && (
          <div className="text-sm text-slate-500 mb-1">
            <span className="font-medium">Utfärdat:</span> {issueDate}
          </div>
        )}
        
        {issuedBy && (
          <div className="text-sm text-slate-500 mb-4">
            <span className="font-medium">Utfärdare:</span> {issuedBy}
          </div>
        )}
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full mt-2">
              <Search className="w-4 h-4 mr-2" />
              Visa certifikat
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <div className="relative w-full">
                <img 
                  src={imageSrc} 
                  alt={`${title} certifikat`} 
                  className="w-full h-auto rounded-md"
                />
              </div>
              <p className="text-sm text-slate-500 mt-4 text-center">
                Detta certifikat bekräftar Tobias Yttermans kompetens som certifierad kontrollansvarig enligt Plan- och Bygglagen.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};