import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../locale.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profiles = [
    {
      image: 'julia.jpg',
      name: 'Julia Klüpfel',
      short: {
        de: 'Doktorandin (Chemie) aus München',
        en: 'PhD student (chemistry) from Munich',
      }[this.localeService.locale],
      long: {
        de: 'Wir haben schon vor einiger Zeit in meiner Arbeitsgruppe diskutiert, wie wir mit unserer Expertise und ' +
          'derzeit ungenutzten Materialien (Handschuhe, Desinfektionsmittel oder Laborgeräte) in der aktuellen Lage ' +
          'helfen könnten. Da kam der WirvsVirus-Hackathon gerade recht, um den Worten auch Taten folgen zu lassen!',
        en: 'Some time ago, we discussed in my research group how we could help in the current situation with our ' +
          'expertise and unused material like gloves, disinfectants or lab devices. So, the WirvsVirus hackathon ' +
          'came just in time to follow words with deeds!',
      }[this.localeService.locale]
    },
    {
      image: 'eli.jpg',
      name: 'Elisabeth von der Esch',
      short: {
        de: 'Doktorandin (Chemie) aus München',
        en: 'Doktorandin (Chemie) aus München',
      }[this.localeService.locale],
      long: {
        de: 'Zusammen mit einer befreundeten TA, die gerade für die Messung von Corona-Proben geschult wird, hatte ' +
          'ich schon überlegt, ob und wie Uni-Ressourcen dem Labor bei der Ausweitung ihrer Corona-Testkapazitäten ' +
          'helfen könnten.  Daher wollte ich gerne zum WirvsVirus-Hackathon beitragen.',
        en: 'Zusammen mit einer befreundeten TA, die gerade für die Messung von Corona-Proben geschult wird, hatte ' +
          'ich schon überlegt, ob und wie Uni-Ressourcen dem Labor bei der Ausweitung ihrer Corona-Testkapazitäten ' +
          'helfen könnten.  Daher wollte ich gerne zum WirvsVirus-Hackathon beitragen.',
      }[this.localeService.locale],
    },
    {
      image: 'annette.jpg',
      name: 'Annette Bieniusa',
      short: {
        de: 'Akademische Rätin (Informatik) aus Kaiserslautern',
        en: 'Akademische Rätin (Informatik) aus Kaiserslautern',
      }[this.localeService.locale],
      long: {
        de: 'Ich finde Hackathons faszinierend - WirVsVirus bringt außerdem noch Aktualität und Impact. Die Idee von' +
          ' PIRAT fand ich super: Wir bringen Forschung und Praxis auf neue Art zusammen um Ressourcen im Kampf gegen' +
          ' Corona zu schaffen!',
        en: 'Ich finde Hackathons faszinierend - WirVsVirus bringt außerdem noch Aktualität und Impact. Die Idee von' +
          ' PIRAT fand ich super: Wir bringen Forschung und Praxis auf neue Art zusammen um Ressourcen im Kampf gegen' +
          ' Corona zu schaffen!',
      }[this.localeService.locale],
    },
    {
      image: 'lukas.jpg',
      name: 'Lukas Vordemann',
      short: {
        de: 'Student (Informatik) aus München',
        en: 'Student (Informatik) aus München',
      }[this.localeService.locale],
      long: {
        de: 'Eigentlich wollten Max, Chaoran und ich Kleinbauern in Kenia helfen ihre Marktmacht auszubauen um so' +
          ' bessere Erträge erzielen zu können.  ...',
        en: 'Eigentlich wollten Max, Chaoran und ich Kleinbauern in Kenia helfen ihre Marktmacht auszubauen um so' +
          ' bessere Erträge erzielen zu können.  ...',
      }[this.localeService.locale],
    },
    {
      image: 'chaoran.jpg',
      name: 'Chaoran Chen',
      short: {
        de: 'Student (Informatik) aus Garching b. München',
        en: 'Student (Informatik) aus Garching b. München',
      }[this.localeService.locale],
      long: {
        de: '... Nachdem das Coronavirus jedoch unsere gebuchte Reise verhinderte, kam der Hackathon uns sehr' +
          ' gelegen, um die freigewordene Zeit sinnvoll und kreativ zu nutzen. ...',
        en: '... Nachdem das Coronavirus jedoch unsere gebuchte Reise verhinderte, kam der Hackathon uns sehr' +
          ' gelegen, um die freigewordene Zeit sinnvoll und kreativ zu nutzen. ...',
      }[this.localeService.locale]
    },
    {
      image: 'max.jpg',
      name: 'Maximilian Wiesholler',
      short: {
        de: 'Student (Informatik) aus München',
        en: 'Student (Informatik) aus München',
      }[this.localeService.locale],
      long: {
        de: '... Was kann man da besseres tun, als mit einer Kaffee Überdosis das Wochenende für eine tolle' +
          ' Idee durchzucoden.',
        en: '... Was kann man da besseres tun, als mit einer Kaffee Überdosis das Wochenende für eine tolle' +
          ' Idee durchzucoden.',
      }[this.localeService.locale],
    },
    {
      image: 'markus.jpg',
      name: 'Markus Schneider',
      short: {
        de: 'Postdoc',
        en: 'Postdoc',
      }[this.localeService.locale],
      long: {
        de: 'Ich bin absolut kein Hacker. Aber als Wissenschaftler weiß ich, welche Geräte und Materialien' +
          ' im Labor gebraucht werden und was nötig ist, um einen Test durchzuführen und auszuwerten. Ich versuche' +
          ' daher PIRAT auf diesem Weg mit meinem Know-how zu unterstützen.',
        en: 'Ich bin absolut kein Hacker. Aber als Wissenschaftler weiß ich, welche Geräte und Materialien' +
          ' im Labor gebraucht werden und was nötig ist, um einen Test durchzuführen und auszuwerten. Ich versuche' +
          ' daher PIRAT auf diesem Weg mit meinem Know-how zu unterstützen.',
      }[this.localeService.locale],
    },
    {
      image: 'klemens.jpg',
      name: 'Klemens Thaler',
      short: {
        de: 'Prüfingenieur bei TÜV SÜD Product Service, aktive Medizinprodukte',
        en: 'Test engineer at TÜV SÜD Product Service, active medical products',
      }[this.localeService.locale],
      long: {
        de: 'In dieser außergewöhnlichen Situation ist jede Hilfe notwendig. Ich möchte eine helfende Hand anbieten,' +
          ' wo auch immer eine gebraucht wird. Hackathon ist eine gute Gelegenheit dafür.',
        en: 'In this extraordinary situation every help is needed. I would like to offer my knowledge whereever it ' +
          'is necessary. PIRAT is a good motivation to bring people together.',
      }[this.localeService.locale],
    },
    {
      image: 'flo.jpg',
      name: 'Florian Pawlik',
      short: {
        de: 'Software Consultant aus München',
        en: 'Software Consultant aus München',
      }[this.localeService.locale],
      long: {
        de: 'Ich bin hier während des Hackatons in das Team mit reingerutscht als Ratgeber, Fehlerfinder und' +
          ' Wissensquelle bei verschiedenen Fragestellungen. Und was gäbe es aktuell Besseres als seine Zeit für den' +
          ' Kampf gegen COVID einzusetzen?',
        en: 'Ich bin hier während des Hackatons in das Team mit reingerutscht als Ratgeber, Fehlerfinder und' +
          ' Wissensquelle bei verschiedenen Fragestellungen. Und was gäbe es aktuell Besseres als seine Zeit für den' +
          ' Kampf gegen COVID einzusetzen?',
      }[this.localeService.locale]
    }
  ];


  constructor(
    private localeService: LocaleService,
  ) {
  }


  ngOnInit(): void {
  }

}
