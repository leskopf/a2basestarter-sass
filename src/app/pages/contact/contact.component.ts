import { Component } from "@angular/core";
import { ContactformComponent} from "../../components/contactform/contactform.component";

@Component ({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent{
  private projectName:string;
  constructor() {
    this.projectName = "Sysel.org"
  }

}