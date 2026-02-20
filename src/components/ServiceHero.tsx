import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Award, Shield, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
    phone?: boolean;
  };
  stats?: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
  }[];
  bannerContent?: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    certifications: string[];
  };
}

export const ServiceHero = ({ 
  badge, 
  title, 
  subtitle, 
  description, 
  features, 
  ctaPrimary,
  ctaSecondary,
  stats,
  bannerContent
}: ServiceHeroProps) => {
  const defaultStats = [
    { icon: Award, title: "20+ År", subtitle: "Erfarenhet inom bygg" },
    { icon: Shield, title: "Certifierad", subtitle: "KA, BAS-P & BAS-U" },
    { icon: Clock, title: "Snabb", subtitle: "Svar inom 24h" },
    { icon: MessageCircle, title: "Digital", subtitle: "Smidig hantering" }
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent hover:bg-accent/30">
              {badge}
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl text-muted-foreground mb-4 font-medium">
                {subtitle}
              </p>
            )}
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaPrimary && (
                <Button 
                  size="lg"
                  className="earth-gradient text-white hover:opacity-90 text-lg px-8 py-6"
                  asChild
                >
                  <Link to={ctaPrimary.href}>{ctaPrimary.text}</Link>
                </Button>
              )}
              {ctaSecondary && (
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-white text-lg px-8 py-6"
                  asChild
                >
                  {ctaSecondary.phone ? (
                    <a href={ctaSecondary.href}>
                      <Phone className="w-5 h-5 mr-2" />
                      {ctaSecondary.text}
                    </a>
                  ) : (
                    <Link to={ctaSecondary.href}>{ctaSecondary.text}</Link>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="animate-slide-up">
            <div className="space-y-8">
              {/* Banner */}
              {bannerContent && (
                <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 overflow-hidden shadow-lg">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 earth-gradient rounded-xl flex items-center justify-center">
                          <bannerContent.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{bannerContent.title}</h3>
                          <p className="text-sm text-muted-foreground">{bannerContent.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-accent mb-1">
                          <Award className="w-4 h-4" />
                          <span className="text-sm font-semibold">20+ År</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Erfarenhet</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {bannerContent.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm text-foreground">{cert}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Kontakta mig direkt</p>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-accent" />
                            <span className="font-semibold text-foreground">076-111 84 47</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground mb-1">Svarstid</p>
                          <p className="font-semibold text-sm text-foreground">Inom 24h</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {displayStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <stat.icon className="w-6 h-6 text-accent mb-2" />
                    <h3 className="font-bold text-lg mb-1">{stat.title}</h3>
                    <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
