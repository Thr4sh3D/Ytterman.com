export interface OfficialSource {
  title: string;
  publisher: string;
  url: string;
}

export const OFFICIAL_SOURCES = {
  boverketControlManager: {
    title: 'Kontrollansvariga – PBL kunskapsbanken',
    publisher: 'Boverket',
    url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga/',
  },
  boverketCertificationRules: {
    title: 'BFS 2011:14 – certifiering av kontrollansvariga',
    publisher: 'Boverket',
    url: 'https://rinfo.boverket.se/BFS2011-14/pdf/BFS2011-14.pdf',
  },
  boverketFinalDecision: {
    title: 'Slutbesked – PBL kunskapsbanken',
    publisher: 'Boverket',
    url: 'https://www.boverket.se/sv/pbl-kunskapsbanken/lov--byggande/byggprocessen/slutbesked',
  },
  workEnvironmentBas: {
    title: 'AFS 2023:3 – planering och byggarbetsmiljösamordning',
    publisher: 'Arbetsmiljöverket',
    url: 'https://www.av.se/globalassets/filer/publikationer/foreskrifter/konsoliderade-foreskrifter/projektering-och-byggarbetsmiljosamordning-grundlaggande-skyldigheter-afs2023-3-konsoliderad.pdf',
  },
} as const satisfies Record<string, OfficialSource>;

export const GUIDE_UPDATED_AT = '2026-08-19';
