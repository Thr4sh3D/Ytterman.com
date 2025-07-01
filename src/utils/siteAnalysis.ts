import { invokeLLM } from "@/integrations/core";

export interface SiteAnalysisResult {
  layout: {
    structure: string[];
    navigation: string[];
    sections: string[];
  };
  colors: {
    primary: string[];
    secondary: string[];
    accent: string[];
    background: string[];
  };
  typography: {
    headings: string[];
    bodyText: string[];
    fonts: string[];
  };
  content: {
    mainHeading: string;
    subHeadings: string[];
    keyMessages: string[];
    services: string[];
    contactInfo: string[];
  };
  images: {
    heroImage: string;
    serviceImages: string[];
    profileImages: string[];
    logos: string[];
  };
  userExperience: {
    callToActions: string[];
    navigation: string[];
    mobileOptimization: string[];
  };
}

export const analyzeSite = async (url: string): Promise<SiteAnalysisResult> => {
  try {
    const analysis = await invokeLLM({
      prompt: `Analysera webbplatsen ${url} och ge en detaljerad rapport om:

1. LAYOUT & STRUKTUR:
   - Övergripande sidlayout och struktur
   - Navigationsmenyer och deras placering
   - Huvudsektioner på startsidan
   - Responsiv design och mobilanpassning

2. FÄRGSCHEMA:
   - Primära färger som används
   - Sekundära och accentfärger
   - Bakgrundsfärger
   - Färgkombinationer och kontraster

3. TYPOGRAFI:
   - Typsnitt som används för rubriker
   - Typsnitt för brödtext
   - Textstorlekar och hierarki
   - Textstilar (fet, kursiv, etc.)

4. INNEHÅLL:
   - Huvudrubrik och tagline
   - Underrubriker och sektionsrubriker
   - Nyckelmeddelanden och värdepropositioner
   - Tjänster som presenteras
   - Kontaktinformation

5. BILDER & VISUELLA ELEMENT:
   - Hero-bilder eller banners
   - Tjänstebilder
   - Profilbilder
   - Logotyper och ikoner
   - Grafiska element

6. ANVÄNDARUPPLEVELSE:
   - Call-to-action knappar och deras placering
   - Navigationsflöde
   - Mobiloptimering
   - Interaktiva element

Ge en strukturerad analys som kan användas för att jämföra med en befintlig implementation.`,
      add_context_from_internet: true,
      response_json_schema: {
        type: "object",
        properties: {
          layout: {
            type: "object",
            properties: {
              structure: { type: "array", items: { type: "string" } },
              navigation: { type: "array", items: { type: "string" } },
              sections: { type: "array", items: { type: "string" } }
            }
          },
          colors: {
            type: "object",
            properties: {
              primary: { type: "array", items: { type: "string" } },
              secondary: { type: "array", items: { type: "string" } },
              accent: { type: "array", items: { type: "string" } },
              background: { type: "array", items: { type: "string" } }
            }
          },
          typography: {
            type: "object",
            properties: {
              headings: { type: "array", items: { type: "string" } },
              bodyText: { type: "array", items: { type: "string" } },
              fonts: { type: "array", items: { type: "string" } }
            }
          },
          content: {
            type: "object",
            properties: {
              mainHeading: { type: "string" },
              subHeadings: { type: "array", items: { type: "string" } },
              keyMessages: { type: "array", items: { type: "string" } },
              services: { type: "array", items: { type: "string" } },
              contactInfo: { type: "array", items: { type: "string" } }
            }
          },
          images: {
            type: "object",
            properties: {
              heroImage: { type: "string" },
              serviceImages: { type: "array", items: { type: "string" } },
              profileImages: { type: "array", items: { type: "string" } },
              logos: { type: "array", items: { type: "string" } }
            }
          },
          userExperience: {
            type: "object",
            properties: {
              callToActions: { type: "array", items: { type: "string" } },
              navigation: { type: "array", items: { type: "string" } },
              mobileOptimization: { type: "array", items: { type: "string" } }
            }
          }
        }
      }
    });

    return analysis as SiteAnalysisResult;
  } catch (error) {
    console.error('Error analyzing site:', error);
    throw new Error('Failed to analyze site');
  }
};

export const compareWithCurrentSite = (originalSite: SiteAnalysisResult, currentImplementation: any) => {
  return {
    layoutDifferences: {
      missing: [],
      different: [],
      additional: []
    },
    colorDifferences: {
      missing: [],
      different: [],
      additional: []
    },
    contentDifferences: {
      missing: [],
      different: [],
      additional: []
    },
    recommendations: []
  };
};