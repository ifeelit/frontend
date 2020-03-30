import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  logos = [
    {
      image: 'tuk.png',
      name: 'TU Kaiserslautern'
    },
    {
      image: 'wirvsvirus.png',
      name: 'WirVsVirus Hackathon',
    }
  ]

  constructor(
  ) { }


  ngOnInit(): void {
  }

}
