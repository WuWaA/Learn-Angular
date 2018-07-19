import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lolies",
  templateUrl: "./lolies.component.html",
  styleUrls: ["./lolies.component.css"]
})

export class LoliesComponent implements OnInit {
  constructor() {
    loli = "Hiiragi Kagami";
  }

  ngOnInit() {
  }
}
