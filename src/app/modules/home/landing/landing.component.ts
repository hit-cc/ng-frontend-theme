import { Component, OnInit } from "@angular/core";
import { SpinnerVisibilityService } from "ng-http-loader";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private spinner: SpinnerVisibilityService) {
   
  }

  ngOnInit() {}

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
  
}
