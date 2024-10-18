import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactLinkComponent } from './contact-link/contact-link.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactLinkComponent
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts: Contact[] = [
    {svg: 'assets/github.svg', url : 'https://github.com/Flipedds', alt: 'Github logo'},
    {svg: 'assets/linkedin.svg', url : 'https://www.linkedin.com/in/flipedds/', alt: 'Linkedin logo'},
    {svg: 'assets/gmail.svg', url : 'mailto:flipedds@outlook.com', alt: 'Gmail logo'},
    {svg: 'assets/instagram.svg', url : 'https://www.instagram.com/flipedds/', alt: 'Instagram logo'},
  ]
 }
