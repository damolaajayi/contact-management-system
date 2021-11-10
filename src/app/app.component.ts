import { Component } from '@angular/core';
import { DemoService } from './services/demo/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Training is running';

  // dependency injection
  constructor(public demoService: DemoService) {

    //I'm calling the printHello function
    this.demoService.printHello();
  }
}
