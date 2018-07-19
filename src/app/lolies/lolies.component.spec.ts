import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoliesComponent } from "./lolies.component";

describe("LoliesComponent", () => {
  let component: LoliesComponent;
  let fixture: ComponentFixture<LoliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoliesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
