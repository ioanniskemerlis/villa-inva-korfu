import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavbarComponent,
    CarouselComponent,
    WhatsappButtonComponent,
    LocationComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'villa-corfu';
}
