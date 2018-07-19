import { Component, OnInit } from "@angular/core";
import { Loli } from "../loli";

@Component({
  selector: "app-lolies",
  templateUrl: "./lolies.component.html",
  styleUrls: ["./lolies.component.css"]
})
export class LoliesComponent implements OnInit {
  loli: Loli = {
    id: 1,
    name: "Hiiragi Kagami"
  };
  constructor() {}

  ngOnInit() {}
}
