/**
 * Centrala, verifierade företagsuppgifter för Ytterman.com.
 * Redigera ENDAST efter att uppgiften har verifierats mot officiell källa.
 * Lägg aldrig hemliga nycklar, lösenord eller tokens här.
 */

export const COMPANY = {
  name: 'Ytterman',
  owner: 'Tobias Ytterman',
  email: 'tobias@ytterman.com',
  phone: '+46761118447',
  phoneDisplay: '076-111 84 47',
  city: 'Viksjö',
  region: 'Västernorrland',
  country: 'SE',
  url: 'https://ytterman.com',
} as const;

/**
 * Verifierat certifikat – Kontrollansvarig enligt PBL.
 * Källa: Kiwa Certification AB
 */
export const KA_CERT = {
  organ: 'Kiwa Certification AB',
  number: 'KA11926',
  validUntil: '2030-07-02',
  /** Behörighet N = projekt av normal art */
  behorighet: 'N',
  /** Officiell referens: https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga/ */
  boverketUrl:
    'https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga/',
} as const;

/**
 * BAS-P och BAS-U – Tobias utför uppdrag som BAS-P och BAS-U.
 * OBS: Webbplatsen får INTE kalla Tobias "certifierad BAS-P/U" utan verifierat certifikat.
 * Aktuellt regelverk: AFS 2023:3 (ersatte AFS 1999:3 den 1 jan 2025).
 * Källa: https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20233/
 */
export const BAS = {
  afs: 'AFS 2023:3',
  afsUrl:
    'https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20233/',
  /** Tobias erbjuder uppdrag, men är inte certifierad i formell mening */
  certifiedClaim: false,
} as const;

/**
 * Slutbesked – det är BYGGNADSNÄMNDEN som lämnar slutbesked.
 * KA lämnar bl.a. ett skriftligt utlåtande och underlag inför slutbesked.
 * KA utfärdar INTE "slutbevis" – det är ett inaktuellt begrepp.
 * Källa: https://www.boverket.se/sv/pbl-kunskapsbanken/lov--byggande/byggprocessen/slutbesked
 */
export const SLUTBESKED = {
  boverketUrl:
    'https://www.boverket.se/sv/pbl-kunskapsbanken/lov--byggande/byggprocessen/slutbesked',
} as const;

/**
 * Energideklaration – måste utföras av certifierad energiexpert.
 * Tobias är INTE verifierad certifierad energiexpert.
 * Källa: https://www.boverket.se/sv/energideklaration/hitta-energiexpert
 */
export const ENERGI = {
  /** Sätt till true först om och när ett verifierat certifikat finns */
  certifiedExpert: false,
  boverketUrl:
    'https://www.boverket.se/sv/energideklaration/hitta-energiexpert',
} as const;
