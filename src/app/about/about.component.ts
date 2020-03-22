import { Component, OnInit } from '@angular/core';


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
      short: '24 Jahre alt, Doktorandin (Chemie) aus München',
      long: 'Wir haben schon vor einiger Zeit in meiner Arbeitsgruppe diskutiert, wie wir mit unserer Expertise und derzeit ungenutzten Materialien (Handschuhe, Desinfektionsmittel oder Laborgeräte) in der aktuellen Lage helfen könnten. Da kam der WirvsVirus-Hackathon gerade recht, um den Worten auch Taten folgen zu lassen!',
    },
    {
      image: 'eli.jpg',
      name: 'Elisabeth von der Esch',
      short: '27 Jahre alt, Doktorandin (Chemie) aus München',
      long: 'Zusammen mit einer befreundeten TA, die gerade für die Messung von Corona-Proben geschult wird, hatte ich schon überlegt, ob und wie Uni-Ressourcen dem Labor bei der Ausweitung ihrer Corona-Testkapazitäten helfen könnten.  Daher wollte ich gerne zum WirvsVirus-Hackathon beitragen.',
    },
    {
      image: 'lukas.jpg',
      name: 'Lukas Vordemann',
      short: '23 Jahre alt, Student (Informatik) aus München',
      long: 'Eigentlich wollten Max, Chaoran und ich Kleinbauern in Kenia helfen ihre Marktmacht auszubauen um so bessere Erträge erzielen zu können.  ...'
    },
    {
      image: 'chaoran.jpg',
      name: 'Chaoran',
      short: '25 Jahre alt, Student (Informatik) aus Garching b. München',
      long: '... Nachdem das Coronavirus jedoch unsere gebuchte Reise verhinderte, kam der Hackathon uns sehr gelegen, um die freigewordene Zeit sinnvoll und kreativ zu nutzen. ...',
    },
    {
      image: 'max.jpg',
      name: 'Maximilian Wiesholler',
      short: '26 Jahre alt, Student (Informatik) aus München',
      long: '... Was kann man da besseres tun, als mit viel Kaffee und Fertigpizza das Wochenende für eine tolle Idee durchzucoden.'
    },
    {
      image: 'markus.jpg',
      name: 'Markus Schneider',
      short: '34 Jahre alt, Postdoc',
      long: 'Ich bin absolut kein Hacker. Aber als Wissenschaftler weiß ich, welche Geräte und Materialien im Labor gebraucht werden und was nötig ist, um einen Test durchzuführen und auszuwerten. Ich versuche daher PIRAT auf diesem Weg mit meinem Know-how zu unterstützen.'
    },
    {
      image: 'annette.jpg',
      name: 'Annette Bieniusa',
      short: 'Akademische Rätin (Informatik) aus Kaiserslautern',
      long: 'Ich finde Hackathons faszinierend - WirVsVirus bringt außerdem noch Aktualität und Impact. Die Idee von PIRAT fand ich super: Wir bringen Forschung und Praxis auf neue Art zusammen um Ressourcen im Kampf gegen Corona zu schaffen!'
    }
  ];


  constructor() {
  }


  ngOnInit(): void {
  }

}
