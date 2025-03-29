import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  whatsappNumber: string = '+306974970267'; 
  googlePlacesUrl: string = 'https://www.google.com/search?q=villa+inva+corfu%2C+%CE%91%CE%BE%CE%B9%CE%BF%CE%BB%CE%BF%CE%B3%CE%AE%CF%83%CE%B5%CE%B9%CF%82&sca_esv=1cf6057d4b1ab75c&hl=el-GR&biw=1920&bih=919&tbm=lcl&sxsrf=AHTn8zoX-M7Giulmy_Jf3sPI6uMWQn7GSg%3A1743284387905&ei=o2joZ931Nomrxc8P_5f9-AY&ved=0ahUKEwid07u1oLCMAxWJVfEDHf9LH28Q4dUDCAo&uact=5&oq=villa+inva+corfu%2C+%CE%91%CE%BE%CE%B9%CE%BF%CE%BB%CE%BF%CE%B3%CE%AE%CF%83%CE%B5%CE%B9%CF%82&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIip2aWxsYSBpbnZhIGNvcmZ1LCDOkc6-zrnOv867zr_Os86uz4POtc65z4IyCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wUyCBAAGIAEGKIEMggQABiABBiiBEijHlDEBlimGXAAeACQAQCYAaIBoAGBB6oBAzAuN7gBA8gBAPgBAZgCB6ACiweYAwCIBgGSBwMwLjegB_EZ&sclient=gws-wiz-local#rlfi=hd:;si:175242990974289598,l,Cip2aWxsYSBpbnZhIGNvcmZ1LCDOkc6-zrnOv867zr_Os86uz4POtc65z4JIr-62srKygIAIWjUQABABEAMYABgBIil2aWxsYSBpbnZhIGNvcmZ1IM6xzr7Ouc6_zrvOv86zzq7Pg861zrnPg5IBDGhvbGlkYXlfaG9tZQ;mv:[[39.81577430000001,20.1352215],[39.3539761,19.7021437]]'; // Link to Google Places

  connectWhatsApp(): void {
    const whatsappLink = `https://wa.me/${this.whatsappNumber}?text=Hello%2Chow+can+we+help+you+with+your+booking+today%3F`;
    window.open(whatsappLink, '_blank');
  }

  openGooglePlaces(): void {
    window.open(this.googlePlacesUrl, '_blank');
  }
}
