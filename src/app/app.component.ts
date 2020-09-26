import { Component, VERSION, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  frmSearch: FormGroup;
  filters = [];
  subscribers = [];
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.frmSearch = this.formBuilder.group({
      customerType: [null, Validators.required],
      state: [""],
      district: [""],
      pincode: [""],
    });
  }
  //Clear all filter on subscribers
      clearFilters(){
        this.frmSearch.reset();
        this.subscribers= [];
        this.filters = [];
      }
  showSubscriber(){
this.subscribers = [{name: 'Zakariya Khan', contactNumber: 8855859341, address: '13b/12 mumbai, maharashtra.'},
                    {name: 'Bruice Wayn', contactNumber: 9090909090, address: 'Wayn Enterprises, Gotham.'},
                    {name: 'Tony Stark', contactNumber: 8808080800, address: 'Stark Tower, NewYork.'},
                    ];
  }

  //Generating filter chips
  filterChips() {
    this.filters = [];
    if (
      this.frmSearch.get("state").value != undefined &&
      this.frmSearch.get("state").value != ""
    ) {
      this.filters.push(this.frmSearch.get("state").value);
    }

    if (
      this.frmSearch.get("district").value != undefined &&
      this.frmSearch.get("district").value != ""
    ) {
      this.filters.push(this.frmSearch.get("district").value);
    }
    if (
      this.frmSearch.get("pincode").value != undefined &&
      this.frmSearch.get("pincode").value != ""
    ) {
      this.filters.push(this.frmSearch.get("pincode").value);
    }
  }

  //Remove chips
  dropChips(index: any, value) {
    if (this.frmSearch.get("state").value == value) {
      this.frmSearch.get("state").setValue("");
    }
    if (this.frmSearch.get("pincode").value == value) {
      this.frmSearch.get("pincode").setValue("");
    }
    if (this.frmSearch.get("district").value == value) {
      this.frmSearch.get("district").setValue("");
    }
    this.filters.splice(index, 1);
  }
}
