import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .subscribe(e => console.log(e));

    // Suchbegriff muss mindestens 3 Zeichen lang sein
    // Suchbegriff erst abschicken, wenn Nutzer Finger still hält
    // Suchbegriff zum Server schicken (bs.search(term))
    // AsyncPipe
    // Ergebnisse anzeigen (ganz simpel!!)
    // Zusatz: Ladeanzeige
  }

}
