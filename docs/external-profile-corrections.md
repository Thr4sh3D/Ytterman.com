# Ytterman – ägarchecklista för webb och externa profiler

**Status:** uppgifter i den här listan ska kontrolleras av ägaren innan de läggs in på webbplatsen, Google Business Profile, katalogtjänster eller avtalsunderlag.

## 1. Företagsidentitet och NAP

- [ ] Verifiera juridiskt företagsnamn exakt som det är registrerat.
- [ ] Verifiera organisationsnummer.
- [ ] Verifiera postadress och eventuell separat besöks-/verksamhetsadress.
- [ ] Bestäm ett enda publikt format för namn, telefon och adress (NAP) och använd samma format överallt.
- [ ] Bekräfta om en fysisk adress ska visas offentligt eller om profilen ska vara ett serviceområde utan synlig adress.

Publicera inte adress, organisationsnummer eller juridiskt namn i schema, sidfot eller externa profiler förrän punkterna ovan är klara.

## 2. Tjänster och behörigheter

- [ ] Kontrollera Kiwa-certifikatet `KA11926`, behörighet N, mot Kiwas register vid varje större webbuppdatering.
- [ ] Beskriv BAS-P/BAS-U som roller som bygger på utbildning, kompetens och erfarenhet – inte som en myndighetscertifiering.
- [ ] Bekräfta vilka uppdrag inom överlåtelsebesiktning och bygglovshandlingar som ska marknadsföras aktivt.
- [ ] Dokumentera hur behörigheten hos varje energipartner kontrolleras före uppdrag.
- [ ] Namnge energipartner på webbplatsen först efter avtal och godkännande från partnern.

Godkänd energiformulering: “Ytterman erbjuder och samordnar energideklaration. Själva deklarationen utförs via behörig partner av en certifierad energiexpert.”

## 3. Priser, resor och leverans

- [ ] Bekräfta att 2026 års KA-paket och momsstatus fortfarande gäller före varje prisuppdatering.
- [ ] Fastställ en dokumenterad resepolicy: serviceområde, milersättning, restid, eventuella zoner och undantag.
- [ ] Fastställ realistiska svarstider, starttider och leveranstider som kan hållas även vid hög belastning.
- [ ] Ange projektspecifika resor, platsbesök, tillägg och leveranstid i varje offert.
- [ ] Bestäm när priser ska märkas “från”, “fast pris” respektive “pris efter underlag”.

## 4. Digitala produkter

- [ ] Verifiera fungerande betalning i produktion.
- [ ] Verifiera automatisk leverans och kvitto från början till slut.
- [ ] Publicera köpvillkor, integritetstext, ångerrätt/undantag och återbetalningsprocess.
- [ ] Testa misslyckad betalning, dubbelbetalning och utebliven leverans.
- [ ] Ändra från “intresseanmälan” till köp först när hela flödet ovan är verifierat.

## 5. Bevis och externa profiler

- [ ] Samla godkända kundcase med projekt, ort, omfattning och uttryckligt publiceringsmedgivande.
- [ ] Publicera endast verifierade recensioner; spara källa och datum.
- [ ] Gå igenom Google Business Profile, Bygglov.se, SBR-profil, sociala profiler och relevanta kataloger.
- [ ] Bekräfta relationen till TY Safety och önskad korslänkning innan verksamheten beskrivs som systerföretag.
- [ ] Synka NAP, tjänstelista, KA-behörighet, BAS-formulering, energipartner-modell, priser och serviceområde.
- [ ] Ta bort gamla löften om svar inom 24/48 timmar, minuter, kort restid eller kostnadsfria resor.
- [ ] Kontrollera att ingen profil beskriver Tobias som certifierad energiexpert.

## 6. Ändringsrutin

1. Uppdatera verifierade grunddata i `src/config/company.ts`.
2. Kör `npm run test:content`, `npm run build` och `npm run lint`.
3. Granska synlig text, metadata och strukturerad data i deploy-preview.
4. Synka samma godkända uppgifter till externa profiler.
5. Anteckna datum, källa och ansvarig för verifieringen i ändringsärendet.
