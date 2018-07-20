import { Component, OnInit } from "@angular/core";
import { Loli } from "../loli";
import { LOLIES } from "../mock-lolies";

@Component({
  selector: "app-lolies",
  templateUrl: "./lolies.component.html",
  styleUrls: ["./lolies.component.css"]
})
export class LoliesComponent implements OnInit {
  lolies = LOLIES;
  selectedLoli: Loli;
  onSelect(loli: Loli): void {
    this.selectedLoli = loli;
  }
  constructor() {}

  ngOnInit() {}
}
