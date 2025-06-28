import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Calendar, Clock, ArrowLeft, Phone, Mail } from 'lucide-react';

const blogContent: Record<string, any> = {
  "vad-ar-kontrollansvarig": {
    title: "Vad är en Kontrollansvarig och varför behöver du en?",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Byggkontroll",
    content: `
      <p>En Kontrollansvarig (KA) är en certifierad person som har till uppgift att säkerställa att byggprojekt genomförs enligt gällande byggbestämmelser och säkerhetsföreskrifter. Enligt Plan- och bygglagen (PBL) är det obligatoriskt att utse en kontrollansvarig för de flesta byggprojekt.</p>

      <h2>Vad gör en Kontrollansvarig?</h2>
      <p>Kontrollansvarigs huvuduppgifter inkluderar:</p>
      <ul>
        <li>Upprätta kontrollplan för projektet</li>
        <li>Genomföra kontroller under byggprocessen</li>
        <li>Dokumentera alla kontroller och avvikelser</li>
        <li>Säkerställa att bygget följer godkända ritningar</li>
        <li>Kommunicera med byggnadsnämnden</li>
        <li>Utfärda slutbevis när projektet är klart</li>
      </ul>

      <h2>När behöver du en Kontrollansvarig?</h2>
      <p>Du behöver en kontrollansvarig för:</p>
      <ul>
        <li>Nybyggnation av bostäder och kommersiella byggnader</li>
        <li>Större tillbyggnader och ombyggnationer</li>
        <li>Projekt som kräver bygglov</li>
        <li>Byggnader som påverkar säkerhet eller hälsa</li>
      </ul>

      <h2>Fördelar med att anlita en erfaren Kontrollansvarig</h2>
      <p>Genom att anlita en erfaren kontrollansvarig som Ytterman får du:</p>
      <ul>
        <li>Trygghet att projektet följer alla regelverk</li>
        <li>Undvikande av kostsamma ombyggnationer</li>
        <li>Snabbare handläggning hos kommunen</li>
        <li>Professionell dokumentation</li>
        <li>Över 20 års erfarenhet av byggprojekt</li>
      </ul>

      <h2>Kontakta oss för ditt projekt</h2>
      <p>Behöver du en kontrollansvarig för ditt byggprojekt i Västernorrland? Vi erbjuder kostnadsfria konsultationer och fasta priser. Kontakta oss idag för att diskutera ditt projekt.</p>
    `
  },
  "bas-p-vs-bas-u-skillnader": {
    title: "BAS-P vs BAS-U - Skillnader och när du behöver dem",
    date: "2024-01-12",
    readTime: "4 min",
    category: "Arbetsmiljö",
    content: `
      <p>Byggarbetsmiljösamordnare (BAS) är en viktig roll för att säkerställa arbetsmiljön på byggarbetsplatser. Det finns två typer av BAS-funktioner: BAS-P och BAS-U. Här förklarar vi skillnaderna och när varje funktion behövs.</p>

      <h2>BAS-P (Byggarbetsmiljösamordnare under projektering)</h2>
      <p>BAS-P arbetar under planeringsfasen och ansvarar för:</p>
      <ul>
        <li>Samordna arbetsmiljöarbetet under projekteringen</li>
        <li>Upprätta arbetsmiljöplan</li>
        <li>Identifiera risker i projekteringsskedet</li>
        <li>Säkerställa att säkerhetsaspekter beaktas i ritningar</li>
        <li>Dokumentera arbetsmiljöåtgärder</li>
      </ul>

      <h2>BAS-U (Byggarbetsmiljösamordnare under utförande)</h2>
      <p>BAS-U arbetar under byggfasen och ansvarar för:</p>
      <ul>
        <li>Samordna arbetsmiljöarbetet på byggarbetsplatsen</li>
        <li>Övervaka att arbetsmiljöplanen följs</li>
        <li>Genomföra säkerhetsronder</li>
        <li>Hantera arbetsmiljöavvikelser</li>
        <li>Säkerställa att alla entreprenörer följer säkerhetsföreskrifter</li>
      </ul>

      <h2>När behöver du BAS-P och BAS-U?</h2>
      <p>Enligt Arbetsmiljöverkets föreskrifter krävs BAS när:</p>
      <ul>
        <li>Flera entreprenörer arbetar samtidigt på arbetsplatsen</li>
        <li>Projektet innebär särskilda risker</li>
        <li>Byggarbetet pågår längre än 30 arbetsdagar med mer än 20 personer</li>
        <li>Byggarbetet omfattar mer än 500 persondagar</li>
      </ul>

      <h2>Kombinerade BAS-tjänster</h2>
      <p>Många projekt drar nytta av att ha samma person som både BAS-P och BAS-U. Detta ger:</p>
      <ul>
        <li>Kontinuitet i arbetsmiljöarbetet</li>
        <li>Bättre förståelse för projektets risker</li>
        <li>Kostnadseffektiv lösning</li>
        <li>Enhetlig dokumentation</li>
      </ul>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artikeln hittades inte</h1>
          <Link to="/blogg" className="text-accent hover:underline">
            Tillbaka till bloggen
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} - Ytterman Blogg`}
        description={`${post.title} - Expertråd och tips om byggkontroll, kontrollansvarig och BAS från Ytterman i Västernorrland.`}
        keywords={`${post.category.toLowerCase()}, kontrollansvarig, BAS, byggkontroll, Västernorrland`}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <article className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <Link 
                to="/blogg"
                className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till bloggen
              </Link>

              <header className="mb-12">
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                  {post.title}
                </h1>
              </header>

              <div 
                className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-slate-50 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Behöver du hjälp med ditt projekt?
                </h3>
                <p className="text-slate-600 mb-6">
                  Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med kontrollansvarig, 
                  BAS och alla aspekter av byggprocessen i Västernorrland.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    tobias@ytterman.com
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPost;