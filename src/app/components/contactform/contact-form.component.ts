import { FormComponent } from "./form.component";

let myHero =  new FormComponent(42, 'SkyDog',
  'Fetch any object at any distance',
  'Leslie Rollover');
console.log('Contact form send this infos: ' + myHero.id + myHero.name + myHero.email + myHero.message ); // "My hero is called SkyDog"