import { OptimizedImage } from '@/components/OptimizedImage';
import { Certifications } from '@/components/Certifications';
import profileImage512 from '@/assets/images/tobias-ytterman-profile-512.webp';
import profileImage900 from '@/assets/images/tobias-ytterman-profile-900.webp';
import { cacheBusterToken } from '@/lib/buildInfo';
import { CheckCircle, Award, Users, Clock, Shield, Zap, HeartHandshake, MapPin } from 'lucide-react';
import { BAS, BUSINESS_COPY, COMPANY, KA_CERT } from '@/config/company';

export const About = () => {
  const profileImage512Src = `${profileImage512}?v=${cacheBusterToken}`;
  const profileImage900Src = `${profileImage900}?v=${cacheBusterToken}`;

  const achievements = [
    {
      icon: Award,
      title: COMPANY.experienceLabel,
      description: "Gedigen erfarenhet inom byggbranschen och kontroll"
    },
    {
      icon: CheckCircle,
      title: "Certifierad kontrollansvarig",
      description: `${KA_CERT.authorizationLabel}, certifikat ${KA_CERT.certificateNumber}`
    },
    {
      icon: Users,
      title: `Medlem i ${COMPANY.membership.shortName}`,
      description: COMPANY.membership.name
    },
    {
      icon: Clock,
      title: "Tydlig KA-roll",
      description: BUSINESS_COPY.kaScope
    }
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: "Tydligt avgränsat uppdrag",
      description: "Offerten beskriver roller, moment, kontaktvägar, resor och vilka underlag som behövs."
    },
    {
      icon: Clock,
      title: "Tydlig kommunikation",
      description: BUSINESS_COPY.defaultResponse
    },
    {
      icon: MapPin,
      title: `Verksam i ${COMPANY.region}`,
      description: "Projektets krav och kommunens besked gås igenom utifrån det aktuella ärendet."
    },
    {
      icon: Zap,
      title: "Digital och strukturerad",
      description: "Dokumentation och avstämningar kan hanteras digitalt när det passar projektets upplägg."
    },
    {
      icon: HeartHandshake,
      title: "Personligt engagemang",
      description: "Du har en tydlig kontaktperson och får projektspecifik återkoppling inom det avtalade uppdraget."
    },
    {
      icon: Award,
      title: "Aktuellt regelverk",
      description: "Uppdraget utgår från gällande regler och de beslut som gäller för det aktuella projektet."
    }
  ];

  return (
    <section id="om-oss" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Om Ytterman
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Med {COMPANY.experienceLabel.toLowerCase()} inom byggbranschen erbjuder jag
              tjänster som kontrollansvarig och byggarbetsmiljösamordnare i Västernorrland.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Tobias Ytterman
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Jag är {KA_CERT.title.toLowerCase()} och utbildad för uppdrag som {BAS.rolesLabel}.
                Varje uppdrag avgränsas efter projektets art, roller och underlag.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Prisform, omfattning, kontaktvägar och tidplan framgår av offerten för det aktuella projektet.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <OptimizedImage
                src={profileImage900Src}
                srcSet={`${profileImage512Src} 512w, ${profileImage900Src} 900w`}
                alt={`${COMPANY.publicName} – certifierad kontrollansvarig och utbildad för BAS-P/BAS-U`}
                className="rounded-xl shadow-lg w-full h-auto"
                width={900}
                height={1352}
                sizes="(min-width: 1024px) 34rem, 100vw"
              />
            </div>
          </div>

          {/* Why Choose Ytterman Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Varför välja Ytterman?
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Här är de arbetssätt och dokumenterade uppgifter som Ytterman bygger erbjudandet på.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent"
                  >
                    <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div id="certifikat" className="bg-slate-50 rounded-2xl p-8" style={{ scrollMarginTop: '96px' }}>
            <Certifications showTitle={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
