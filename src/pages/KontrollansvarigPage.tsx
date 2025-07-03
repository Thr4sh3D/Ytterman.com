import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { ServiceFeatures } from '@/components/ServiceFeatures';
import { ServiceProcess } from '@/components/ServiceProcess';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { Certification } from '@/components/Certification';

const KontrollansvarigPage = () => {
  const features = [
    {
      title: "Kontrollplan",
      description: "Upprättar en detaljerad kontrollplan som säkerställer att byggnationen uppfyller alla tekniska krav.",
      icon: "ClipboardCheck"
    },
    {
      title: "Teknisk rådgivning",
      description: "Erbjuder expertråd om byggtekniska frågor och hjälper till att lösa problem som uppstår under byggnationen.",
      icon: "HelpCircle"
    },
    {
      title: "Myndighetskontakt",
      description: "Hanterar kommunikation med byggnadsnämnden och andra myndigheter för att säkerställa att alla krav uppfylls.",
      icon: "Building"
    },
    {
      title: "Dokumentation",
      description: "Sammanställer all nödvändig dokumentation för slutbesked och arkivering enligt gällande regler.",
      icon: "FileText"
    },
    {
      title: "Platsbesök",
      description: "Genomför regelbundna platsbesök för att kontrollera att byggnationen följer ritningar och krav.",
      icon: "MapPin"
    },
    {
      title: "Slutrapport",
      description: "Upprättar en omfattande slutrapport som bekräftar att byggnationen uppfyller alla krav för slutbesked.",
      icon: "CheckSquare"
    }
  ];

  const processSteps = [
    {
      title: "Inledande konsultation",
      description: "Vi diskuterar ditt projekt, omfattning och specifika krav för att skapa en skräddarsydd plan."
    },
    {
      title: "Upprättande av kontrollplan",
      description: "Jag utarbetar en detaljerad kontrollplan som uppfyller alla lagkrav och projektspecifika behov."
    },
    {
      title: "Tekniskt samråd",
      description: "Jag deltar i det tekniska samrådet med byggnadsnämnden för att säkerställa att alla frågor besvaras."
    },
    {
      title: "Löpande kontroller",
      description: "Under byggnationen genomför jag regelbundna kontroller för att säkerställa att arbetet följer planen."
    },
    {
      title: "Dokumentation och rapportering",
      description: "Jag dokumenterar alla kontroller och sammanställer nödvändiga handlingar för slutbesked."
    },
    {
      title: "Slutsamråd och slutbesked",
      description: "Jag deltar i slutsamrådet och hjälper till att säkerställa att du får ditt slutbesked utan problem."
    }
  ];

  const faqs = [
    {
      question: "Vad är en kontrollansvarig?",
      answer: "En kontrollansvarig (KA) är en certifierad expert som övervakar byggprojekt för att säkerställa att de uppfyller alla tekniska krav enligt Plan- och bygglagen. KA fungerar som en oberoende part som hjälper både byggherren och byggnadsnämnden att säkerställa kvalitet och regelefterlevnad."
    },
    {
      question: "När behöver jag anlita en kontrollansvarig?",
      answer: "Du behöver anlita en kontrollansvarig för de flesta byggprojekt som kräver bygglov eller anmälan, såsom nybyggnation, större tillbyggnader, eller omfattande renoveringar. Mindre projekt som enkla uthus eller små tillbyggnader kan ibland undantas från kravet."
    },
    {
      question: "Hur tidigt i byggprocessen bör jag kontakta en kontrollansvarig?",
      answer: "Du bör kontakta en kontrollansvarig så tidigt som möjligt i processen, helst redan när du planerar ditt projekt. En KA kan ge värdefull input under planeringsfasen och måste vara utsedd innan det tekniska samrådet med byggnadsnämnden."
    },
    {
      question: "Vad kostar det att anlita en kontrollansvarig?",
      answer: "Kostnaden för en kontrollansvarig varierar beroende på projektets storlek, komplexitet och omfattning. Jag erbjuder transparenta priser och kan ge en offert efter en initial konsultation om ditt specifika projekt."
    },
    {
      question: "Hur länge är du involverad i mitt byggprojekt?",
      answer: "Som kontrollansvarig är jag involverad från projektets början till dess att slutbesked utfärdas. Detta inkluderar planering, tekniskt samråd, löpande kontroller under byggnationen, och slutsamråd med byggnadsnämnden."
    },
    {
      question: "Vad är skillnaden mellan en kontrollansvarig och en byggnadsinspektör?",
      answer: "En kontrollansvarig är anlitad av byggherren (dig) för att säkerställa att byggnationen uppfyller alla krav, medan en byggnadsinspektör arbetar för kommunen och utför myndighetstillsyn. KA hjälper dig att uppfylla kraven som byggnadsinspektören sedan kontrollerar."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Kontrollansvarig (KA) i Västernorrland | Tobias Ytterman</title>
        <meta 
          name="description" 
          content="Certifierad kontrollansvarig (KA) enligt PBL för byggprojekt i Sundsvall, Härnösand och hela Västernorrland. Erfaren och tillgänglig KA för ditt byggprojekt."
        />
        <meta 
          name="keywords" 
          content="kontrollansvarig, KA, PBL, bygglov, kontrollplan, Sundsvall, Härnösand, Västernorrland"
        />
      </Helmet>

      <PageHeader 
        title="Kontrollansvarig (KA)"
        description="Certifierad kontrollansvarig enligt Plan- och bygglagen för ditt byggprojekt i Västernorrland"
        imageSrc="/images/kontrollansvarig-hero.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Vad är en kontrollansvarig?</h2>
            <div className="prose prose-slate max-w-none">
              <p>
                En kontrollansvarig (KA) är en certifierad expert som säkerställer att ditt byggprojekt uppfyller alla tekniska krav enligt Plan- och bygglagen (PBL). Som kontrollansvarig är min roll att vara en oberoende part som hjälper både dig som byggherre och byggnadsnämnden att säkerställa kvalitet och regelefterlevnad.
              </p>
              <p>
                Enligt PBL måste de flesta byggprojekt som kräver bygglov eller anmälan ha en certifierad kontrollansvarig. Min uppgift är att upprätta en kontrollplan, genomföra regelbundna kontroller under byggnationen, och säkerställa att all nödvändig dokumentation finns för slutbeskedet.
              </p>
              <p>
                Som certifierad kontrollansvarig med behörighet N (normal) kan jag hantera de flesta typer av byggprojekt, från villor och tillbyggnader till mindre flerbostadshus och kommersiella fastigheter.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Mina tjänster som kontrollansvarig</h3>
              <ul>
                <li>Upprättande av kontrollplan enligt PBL</li>
                <li>Deltagande i tekniskt samråd med byggnadsnämnden</li>
                <li>Regelbundna platsbesök och kontroller under byggnationen</li>
                <li>Dokumentation av kontroller och avvikelser</li>
                <li>Sammanställning av underlag för slutbesked</li>
                <li>Deltagande i slutsamråd</li>
                <li>Teknisk rådgivning under hela byggprocessen</li>
              </ul>
              <p>
                Med över 20 års erfarenhet inom byggbranschen och som certifierad kontrollansvarig enligt det nya regelverket 2025 kan jag erbjuda trygghet och expertis för ditt byggprojekt i hela Västernorrland.
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <Certification 
              title="Certifierad Kontrollansvarig"
              description="Certifierad kontrollansvarig enligt Plan- och bygglagen med behörighet N (normal)."
              imageSrc="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751536746191-KA_copyright.png"
              certNumber="KA1198"
              issueDate="2025-07-03"
              issuedBy="Kiwa Certification AB"
            />
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 mt-6 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Verksam i hela Västernorrland</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Sundsvall</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Härnösand</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Timrå</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Kramfors</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Sollefteå</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Ånge</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Örnsköldsvik</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ServiceFeatures 
        title="Tjänster som kontrollansvarig"
        description="Som certifierad kontrollansvarig erbjuder jag omfattande tjänster för att säkerställa att ditt byggprojekt uppfyller alla krav"
        features={features}
      />

      <ServiceProcess 
        title="Arbetsprocess"
        description="Min process som kontrollansvarig säkerställer en strukturerad och effektiv hantering av ditt byggprojekt"
        steps={processSteps}
      />

      <FAQ 
        title="Vanliga frågor om kontrollansvarig"
        description="Här hittar du svar på vanliga frågor om rollen som kontrollansvarig och hur jag kan hjälpa dig med ditt byggprojekt"
        faqs={faqs}
      />

      <CTASection 
        title="Behöver du en certifierad kontrollansvarig?"
        description="Kontakta mig för en kostnadsfri konsultation om ditt byggprojekt"
        buttonText="Kontakta mig"
        buttonLink="/kontakt"
      />
    </Layout>
  );
};

export default KontrollansvarigPage;