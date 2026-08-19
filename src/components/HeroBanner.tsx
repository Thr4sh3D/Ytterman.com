import { ArrowRight, Shield, Award, CheckCircle } from 'lucide-react';
import { BAS, COMPANY, KA_CERT, PRICE_LABELS } from '@/config/company';

export const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 earth-gradient rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Verifierad kompetens</h3>
              <p className="text-sm text-muted-foreground">{BAS.qualificationLabel}</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center space-x-1 text-accent mb-1">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">{COMPANY.experienceYears}+ Ã¥r</span>
            </div>
            <p className="text-xs text-muted-foreground">Erfarenhet</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-sm text-foreground">Ansluten till {COMPANY.affiliation.name}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-sm text-foreground">Kiwa {KA_CERT.certificateNumber} Â· {KA_CERT.authorizationLabel}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-sm text-foreground">Digital hantering och projektspecifik tidpn·ë[h‘éì¶»§q«^vF–öåFƒ¢7G&–æs°¢7F–öäÆ&VÃó¢7G&–æs°§Ð ¦6öç7B6ÆVå–ÖVçDÆ–æ²Ò‡fÇVS¢7G&–ærÂVæFVf–æVB’ÓâfÇVSòçG&–Ò‚’ÇÂVæFVf–æVC° ¦W‡÷'B6öç7BD”t•DÅõ$ôET5EôôddU%2Ò°¢'V–ÆF–æu7F'EÆææW#¢°¢¶W“¢v'V–ÆF–æu7F'EÆææW"rÀ¢æÖS¢4U%d”4U2æ'V–ÆF–æu7F'EÆææW"ææÖRÀ¢V&Æ–6F–öå7FGW3¢v–çFW&W7BÖöæÇ’rÀ¢6öçFVçE&VG“¢fÇ6RÀ¢WFöÖF–4FVÆ—fW'“¢fÇ6RÀ¢–ÖVçDÆ–æ³¢6ÆVå–ÖVçDÆ–æ²†–×÷'BæÖWFæVçbåd•DUõ”ÔTåEôÄ”äµô%T”ÄD”äuõ5D%EõÄääU"’À¢–æf÷&ÖF–öåFƒ¢rö¶öçF·Bó÷6W'f–6SÖ÷F†W"gWFÕ÷6÷W&6S×—GFW&ÖâgWFÕöÖVF—VÓÖ–çFW&æÂgWFÕö6×–vãÖ'–vw7F'B×ÆæW&&RÖ–æf÷&ÖF–öârÀ¢ÒÀ¢VæW&w”6Æ7VÆF–öã¢°¢¶W“¢vVæW&w”6Æ7VÆF–öârÀ¢æÖS¢4U%d”4U2æVæW&w”6Æ7VÆF–öâææÖRÀ¢V&Æ–6F–öå7FGW3¢wW&6†6&ÆRrÀ¢6öçFVçE&VG“¢G'VRÀ¢WFöÖF–4FVÆ—fW'“¢G'VRÀ¢–ÖVçDÆ–æ³¢%DäU%ôÄ”äµ2æVæW&w”6Æ7VÆF–öâÀ¢–æf÷&ÖF–öåFƒ¢röVæW&v–&W&¶æ–ærÖöæÆ–æRòrÀ¢7F–öäÆ&VÃ¢u7F'FVæW&v–&W,:F¶æ–ævVârÀ¢ÒÀ¢&ö¦V7E&Wf–Ws¢°¢¶W“¢w&ö¦V7E&Wf–WrrÀ¢æÖS¢tF–v—FÂ&ö¦V·Fw&ç6¶æ–ærrÀ¢V&Æ–6F–öå7FGW3¢v†–FFVârÀ¢6öçFVçE&VG“¢fÇ6RÀ¢WFöÖF–4FVÆ—fW'“¢fÇ6RÀ¢–ÖVçDÆ–æ³¢6ÆVå–ÖVçDÆ–æ²†–×÷'BæÖWFæVçbåd•DUõ”ÔTåEôÄ”äµõ$ô¤T5Eõ$Ud”Ur’À¢–æf÷&ÖF–öåFƒ¢rö¶öçF·Bó÷6W'f–6SÖ÷F†W"gWFÕ÷6÷W&6S×—GFW&ÖâgWFÕöÖVF—VÓÖ–çFW&æÂgWFÕö6×–vã×&ö¦V·Fw&ç6¶æ–ærÖ–æf÷&ÖF–öârÀ¢ÒÀ§Ò26öç7B6F—6f–W2&V6÷&CÄF–v—FÅ&öGV7D¶W’ÂF–v—FÅ&öGV7DöffW#ã° ¦W‡÷'B6öç7B—4F–v—FÅ&öGV7D÷&FW&&ÆRÒ‡&öGV7C¢F–v—FÅ&öGV7DöffW"’Óà¢&öGV7BçV&Æ–6F–öå7FGW2ÓÓÒwW&6†6&ÆRp¢bb&öGV7Bæ6öçFVçE&VG¢bb&öGV7BæWFöÖF–4FVÆ—fW'¢bb&ööÆVâ‡&öGV7Bç–ÖVçDÆ–æ²“°