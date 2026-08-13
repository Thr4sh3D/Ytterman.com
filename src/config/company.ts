/**
 * Central source of truth for verified company data.
 * Update this file when facts change – all components should import from here.
 *
 * Verified sources:
 *  - KA-certifikat: https://idun.kiwa.se/certificates/25642
 *  - Kontrollansvarig (PBL): https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga/
 *  - Slutbesked: https://www.boverket.se/sv/pbl-kunskapsbanken/lov--byggande/byggprocessen/slutbesked
 *  - BAS-P/U (AFS 2023:3): https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20233/
 *  - Energiexpert: https://www.boverket.se/sv/energideklaration/hitta-energiexpert
 */

export const COMPANY = {
  name: 'Ytterman',
  owner: 'Tobias Ytterman',
  phone: '070-xxx xx xx', // Uppdatera med korrekt nummer
  email: 'tobias@ytterman.com',
  location: 'Viksjö, Västernorrland',
  serviceArea: 'Västernorrland',
} as const;

/** Kontrollansvarig-certifikat (KA) – verifierat via Kiwa */
export const KA_CERT = {
  certifyingBody: 'Kiwa Certification AB',
  certificateNumber: 'KA11926',
  /** Behörighet N = projekt av normal art */
  competenceLevel: 'N',
  competenceLevelDescription: 'Normal art',
  /** ISO 8601 */
  validUntil: '2030-07-02',
  validUntilDisplay: '2 juli 2030',
  verifyUrl: 'https://idun.kiwa.se/certificates/25642',
  imageUrl:
    'https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751536744592-KA_copyright.png',
} as const;

/**
 * BAS-P & BAS-U kursintyg – Tobias erbjuder uppdrag som BAS-P och BAS-U,
 * men titeln "certifierad BAS-P/U" ska INTE användas eftersom BAS-rollen
 * inte kräver formell certifiering utan kompetensbevis/kursintyg.
 *
 * Aktuellt regelverk: AFS 2023:3 (gäller från 1 jan 2025, ersätter AFS 1999:3).
 */
export const BAS_TRAINING = {
  provider: 'UtbildningsKraft',
  courseType: 'Kursintyg BAS-P & BAS-U',
  completedDate: '2025-06-25',
  completedDateDisplay: '25 juni 2025',
  validUntil: '2030-06-24',
  validUntilDisplay: '24 juni 2030',
  /** Kursen täcker gällande AFS från 1 jan 2025 */
  regulationCovered: 'AFS 2023:3',
  imageUrl:
    'https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751537157850-BASUP_copyright.png',
} as const;

/**
 * Gällande arbetsmiljöföreskrift för BAS-P och BAS-U.
 * AFS 2023:3 trädde i kraft 1 januari 2025 och ersätter AFS 1999:3.
 */
export const BAS_REGULATION = 'AFS 2023:3' as const;

/**
 * Energideklaration:
 * Energideklaration ska utföras av certifierad energiexpert (Boverket).
 * Tobias är INTE certifierad energiexpert – hänvisa till Boverkets register.
 */
export const ENERGY_DECLARATION_NOTE =
  'Energideklaration utförs av certifierad energiexpert. ' +
  'Hitta certifierad energiexpert på Boverkets webbplats: ' +
  'https://www.boverket.se/sv/energideklaration/hitta-energiexpert' as const;
