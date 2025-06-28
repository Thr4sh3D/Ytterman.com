import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Calendar, Clock, ArrowLeft, Phone, Mail, CheckCircle, AlertTriangle, FileText, Users } from 'lucide-react';

const blogContent: Record<string, any> = {
  "vad-ar-kontrollansvarig": {
    title: "Vad är en Kontrollansvarig och varför behöver du en?",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Byggkontroll",
    content: `
      <div class="prose-content">
        <p class="lead">En Kontrollansvarig (KA) är en certifierad person som har till uppgift att säkerställa att byggprojekt genomförs enligt gällande byggbestämmelser och säkerhetsföreskrifter. Enligt Plan- och bygglagen (PBL) är det obligatoriskt att utse en kontrollansvarig för de flesta byggprojekt.</p>

        <div class="info-box">
          <div class="info-box-header">
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3>Viktigt att veta</h3>
          </div>
          <p>Kontrollansvarig krävs för alla byggprojekt som kräver bygglov och de flesta som kräver anmälan enligt PBL.</p>
        </div>

        <h2>Vad gör en Kontrollansvarig?</h2>
        <p>Kontrollansvarigs huvuduppgifter inkluderar:</p>
        
        <div class="checklist">
          <div class="checklist-item">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Upprätta kontrollplan för projektet</span>
          </div>
          <div class="checklist-item">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Genomföra kontroller under byggprocessen</span>
          </div>
          <div class="checklist-item">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Dokumentera alla kontroller och avvikelser</span>
          </div>
          <div class="checklist-item">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Säkerställa att bygget följer godkända ritningar</span>
          </div>
          <div class="checklist-item">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Kommunicera med byggnadsnämnden</span>
          </div>
          <div class="checklist-item">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Utfärda slutbevis när projektet är klart</span>
          </div>
        </div>

        <h2>När behöver du en Kontrollansvarig?</h2>
        <p>Du behöver en kontrollansvarig för:</p>
        
        <div class="highlight-box warning">
          <div class="highlight-box-header">
            <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <h3>Obligatoriskt för:</h3>
          </div>
          <ul>
            <li>Nybyggnation av bostäder och kommersiella byggnader</li>
            <li>Större tillbyggnader och ombyggnationer</li>
            <li>Projekt som kräver bygglov</li>
            <li>Byggnader som påverkar säkerhet eller hälsa</li>
          </ul>
        </div>

        <h2>Fördelar med att anlita en erfaren Kontrollansvarig</h2>
        <p>Genom att anlita en erfaren kontrollansvarig som Ytterman får du:</p>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4>Trygghet</h4>
            <p>Säkerhet att projektet följer alla regelverk</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h4>Kostnadsbesparingar</h4>
            <p>Undvikande av kostsamma ombyggnationer</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4>Snabbare process</h4>
            <p>Snabbare handläggning hos kommunen</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h4>Professionell dokumentation</h4>
            <p>Komplett och korrekt dokumentation</p>
          </div>
        </div>

        <div class="experience-highlight">
          <h3>Över 20 års erfarenhet</h3>
          <p>Med över två decennier i byggbranschen har vi hanterat hundratals projekt av alla storlekar i Västernorrland.</p>
        </div>

        <h2>Kontakta oss för ditt projekt</h2>
        <p>Behöver du en kontrollansvarig för ditt byggprojekt i Västernorrland? Vi erbjuder kostnadsfria konsultationer och fasta priser. Kontakta oss idag för att diskutera ditt projekt.</p>
      </div>
    `
  },
  "bas-p-vs-bas-u-skillnader": {
    title: "BAS-P vs BAS-U - Skillnader och när du behöver dem",
    date: "2024-01-12",
    readTime: "4 min",
    category: "Arbetsmiljö",
    content: `
      <div class="prose-content">
        <p class="lead">Byggarbetsmiljösamordnare (BAS) är en viktig roll för att säkerställa arbetsmiljön på byggarbetsplatser. Det finns två typer av BAS-funktioner: BAS-P och BAS-U. Här förklarar vi skillnaderna och när varje funktion behövs.</p>

        <div class="comparison-grid">
          <div class="comparison-card bas-p">
            <div class="comparison-header">
              <h3>BAS-P (Projektering)</h3>
              <span class="phase-badge">Planeringsfas</span>
            </div>
            <p>BAS-P arbetar under planeringsfasen och ansvarar för:</p>
            <div class="checklist">
              <div class="checklist-item">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Samordna arbetsmiljöarbetet under projekteringen</span>
              </div>
              <div class="checklist-item">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Upprätta arbetsmiljöplan</span>
              </div>
              <div class="checklist-item">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Identifiera risker i projekteringsskedet</span>
              </div>
              <div class="checklist-item">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Säkerställa att säkerhetsaspekter beaktas i ritningar</span>
              </div>
              <div class="checklist-item">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Dokumentera arbetsmiljöåtgärder</span>
              </div>
            </div>
          </div>

          <div class="comparison-card bas-u">
            <div class="comparison-header">
              <h3>BAS-U (Utförande)</h3>
              <span class="phase-badge">Byggfas</span>
            </div>
            <p>BAS-U arbetar under byggfasen och ansvarar för:</p>
            <div class="checklist">
              <div class="checklist-item">
                <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Samordna arbetsmiljöarbetet på byggarbetsplatsen</span>
              </div>
              <div class="checklist-item">
                <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Övervaka att arbetsmiljöplanen följs</span>
              </div>
              <div class="checklist-item">
                <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Genomföra säkerhetsronder</span>
              </div>
              <div class="checklist-item">
                <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Hantera arbetsmiljöavvikelser</span>
              </div>
              <div class="checklist-item">
                <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Säkerställa att alla entreprenörer följer säkerhetsföreskrifter</span>
              </div>
            </div>
          </div>
        </div>

        <h2>När behöver du BAS-P och BAS-U?</h2>
        <div class="highlight-box warning">
          <div class="highlight-box-header">
            <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <h3>Enligt Arbetsmiljöverkets föreskrifter krävs BAS när:</h3>
          </div>
          <ul>
            <li>Flera entreprenörer arbetar samtidigt på arbetsplatsen</li>
            <li>Projektet innebär särskilda risker</li>
            <li>Byggarbetet pågår längre än 30 arbetsdagar med mer än 20 personer</li>
            <li>Byggarbetet omfattar mer än 500 persondagar</li>
          </ul>
        </div>

        <h2>Kombinerade BAS-tjänster</h2>
        <div class="info-box">
          <div class="info-box-header">
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3>Fördelar med samma BAS-P och BAS-U</h3>
          </div>
          <p>Många projekt drar nytta av att ha samma person som både BAS-P och BAS-U. Detta ger:</p>
          <div class="benefits-grid">
            <div class="benefit-card">
              <h4>Kontinuitet</h4>
              <p>Kontinuitet i arbetsmiljöarbetet från planering till färdigställande</p>
            </div>
            <div class="benefit-card">
              <h4>Bättre förståelse</h4>
              <p>Djupare förståelse för projektets specifika risker och utmaningar</p>
            </div>
            <div class="benefit-card">
              <h4>Kostnadseffektivt</h4>
              <p>Mer kostnadseffektiv lösning än att anlita separata konsulter</p>
            </div>
            <div class="benefit-card">
              <h4>Enhetlig dokumentation</h4>
              <p>Sammanhängande dokumentation genom hela projektet</p>
            </div>
          </div>
        </div>
      </div>
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
      
      <style jsx>{`
        .prose-content {
          line-height: 1.7;
        }
        
        .lead {
          font-size: 1.25rem;
          font-weight: 400;
          color: #475569;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .info-box, .highlight-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        
        .highlight-box.warning {
          background: #fefce8;
          border-color: #fbbf24;
        }
        
        .info-box-header, .highlight-box-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .info-box-header h3, .highlight-box-header h3 {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e293b;
        }
        
        .checklist {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }
        
        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        
        .checklist-item svg {
          margin-top: 0.125rem;
          flex-shrink: 0;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .benefit-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
        }
        
        .benefit-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .benefit-card h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        
        .benefit-card p {
          color: #64748b;
          margin: 0;
        }
        
        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .comparison-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
        }
        
        .comparison-card.bas-p {
          border-left: 4px solid #10b981;
        }
        
        .comparison-card.bas-u {
          border-left: 4px solid #f59e0b;
        }
        
        .comparison-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .comparison-header h3 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
        }
        
        .phase-badge {
          background: #e2e8f0;
          color: #475569;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .experience-highlight {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          margin: 2rem 0;
        }
        
        .experience-highlight h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .experience-highlight p {
          margin: 0;
          font-size: 1.125rem;
          opacity: 0.9;
        }
        
        @media (max-width: 768px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .comparison-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
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