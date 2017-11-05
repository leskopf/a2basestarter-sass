import { Component, Input } from "@angular/core";

import { FormComponent } from "./form.component";

@Component ({
  moduleId: module.id,
  selector: 'contactform',
  templateUrl: './contactform.component.html'
})

export class ContactformComponent {

  powers = ["jedna","dve", "tri"];

  model = new FormComponent(18, 'Dr IQ', "radimsys@gmail.com", 'Message textarea');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newForm() {
    this.model = new FormComponent(42, 'Radim', 'radimsysel@seznam.cz',"Texarea");
  }

  get diagnostic() { return JSON.stringify(this.model); }


}