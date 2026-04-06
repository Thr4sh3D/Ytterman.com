/**
 * Byggstart-planerare – ett interaktivt planeringsverktyg för privatpersoner
 * och mindre byggprojekt på ytterman.com.
 *
 * Funktioner:
 *  - 7 sektioner: projektinfo, lov/handlingar, entreprenörer, budget,
 *    tidsplan, kontrollpunkter och sammanfattning
 *  - Autosparning via localStorage
 *  - Export/import av data som JSON
 *  - Diskreta CTA-kopplingar till Tobias Yttermans konsulttjänster
 *  - Juridisk disclaimer
 *
 * Struktur:
 *  Denna fil är medvetet fristående (inga globala komponenter ändras)
 *  för att göra den enkel att återanvända till liknande framtida verktyg.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  ClipboardList,
  FileText,
  Users,
  DollarSign,
  CalendarDays,
  CheckSquare,
  BarChart3,
  Download,
  Upload,
  Trash2,
  Info,
  Phone,
  ChevronRight,
  ChevronLeft,
  Plus,
  X,
  Save,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─────────────────────────────────────────────────────────────────────────────
// Typdefinitioner
// ─────────────────────────────────────────────────────────────────────────────

interface Entreprenor {
  id: string;
  roll: string;
  foretag: string;
  kontaktperson: string;
  telefon: string;
  epost: string;
  ansvarsomrade: string;
  kontrakt: boolean;
  anteckningar: string;
}

interface BudgetPost {
  id: string;
  kategori: string;
  beskrivning: string;
  budgeterat: string;
  utfall: string;
}

interface Milstolpe {
  id: string;
  beskrivning: string;
  datum: string;
  klar: boolean;
}

interface PlaneringsData {
  // Sektion 1: Projektinfo
  projektnamn: string;
  adress: string;
  fastighetsbeteckning: string;
  byggherre: string;
  telefon: string;
  epost: string;
  projektbeskrivning: string;
  projekttyp: string;
  storlek: string;
  startdatum: string;
  slutdatum: string;

  // Sektion 2: Lov / anmälan / handlingar
  lovTyp: string;
  lovNummer: string;
  lovDatum: string;
  startbesked: boolean;
  startbeskedDatum: string;
  harKontrollansvarig: boolean;
  kontrollansvarigNamn: string;
  kontrollansvarigKontakt: string;
  kontrollplan: boolean;
  // Handlingar
  handlingSituationsplan: boolean;
  handlingPlanritning: boolean;
  handlingFasadritning: boolean;
  handlingSektionsritning: boolean;
  handlingKonstruktionsritning: boolean;
  handlingEnergyCalc: boolean;
  handlingBrandskydd: boolean;
  handlingTillganglighet: boolean;
  lovAnteckningar: string;

  // Sektion 3: Entreprenörer
  entreprenorer: Entreprenor[];

  // Sektion 4: Budget
  totalbudget: string;
  budgetPoster: BudgetPost[];
  budgetAnteckningar: string;

  // Sektion 5: Tidsplan
  milstolpar: Milstolpe[];
  tidsplanAnteckningar: string;

  // Sektion 6: Kontrollpunkter
  kpStartbesked: boolean;
  kpKontrollansvarig: boolean;
  kpGrannar: boolean;
  kpEl: boolean;
  kpVaV: boolean;
  kpAvfall: boolean;
  kpArbetsplatsplan: boolean;
  kpSakerhet: boolean;
  kpForsakring: boolean;
  kpSkyddsombud: boolean;
  kpBasPU: boolean;
  kpBilder: boolean;
  kontrollAnteckningar: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Standardvärden
// ─────────────────────────────────────────────────────────────────────────────

const defaultEntreprenor = (): Entreprenor => ({
  id: crypto.randomUUID(),
  roll: '',
  foretag: '',
  kontaktperson: '',
  telefon: '',
  epost: '',
  ansvarsomrade: '',
  kontrakt: false,
  anteckningar: '',
});

const defaultBudgetPost = (): BudgetPost => ({
  id: crypto.randomUUID(),
  kategori: '',
  beskrivning: '',
  budgeterat: '',
  utfall: '',
});

const defaultMilstolpe = (): Milstolpe => ({
  id: crypto.randomUUID(),
  beskrivning: '',
  datum: '',
  klar: false,
});

const defaultData: PlaneringsData = {
  projektnamn: '',
  adress: '',
  fastighetsbeteckning: '',
  byggherre: '',
  telefon: '',
  epost: '',
  projektbeskrivning: '',
  projekttyp: '',
  storlek: '',
  startdatum: '',
  slutdatum: '',

  lovTyp: '',
  lovNummer: '',
  lovDatum: '',
  startbesked: false,
  startbeskedDatum: '',
  harKontrollansvarig: false,
  kontrollansvarigNamn: '',
  kontrollansvarigKontakt: '',
  kontrollplan: false,
  handlingSituationsplan: false,
  handlingPlanritning: false,
  handlingFasadritning: false,
  handlingSektionsritning: false,
  handlingKonstruktionsritning: false,
  handlingEnergyCalc: false,
  handlingBrandskydd: false,
  handlingTillganglighet: false,
  lovAnteckningar: '',

  entreprenorer: [],

  totalbudget: '',
  budgetPoster: [],
  budgetAnteckningar: '',

  milstolpar: [],
  tidsplanAnteckningar: '',

  kpStartbesked: false,
  kpKontrollansvarig: false,
  kpGrannar: false,
  kpEl: false,
  kpVaV: false,
  kpAvfall: false,
  kpArbetsplatsplan: false,
  kpSakerhet: false,
  kpForsakring: false,
  kpSkyddsombud: false,
  kpBasPU: false,
  kpBilder: false,
  kontrollAnteckningar: '',
};

// ─────────────────────────────────────────────────────────────────────────────
// Konstanter
// ─────────────────────────────────────────────────────────────────────────────

const LOCAL_STORAGE_KEY = 'ytterman_byggstart_planerare_v1';

const SEKTIONER = [
  { id: 0, label: 'Projektinfo',     icon: ClipboardList },
  { id: 1, label: 'Lov & handlingar', icon: FileText },
  { id: 2, label: 'Entreprenörer',   icon: Users },
  { id: 3, label: 'Budget',          icon: DollarSign },
  { id: 4, label: 'Tidsplan',        icon: CalendarDays },
  { id: 5, label: 'Kontrollpunkter', icon: CheckSquare },
  { id: 6, label: 'Sammanfattning',  icon: BarChart3 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Hjälpkomponenter (lokala för verktyget)
// ─────────────────────────────────────────────────────────────────────────────

/** Enkel radrad med label + input */
const Falt = ({
  label,
  id,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-sm font-medium text-slate-700">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border-slate-200 focus:border-primary focus:ring-primary/20"
    />
  </div>
);

/** Checkbox med label */
const CheckFalt = ({
  label,
  id,
  checked,
  onChange,
  description,
}: {
  label: string;
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  description?: string;
}) => (
  <div className="flex items-start gap-3 py-2">
    <Checkbox
      id={id}
      checked={checked}
      onCheckedChange={(v) => onChange(!!v)}
      className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
    />
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-slate-700 cursor-pointer">
        {label}
      </Label>
      {description && (
        <p className="text-xs text-slate-500 mt-0.5">{description}</p>
      )}
    </div>
  </div>
);

/** Diskret CTA-ruta */
const CtaRuta = ({
  text,
  linkText,
  href,
}: {
  text: string;
  linkText: string;
  href: string;
}) => (
  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-3">
    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
    <p className="text-sm text-amber-800 flex-1">{text}</p>
    <Button
      variant="outline"
      size="sm"
      className="border-amber-300 text-amber-800 hover:bg-amber-100 flex-shrink-0"
      asChild
    >
      <Link to={href}>
        {linkText}
        <ChevronRight className="ml-1 w-3 h-3" />
      </Link>
    </Button>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Hjälpfunktion: beräkna ifyllnadsgrad
// ─────────────────────────────────────────────────────────────────────────────

function beraknaProgress(data: PlaneringsData): number {
  const viktigaFalt: (keyof PlaneringsData)[] = [
    'projektnamn', 'adress', 'byggherre',
    'lovTyp',
    'totalbudget',
    'kpStartbesked', 'kpKontrollansvarig',
  ];

  let fyllda = 0;
  for (const falt of viktigaFalt) {
    const v = data[falt];
    if (typeof v === 'string' && v.trim() !== '') fyllda++;
    else if (typeof v === 'boolean' && v) fyllda++;
  }

  // Bonus om det finns minst en entreprenör och en milstolpe
  if (data.entreprenorer.length > 0) fyllda++;
  if (data.milstolpar.length > 0) fyllda++;

  return Math.round((fyllda / (viktigaFalt.length + 2)) * 100);
}

// ─────────────────────────────────────────────────────────────────────────────
// Huvudkomponent
// ─────────────────────────────────────────────────────────────────────────────

const ByggstartPlanerare = () => {
  const [data, setData] = useState<PlaneringsData>(defaultData);
  const [aktivSektion, setAktivSektion] = useState(0);
  const [sparadMsg, setSparadMsg] = useState(false);
  const sparTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ladda sparad data från localStorage vid start
  useEffect(() => {
    try {
      const sparad = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (sparad) {
        const parsed = JSON.parse(sparad) as Partial<PlaneringsData>;
        setData({ ...defaultData, ...parsed });
      }
    } catch {
      // Om JSON är trasig, börja om
    }
  }, []);

  // Autospara med debounce (500 ms) när data ändras
  useEffect(() => {
    if (sparTimerRef.current) clearTimeout(sparTimerRef.current);
    sparTimerRef.current = setTimeout(() => {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
        setSparadMsg(true);
        setTimeout(() => setSparadMsg(false), 2000);
      } catch {
        // localStorage kan vara full i extremfall
      }
    }, 500);
    return () => {
      if (sparTimerRef.current) clearTimeout(sparTimerRef.current);
    };
  }, [data]);

  // Uppdateringsfunktion för enkla fält
  const uppdatera = useCallback(
    <K extends keyof PlaneringsData>(falt: K, varde: PlaneringsData[K]) => {
      setData((prev) => ({ ...prev, [falt]: varde }));
    },
    []
  );

  const progress = beraknaProgress(data);

  // ── Export ──────────────────────────────────────────────────────────────────
  const exporteraJSON = () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `byggstart-${data.projektnamn || 'projekt'}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Import ──────────────────────────────────────────────────────────────────
  const importeraJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fil = e.target.files?.[0];
    if (!fil) return;
    const lasare = new FileReader();
    lasare.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target?.result as string) as Partial<PlaneringsData>;
        setData({ ...defaultData, ...parsed });
      } catch {
        alert('Filen kunde inte läsas. Kontrollera att det är en giltig JSON-fil.');
      }
    };
    lasare.readAsText(fil);
    // Nollställ filväljaren så samma fil kan importeras igen
    e.target.value = '';
  };

  // ── Rensa allt ──────────────────────────────────────────────────────────────
  const rensaAllt = () => {
    setData(defaultData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setAktivSektion(0);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Sektion 1: Projektinfo
  // ─────────────────────────────────────────────────────────────────────────

  const renderProjektinfo = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-1">Projektinformation</h2>
        <p className="text-sm text-slate-500">Grundläggande information om ditt byggprojekt.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Falt
          label="Projektnamn"
          id="projektnamn"
          value={data.projektnamn}
          onChange={(v) => uppdatera('projektnamn', v)}
          placeholder="t.ex. Tillbyggnad villa Skogsvägen 4"
          required
        />
        <div className="space-y-1.5">
          <Label htmlFor="projekttyp" className="text-sm font-medium text-slate-700">
            Typ av projekt
          </Label>
          <Select
            value={data.projekttyp}
            onValueChange={(v) => uppdatera('projekttyp', v)}
          >
            <SelectTrigger id="projekttyp" className="border-slate-200">
              <SelectValue placeholder="Välj projekttyp…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nybyggnad">Nybyggnad</SelectItem>
              <SelectItem value="tillbyggnad">Tillbyggnad</SelectItem>
              <SelectItem value="ombyggnad">Ombyggnad/renovering</SelectItem>
              <SelectItem value="attefall">Attefallsåtgärd</SelectItem>
              <SelectItem value="annat">Annat</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Falt
          label="Adress"
          id="adress"
          value={data.adress}
          onChange={(v) => uppdatera('adress', v)}
          placeholder="Gatuadress, postnummer och ort"
          required
        />
        <Falt
          label="Fastighetsbeteckning"
          id="fastighetsbeteckning"
          value={data.fastighetsbeteckning}
          onChange={(v) => uppdatera('fastighetsbeteckning', v)}
          placeholder="t.ex. Viksjö 1:23"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Falt
          label="Byggherre / beställare"
          id="byggherre"
          value={data.byggherre}
          onChange={(v) => uppdatera('byggherre', v)}
          placeholder="Namn eller företagsnamn"
          required
        />
        <Falt
          label="Uppskattad storlek (m²)"
          id="storlek"
          value={data.storlek}
          onChange={(v) => uppdatera('storlek', v)}
          placeholder="t.ex. 45"
          type="number"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Falt
          label="Telefon"
          id="telefon"
          value={data.telefon}
          onChange={(v) => uppdatera('telefon', v)}
          placeholder="07X-XXX XX XX"
          type="tel"
        />
        <Falt
          label="E-post"
          id="epost"
          value={data.epost}
          onChange={(v) => uppdatera('epost', v)}
          placeholder="din@epost.se"
          type="email"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Falt
          label="Planerat startdatum"
          id="startdatum"
          value={data.startdatum}
          onChange={(v) => uppdatera('startdatum', v)}
          type="date"
        />
        <Falt
          label="Planerat slutdatum"
          id="slutdatum"
          value={data.slutdatum}
          onChange={(v) => uppdatera('slutdatum', v)}
          type="date"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="projektbeskrivning" className="text-sm font-medium text-slate-700">
          Projektbeskrivning
        </Label>
        <Textarea
          id="projektbeskrivning"
          value={data.projektbeskrivning}
          onChange={(e) => uppdatera('projektbeskrivning', e.target.value)}
          placeholder="Beskriv vad du planerar att bygga, varför och eventuella särskilda förutsättningar…"
          rows={4}
          className="border-slate-200 focus:border-primary focus:ring-primary/20"
        />
      </div>

      <CtaRuta
        text="Funderar du på om ditt projekt kräver bygglov eller anmälan? Tobias Ytterman hjälper dig snabbt reda ut det."
        linkText="Kontakta Tobias"
        href="/kontakt"
      />
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Sektion 2: Lov / anmälan / handlingar
  // ─────────────────────────────────────────────────────────────────────────

  const renderLovHandlingar = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-1">Lov, anmälan och handlingar</h2>
        <p className="text-sm text-slate-500">Dokumentera tillstånd och vilka handlingar som finns på plats.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="lovTyp" className="text-sm font-medium text-slate-700">
            Typ av tillstånd
          </Label>
          <Select value={data.lovTyp} onValueChange={(v) => uppdatera('lovTyp', v)}>
            <SelectTrigger id="lovTyp" className="border-slate-200">
              <SelectValue placeholder="Välj tillståndstyp…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bygglov">Bygglov</SelectItem>
              <SelectItem value="anmalan">Anmälan (Attefallsåtgärd)</SelectItem>
              <SelectItem value="inget">Inget tillstånd krävs</SelectItem>
              <SelectItem value="oklart">Oklart – behöver utredas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Falt
          label="Ärende-/lovnummer"
          id="lovNummer"
          value={data.lovNummer}
          onChange={(v) => uppdatera('lovNummer', v)}
          placeholder="Kommunens diarienummer"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Falt
          label="Beslutsdatum"
          id="lovDatum"
          value={data.lovDatum}
          onChange={(v) => uppdatera('lovDatum', v)}
          type="date"
        />
        <Falt
          label="Startbesked – datum"
          id="startbeskedDatum"
          value={data.startbeskedDatum}
          onChange={(v) => uppdatera('startbeskedDatum', v)}
          type="date"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <CheckFalt
          label="Startbesked beviljat"
          id="startbesked"
          checked={data.startbesked}
          onChange={(v) => uppdatera('startbesked', v)}
          description="Byggstart får inte ske utan startbesked."
        />
        <CheckFalt
          label="Kontrollplan upprättad"
          id="kontrollplan"
          checked={data.kontrollplan}
          onChange={(v) => uppdatera('kontrollplan', v)}
          description="Krävs för projekt med kontrollansvarig."
        />
      </div>

      {/* Kontrollansvarig */}
      <div className="border-t border-slate-100 pt-4 space-y-4">
        <CheckFalt
          label="Kontrollansvarig (KA) utsedd"
          id="harKontrollansvarig"
          checked={data.harKontrollansvarig}
          onChange={(v) => uppdatera('harKontrollansvarig', v)}
          description="Krävs vid de flesta åtgärder som kräver bygglov."
        />
        {data.harKontrollansvarig && (
          <div className="grid sm:grid-cols-2 gap-4 pl-8">
            <Falt
              label="KA – namn"
              id="kontrollansvarigNamn"
              value={data.kontrollansvarigNamn}
              onChange={(v) => uppdatera('kontrollansvarigNamn', v)}
              placeholder="Namn"
            />
            <Falt
              label="KA – kontaktuppgifter"
              id="kontrollansvarigKontakt"
              value={data.kontrollansvarigKontakt}
              onChange={(v) => uppdatera('kontrollansvarigKontakt', v)}
              placeholder="Telefon eller e-post"
            />
          </div>
        )}
      </div>

      {/* Handlingar */}
      <div className="border-t border-slate-100 pt-4">
        <h3 className="text-base font-semibold text-slate-800 mb-3">Handlingar – finns dessa på plats?</h3>
        <div className="grid sm:grid-cols-2 gap-1">
          <CheckFalt label="Situationsplan" id="hSituation" checked={data.handlingSituationsplan} onChange={(v) => uppdatera('handlingSituationsplan', v)} />
          <CheckFalt label="Planritning" id="hPlan" checked={data.handlingPlanritning} onChange={(v) => uppdatera('handlingPlanritning', v)} />
          <CheckFalt label="Fasadritning" id="hFasad" checked={data.handlingFasadritning} onChange={(v) => uppdatera('handlingFasadritning', v)} />
          <CheckFalt label="Sektionsritning" id="hSektion" checked={data.handlingSektionsritning} onChange={(v) => uppdatera('handlingSektionsritning', v)} />
          <CheckFalt label="Konstruktionsritning" id="hKonstr" checked={data.handlingKonstruktionsritning} onChange={(v) => uppdatera('handlingKonstruktionsritning', v)} />
          <CheckFalt label="Energiberäkning" id="hEnergi" checked={data.handlingEnergyCalc} onChange={(v) => uppdatera('handlingEnergyCalc', v)} />
          <CheckFalt label="Brandskyddsdokumentation" id="hBrand" checked={data.handlingBrandskydd} onChange={(v) => uppdatera('handlingBrandskydd', v)} />
          <CheckFalt label="Tillgänglighetsdokumentation" id="hTillgang" checked={data.handlingTillganglighet} onChange={(v) => uppdatera('handlingTillganglighet', v)} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="lovAnteckningar" className="text-sm font-medium text-slate-700">
          Anteckningar och övriga uppgifter
        </Label>
        <Textarea
          id="lovAnteckningar"
          value={data.lovAnteckningar}
          onChange={(e) => uppdatera('lovAnteckningar', e.target.value)}
          placeholder="Noteringar om villkor, avvikelser, kontakter med kommunen…"
          rows={3}
          className="border-slate-200 focus:border-primary focus:ring-primary/20"
        />
      </div>

      <CtaRuta
        text="Behöver du hjälp av en certifierad kontrollansvarig? Tobias Ytterman är certifierad KA enligt PBL och hjälper dig genom hela processen."
        linkText="Läs om KA-tjänsten"
        href="/kontrollansvarig"
      />
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Sektion 3: Entreprenörer
  // ─────────────────────────────────────────────────────────────────────────

  const laggTillEntreprenor = () => {
    uppdatera('entreprenorer', [...data.entreprenorer, defaultEntreprenor()]);
  };

  const uppdateraEntreprenor = (id: string, falt: keyof Entreprenor, varde: string | boolean) => {
    setData((prev) => ({
      ...prev,
      entreprenorer: prev.entreprenorer.map((e) =>
        e.id === id ? { ...e, [falt]: varde } : e
      ),
    }));
  };

  const taBortEntreprenor = (id: string) => {
    setData((prev) => ({
      ...prev,
      entreprenorer: prev.entreprenorer.filter((e) => e.id !== id),
    }));
  };

  const renderEntreprenorer = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-1">Entreprenörer och kontakter</h2>
        <p className="text-sm text-slate-500">Samla alla viktiga kontaktuppgifter på ett ställe.</p>
      </div>

      {data.entreprenorer.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-lg">
          <Users className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <p className="text-sm text-slate-500">Inga entreprenörer tillagda ännu.</p>
        </div>
      )}

      {data.entreprenorer.map((ent, index) => (
        <Card key={ent.id} className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold text-slate-800">
                Entreprenör {index + 1}
                {ent.foretag && ` – ${ent.foretag}`}
              </CardTitle>
              <button
                onClick={() => taBortEntreprenor(ent.id)}
                className="text-slate-400 hover:text-red-500 transition-colors"
                aria-label="Ta bort entreprenör"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-slate-700">Roll</Label>
                <Select
                  value={ent.roll}
                  onValueChange={(v) => uppdateraEntreprenor(ent.id, 'roll', v)}
                >
                  <SelectTrigger className="border-slate-200">
                    <SelectValue placeholder="Välj roll…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="generalentreprenor">Generalentreprenör</SelectItem>
                    <SelectItem value="totalentreprenor">Totalentreprenör</SelectItem>
                    <SelectItem value="underentreprenor">Underentreprenör</SelectItem>
                    <SelectItem value="konstruktor">Konstruktör</SelectItem>
                    <SelectItem value="arkitekt">Arkitekt</SelectItem>
                    <SelectItem value="ror">Rörläggare / VVS</SelectItem>
                    <SelectItem value="el">Elektriker</SelectItem>
                    <SelectItem value="mark">Markentreprenör</SelectItem>
                    <SelectItem value="annat">Annat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-slate-700">Företagsnamn</Label>
                <Input
                  value={ent.foretag}
                  onChange={(e) => uppdateraEntreprenor(ent.id, 'foretag', e.target.value)}
                  placeholder="Företagsnamn"
                  className="border-slate-200"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-slate-700">Kontaktperson</Label>
                <Input
                  value={ent.kontaktperson}
                  onChange={(e) => uppdateraEntreprenor(ent.id, 'kontaktperson', e.target.value)}
                  placeholder="Namn"
                  className="border-slate-200"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-slate-700">Telefon</Label>
                <Input
                  value={ent.telefon}
                  onChange={(e) => uppdateraEntreprenor(ent.id, 'telefon', e.target.value)}
                  placeholder="07X-XXX XX XX"
                  type="tel"
                  className="border-slate-200"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-slate-700">E-post</Label>
                <Input
                  value={ent.epost}
                  onChange={(e) => uppdateraEntreprenor(ent.id, 'epost', e.target.value)}
                  placeholder="epost@foretag.se"
                  type="email"
                  className="border-slate-200"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-slate-700">Ansvarsområde</Label>
                <Input
                  value={ent.ansvarsomrade}
                  onChange={(e) => uppdateraEntreprenor(ent.id, 'ansvarsomrade', e.target.value)}
                  placeholder="t.ex. Grundläggning och stomme"
                  className="border-slate-200"
                />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id={`kontrakt-${ent.id}`}
                checked={ent.kontrakt}
                onCheckedChange={(v) => uppdateraEntreprenor(ent.id, 'kontrakt', !!v)}
                className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor={`kontrakt-${ent.id}`} className="text-sm text-slate-700 cursor-pointer">
                Kontrakt signerat
              </Label>
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-slate-700">Anteckningar</Label>
              <Textarea
                value={ent.anteckningar}
                onChange={(e) => uppdateraEntreprenor(ent.id, 'anteckningar', e.target.value)}
                placeholder="Övriga noteringar…"
                rows={2}
                className="border-slate-200"
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        variant="outline"
        onClick={laggTillEntreprenor}
        className="w-full border-dashed border-slate-300 text-slate-600 hover:border-primary hover:text-primary"
      >
        <Plus className="w-4 h-4 mr-2" />
        Lägg till entreprenör
      </Button>

      <CtaRuta
        text="Behöver du stöd med BAS-P (planering och projektering) eller BAS-U (utförande)? Tobias Ytterman är certifierad Byggarbetsmiljösamordnare."
        linkText="Läs om BAS-P/U"
        href="/bas-p"
      />
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Sektion 4: Budget
  // ─────────────────────────────────────────────────────────────────────────

  const laggTillBudgetPost = () => {
    uppdatera('budgetPoster', [...data.budgetPoster, defaultBudgetPost()]);
  };

  const uppdateraBudgetPost = (id: string, falt: keyof BudgetPost, varde: string) => {
    setData((prev) => ({
      ...prev,
      budgetPoster: prev.budgetPoster.map((p) =>
        p.id === id ? { ...p, [falt]: varde } : p
      ),
    }));
  };

  const taBortBudgetPost = (id: string) => {
    setData((prev) => ({
      ...prev,
      budgetPoster: prev.budgetPoster.filter((p) => p.id !== id),
    }));
  };

  const totalBudgeterat = data.budgetPoster.reduce(
    (sum, p) => sum + (parseFloat(p.budgeterat.replace(/\s/g, '').replace(',', '.')) || 0),
    0
  );
  const totalUtfall = data.budgetPoster.reduce(
    (sum, p) => sum + (parseFloat(p.utfall.replace(/\s/g, '').replace(',', '.')) || 0),
    0
  );

  const renderBudget = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-1">Budget och kostnadsöversikt</h2>
        <p className="text-sm text-slate-500">Håll koll på kostnader och jämför budget mot utfall.</p>
      </div>

      <Falt
        label="Total budget (kr inkl. moms)"
        id="totalbudget"
        value={data.totalbudget}
        onChange={(v) => uppdatera('totalbudget', v)}
        placeholder="t.ex. 850 000"
        type="number"
      />

      {/* Budgetposter */}
      <div className="border-t border-slate-100 pt-4">
        <h3 className="text-base font-semibold text-slate-800 mb-3">Kostnadsposter</h3>

        {data.budgetPoster.length === 0 && (
          <div className="text-center py-6 border-2 border-dashed border-slate-200 rounded-lg mb-4">
            <DollarSign className="w-7 h-7 text-slate-300 mx-auto mb-2" />
            <p className="text-sm text-slate-500">Inga kostnadsposter tillagda ännu.</p>
          </div>
        )}

        {data.budgetPoster.length > 0 && (
          <div className="space-y-3 mb-4">
            {/* Kolumnrubriker */}
            <div className="hidden sm:grid sm:grid-cols-12 gap-2 text-xs font-medium text-slate-500 px-1">
              <span className="col-span-3">Kategori</span>
              <span className="col-span-4">Beskrivning</span>
              <span className="col-span-2">Budget (kr)</span>
              <span className="col-span-2">Utfall (kr)</span>
              <span className="col-span-1" />
            </div>
            {data.budgetPoster.map((post) => (
              <div key={post.id} className="grid sm:grid-cols-12 gap-2 items-center">
                <div className="sm:col-span-3">
                  <Select
                    value={post.kategori}
                    onValueChange={(v) => uppdateraBudgetPost(post.id, 'kategori', v)}
                  >
                    <SelectTrigger className="border-slate-200 text-sm h-9">
                      <SelectValue placeholder="Kategori…" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mark">Mark & grundläggning</SelectItem>
                      <SelectItem value="stomme">Stomme & konstruktion</SelectItem>
                      <SelectItem value="tak">Tak</SelectItem>
                      <SelectItem value="fasad">Fasad</SelectItem>
                      <SelectItem value="invandiga">Invändiga arbeten</SelectItem>
                      <SelectItem value="el">El & belysning</SelectItem>
                      <SelectItem value="vvs">VVS</SelectItem>
                      <SelectItem value="ventilation">Ventilation</SelectItem>
                      <SelectItem value="konsulter">Konsulter & handlingar</SelectItem>
                      <SelectItem value="avgifter">Avgifter & anslutningar</SelectItem>
                      <SelectItem value="ovrigt">Övrigt</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-4">
                  <Input
                    value={post.beskrivning}
                    onChange={(e) => uppdateraBudgetPost(post.id, 'beskrivning', e.target.value)}
                    placeholder="Beskrivning"
                    className="border-slate-200 h-9 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    value={post.budgeterat}
                    onChange={(e) => uppdateraBudgetPost(post.id, 'budgeterat', e.target.value)}
                    placeholder="0"
                    type="number"
                    className="border-slate-200 h-9 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    value={post.utfall}
                    onChange={(e) => uppdateraBudgetPost(post.id, 'utfall', e.target.value)}
                    placeholder="0"
                    type="number"
                    className="border-slate-200 h-9 text-sm"
                  />
                </div>
                <div className="sm:col-span-1 flex justify-end">
                  <button
                    onClick={() => taBortBudgetPost(post.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                    aria-label="Ta bort post"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Summering */}
            <div className="border-t border-slate-200 pt-3 grid sm:grid-cols-12 gap-2">
              <div className="sm:col-span-7 text-sm font-semibold text-slate-700">Summa</div>
              <div className="sm:col-span-2 text-sm font-semibold text-slate-900">
                {totalBudgeterat.toLocaleString('sv-SE')} kr
              </div>
              <div className="sm:col-span-2 text-sm font-semibold text-slate-900">
                {totalUtfall.toLocaleString('sv-SE')} kr
              </div>
            </div>
          </div>
        )}

        <Button
          variant="outline"
          onClick={laggTillBudgetPost}
          className="w-full border-dashed border-slate-300 text-slate-600 hover:border-primary hover:text-primary"
        >
          <Plus className="w-4 h-4 mr-2" />
          Lägg till kostnadspost
        </Button>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="budgetAnteckningar" className="text-sm font-medium text-slate-700">
          Anteckningar
        </Label>
        <Textarea
          id="budgetAnteckningar"
          value={data.budgetAnteckningar}
          onChange={(e) => uppdatera('budgetAnteckningar', e.target.value)}
          placeholder="Noteringar om offerter, prisjusteringar, osäkerheter…"
          rows={3}
          className="border-slate-200"
        />
      </div>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Sektion 5: Tidsplan
  // ─────────────────────────────────────────────────────────────────────────

  const laggTillMilstolpe = () => {
    uppdatera('milstolpar', [...data.milstolpar, defaultMilstolpe()]);
  };

  const uppdateraMilstolpe = (id: string, falt: keyof Milstolpe, varde: string | boolean) => {
    setData((prev) => ({
      ...prev,
      milstolpar: prev.milstolpar.map((m) =>
        m.id === id ? { ...m, [falt]: varde } : m
      ),
    }));
  };

  const taBortMilstolpe = (id: string) => {
    setData((prev) => ({
      ...prev,
      milstolpar: prev.milstolpar.filter((m) => m.id !== id),
    }));
  };

  const renderTidsplan = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-1">Tidsplan och milstolpar</h2>
        <p className="text-sm text-slate-500">Lägg upp viktiga datum och håll koll på vad som är klart.</p>
      </div>

      {data.milstolpar.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-lg">
          <CalendarDays className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <p className="text-sm text-slate-500">Inga milstolpar tillagda ännu.</p>
        </div>
      )}

      <div className="space-y-3">
        {data.milstolpar.map((m, index) => (
          <div key={m.id} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg">
            <Checkbox
              id={`m-${m.id}`}
              checked={m.klar}
              onCheckedChange={(v) => uppdateraMilstolpe(m.id, 'klar', !!v)}
              className="flex-shrink-0 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <span className="text-xs text-slate-400 flex-shrink-0 w-5 text-center">
              {index + 1}
            </span>
            <Input
              value={m.beskrivning}
              onChange={(e) => uppdateraMilstolpe(m.id, 'beskrivning', e.target.value)}
              placeholder="Beskriv milstolpen…"
              className={`border-0 border-b border-slate-200 rounded-none px-0 focus-visible:ring-0 flex-1 text-sm ${m.klar ? 'line-through text-slate-400' : ''}`}
            />
            <Input
              value={m.datum}
              onChange={(e) => uppdateraMilstolpe(m.id, 'datum', e.target.value)}
              type="date"
              className="border-slate-200 w-36 flex-shrink-0 text-sm h-8"
            />
            <button
              onClick={() => taBortMilstolpe(m.id)}
              className="text-slate-400 hover:text-red-500 transition-colors flex-shrink-0"
              aria-label="Ta bort milstolpe"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={laggTillMilstolpe}
        className="w-full border-dashed border-slate-300 text-slate-600 hover:border-primary hover:text-primary"
      >
        <Plus className="w-4 h-4 mr-2" />
        Lägg till milstolpe
      </Button>

      <div className="space-y-1.5">
        <Label htmlFor="tidsplanAnteckningar" className="text-sm font-medium text-slate-700">
          Anteckningar om tidsplanen
        </Label>
        <Textarea
          id="tidsplanAnteckningar"
          value={data.tidsplanAnteckningar}
          onChange={(e) => uppdatera('tidsplanAnteckningar', e.target.value)}
          placeholder="Noteringar om beroenden, leveranstider, säsongsproblem…"
          rows={3}
          className="border-slate-200"
        />
      </div>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Sektion 6: Kontrollpunkter
  // ─────────────────────────────────────────────────────────────────────────

  const kontrollpunkter: Array<{
    falt: keyof PlaneringsData;
    label: string;
    desc?: string;
  }> = [
    {
      falt: 'kpStartbesked',
      label: 'Startbesked finns och är beviljat',
      desc: 'Byggnadsarbeten får inte påbörjas utan startbesked.',
    },
    {
      falt: 'kpKontrollansvarig',
      label: 'Kontrollansvarig är utsedd och informerad',
      desc: 'KA ska vara anmäld till kommunen och ha fått ta del av handlingarna.',
    },
    {
      falt: 'kpGrannar',
      label: 'Grannar notifierade (om tillämpligt)',
      desc: 'Informera grannar tidigt för att undvika konflikter och klagomål.',
    },
    {
      falt: 'kpEl',
      label: 'Elarbeten anmälda / behörig elinstallatör anlitad',
    },
    {
      falt: 'kpVaV',
      label: 'VA-anslutning planerad eller anmäld',
    },
    {
      falt: 'kpAvfall',
      label: 'Byggavfallshantering planerad',
      desc: 'Upprätta avfallsplan vid projekt med mer än 1 tons material.',
    },
    {
      falt: 'kpArbetsplatsplan',
      label: 'Arbetsplatsplan upprättad',
      desc: 'Visar placering av bodar, upplag, transporter och skyddsanordningar.',
    },
    {
      falt: 'kpSakerhet',
      label: 'Säkerhets- och skyddsanordningar på plats',
      desc: 'Räcken, skyddsfall, säkerhetsväst m.m.',
    },
    {
      falt: 'kpForsakring',
      label: 'Försäkringar kontrollerade',
      desc: 'Kontrollera att alla inblandade parter har relevanta ansvarsförsäkringar.',
    },
    {
      falt: 'kpSkyddsombud',
      label: 'Skyddsombud utsett (vid fler än 5 sysselsatta)',
    },
    {
      falt: 'kpBasPU',
      label: 'BAS-P och BAS-U utsedda (vid tillämpliga projekt)',
      desc: 'Krävs om flera företag utför arbeten på arbetsplatsen.',
    },
    {
      falt: 'kpBilder',
      label: 'Dokumentationsbilder tagna innan byggstart',
      desc: 'Fotografera befintligt skick för att undvika framtida tvister.',
    },
  ];

  const antalKlara = kontrollpunkter.filter((kp) => !!data[kp.falt]).length;

  const renderKontrollpunkter = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-1">Kontrollpunkter före byggstart</h2>
        <p className="text-sm text-slate-500">Gå igenom dessa punkter innan du ger klartecken för byggstart.</p>
      </div>

      {/* Mini-progress för kontrollpunkter */}
      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
        <div className="flex-1">
          <Progress
            value={(antalKlara / kontrollpunkter.length) * 100}
            className="h-2"
          />
        </div>
        <span className="text-sm font-medium text-slate-700 flex-shrink-0">
          {antalKlara}/{kontrollpunkter.length} klara
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {kontrollpunkter.map((kp) => (
          <CheckFalt
            key={kp.falt}
            label={kp.label}
            id={kp.falt}
            checked={!!data[kp.falt]}
            onChange={(v) => uppdatera(kp.falt as keyof PlaneringsData, v as never)}
            description={kp.desc}
          />
        ))}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="kontrollAnteckningar" className="text-sm font-medium text-slate-700">
          Anteckningar
        </Label>
        <Textarea
          id="kontrollAnteckningar"
          value={data.kontrollAnteckningar}
          onChange={(e) => uppdatera('kontrollAnteckningar', e.target.value)}
          placeholder="Ytterligare kontrollpunkter specifika för ditt projekt…"
          rows={3}
          className="border-slate-200"
        />
      </div>

      <CtaRuta
        text="Behöver du hjälp att säkerställa att alla kontrollpunkter är uppfyllda? Boka ett rådgivningsmöte med Tobias Ytterman."
        linkText="Boka rådgivning"
        href="/kontakt"
      />
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Sektion 7: Sammanfattning
  // ─────────────────────────────────────────────────────────────────────────

  const renderSammanfattning = () => {
    const handlingarKlara = [
      data.handlingSituationsplan,
      data.handlingPlanritning,
      data.handlingFasadritning,
      data.handlingSektionsritning,
    ].filter(Boolean).length;

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-1">Sammanfattning</h2>
          <p className="text-sm text-slate-500">Översikt över ditt projekt och planeringsläget.</p>
        </div>

        {/* Projektinfo-kort */}
        <Card className="border-slate-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-slate-800 flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-primary" />
              Projekt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm text-slate-700">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <span className="text-slate-500">Namn:</span>
              <span>{data.projektnamn || '–'}</span>
              <span className="text-slate-500">Typ:</span>
              <span>{data.projekttyp || '–'}</span>
              <span className="text-slate-500">Adress:</span>
              <span>{data.adress || '–'}</span>
              <span className="text-slate-500">Byggherre:</span>
              <span>{data.byggherre || '–'}</span>
              <span className="text-slate-500">Storlek:</span>
              <span>{data.storlek ? `${data.storlek} m²` : '–'}</span>
              <span className="text-slate-500">Period:</span>
              <span>
                {data.startdatum || '?'} → {data.slutdatum || '?'}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Status-kort */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="border-slate-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold text-slate-800 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Lov och handlingar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                {data.lovTyp ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                )}
                <span className="text-slate-700">
                  Tillståndstyp: {data.lovTyp || 'Ej angiven'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {data.startbesked ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                )}
                <span className="text-slate-700">
                  Startbesked: {data.startbesked ? 'Beviljat' : 'Saknas'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {handlingarKlara >= 3 ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                )}
                <span className="text-slate-700">
                  Grundhandlingar: {handlingarKlara}/4 på plats
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold text-slate-800 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-primary" />
                Byggstartberedskap
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Kontrollpunkter:</span>
                <Badge
                  variant={antalKlara === kontrollpunkter.length ? 'default' : 'secondary'}
                  className={
                    antalKlara === kontrollpunkter.length
                      ? 'bg-green-100 text-green-800 hover:bg-green-100'
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                  }
                >
                  {antalKlara}/{kontrollpunkter.length}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Entreprenörer:</span>
                <Badge variant="secondary">{data.entreprenorer.length} tillagda</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Milstolpar:</span>
                <Badge variant="secondary">
                  {data.milstolpar.filter((m) => m.klar).length}/{data.milstolpar.length} klara
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold text-slate-800 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                Budget
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-x-4">
                <span className="text-slate-500">Total budget:</span>
                <span>{data.totalbudget ? `${parseInt(data.totalbudget).toLocaleString('sv-SE')} kr` : '–'}</span>
                <span className="text-slate-500">Budgeterat (poster):</span>
                <span>{totalBudgeterat > 0 ? `${totalBudgeterat.toLocaleString('sv-SE')} kr` : '–'}</span>
                <span className="text-slate-500">Utfall hittills:</span>
                <span>{totalUtfall > 0 ? `${totalUtfall.toLocaleString('sv-SE')} kr` : '–'}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold text-slate-800 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                Övergripande progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-700">
                  <span>Planeringsgrad</span>
                  <span className="font-semibold">{progress}%</span>
                </div>
                <Progress value={progress} className="h-3" />
                <p className="text-xs text-slate-500">
                  Baseras på viktiga nyckeluppgifter i planeraren.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Anteckningar */}
        {data.kontrollAnteckningar && (
          <Card className="border-slate-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-700">
                Anteckningar – kontrollpunkter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 whitespace-pre-line">{data.kontrollAnteckningar}</p>
            </CardContent>
          </Card>
        )}

        {/* CTA-sektion */}
        <div className="p-5 earth-gradient rounded-xl text-white">
          <h3 className="text-base font-semibold mb-2">Redo att ta nästa steg?</h3>
          <p className="text-sm opacity-90 mb-4">
            Planeraren ger dig en god överblick – men ett verkligt byggprojekt kräver
            projektspecifik bedömning, certifierade roller och erfarenhet. Tobias Ytterman
            hjälper dig med det.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link to="/kontakt">Kontakta Tobias</Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+46761118447">
                <Phone className="w-3 h-3 mr-1.5" />
                076-111 84 47
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Rendering
  // ─────────────────────────────────────────────────────────────────────────

  const sektionsinnehall = [
    renderProjektinfo,
    renderLovHandlingar,
    renderEntreprenorer,
    renderBudget,
    renderTidsplan,
    renderKontrollpunkter,
    renderSammanfattning,
  ];

  return (
    <>
      <AdvancedSEO
        title="Byggstart-planerare – planera ditt byggprojekt | Ytterman"
        description="Gratis digitalt verktyg för att planera din byggstart. Samla lov, handlingar, entreprenörer, budget och milstolpar på ett ställe. Spara lokalt i webbläsaren."
        keywords="byggstart, byggplanering, byggprojekt planerare, kontrollansvarig, BAS-P, BAS-U, bygglov, Ytterman"
        url="https://ytterman.com/byggstart-planerare"
        type="website"
      />
      <CanonicalUrl path="/byggstart-planerare" />

      <div className="min-h-screen bg-slate-50">
        <Header />

        {/* Breadcrumb */}
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[{ label: 'Byggstart-planerare', href: '/byggstart-planerare' }]}
            />
          </div>
        </section>

        {/* Hero */}
        <section className="bg-white border-b py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-3">
                  Digitalt planeringsverktyg
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Byggstart-planerare
                </h1>
                <p className="mt-2 text-slate-600 max-w-xl">
                  Få ordning på din byggstart. Samla projektinfo, lov, handlingar,
                  entreprenörer, budget och kontrollpunkter på ett ställe – och spara
                  allt automatiskt i webbläsaren.
                </p>
              </div>
              {/* Autospar-indikator */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                {sparadMsg ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-green-600">Sparat</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Autosparning aktiv</span>
                  </>
                )}
              </div>
            </div>

            {/* Övergripande progress */}
            <div className="mt-6">
              <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                <span>Planeringsgrad</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="container mx-auto px-4 max-w-5xl mt-4">
          <div className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
            <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Information:</strong> Detta verktyg är ett praktiskt stöd för planering och
              dokumentation. Det ersätter inte projektspecifik bedömning, kontrollansvarig,
              BAS-P/U eller annan professionell rådgivning där sådan krävs.
            </p>
          </div>
        </div>

        {/* Verktyget */}
        <div className="container mx-auto px-4 max-w-5xl py-6 pb-16">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Sidokolumn – navigation */}
            <aside className="lg:w-56 flex-shrink-0">
              <nav className="lg:sticky lg:top-24 space-y-1">
                {SEKTIONER.map((s) => {
                  const Icon = s.icon;
                  const aktiv = s.id === aktivSektion;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setAktivSektion(s.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                        aktiv
                          ? 'bg-primary text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      {s.label}
                    </button>
                  );
                })}

                {/* Verktygsknappar */}
                <div className="pt-4 space-y-2 border-t border-slate-200 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-slate-600 border-slate-200 text-xs"
                    onClick={exporteraJSON}
                  >
                    <Download className="w-3.5 h-3.5 mr-2" />
                    Exportera (JSON)
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-slate-600 border-slate-200 text-xs"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-3.5 h-3.5 mr-2" />
                    Importera (JSON)
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json,application/json"
                    className="hidden"
                    onChange={importeraJSON}
                  />

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50 text-xs"
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-2" />
                        Rensa allt
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Rensa all data?</AlertDialogTitle>
                        <AlertDialogDescription>
                          All information i planeraren raderas och kan inte återställas
                          (om du inte har exporterat en JSON-fil). Är du säker?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Avbryt</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={rensaAllt}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Ja, rensa allt
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </nav>
            </aside>

            {/* Mobilnavigation (horisontell scroll) */}
            <div className="lg:hidden overflow-x-auto -mx-4 px-4">
              <div className="flex gap-2 pb-2 min-w-max">
                {SEKTIONER.map((s) => {
                  const Icon = s.icon;
                  const aktiv = s.id === aktivSektion;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setAktivSektion(s.id)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors flex-shrink-0 ${
                        aktiv
                          ? 'bg-primary text-white'
                          : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Innehåll */}
            <main className="flex-1 min-w-0">
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  {sektionsinnehall[aktivSektion]()}
                </CardContent>
              </Card>

              {/* Navigation – föregående / nästa */}
              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-200 text-slate-700"
                  disabled={aktivSektion === 0}
                  onClick={() => setAktivSektion((s) => Math.max(0, s - 1))}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Föregående
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-200 text-slate-700"
                  disabled={aktivSektion === SEKTIONER.length - 1}
                  onClick={() => setAktivSektion((s) => Math.min(SEKTIONER.length - 1, s + 1))}
                >
                  Nästa
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ByggstartPlanerare;
