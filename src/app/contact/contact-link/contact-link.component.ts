import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'contact-link',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <a
      [href]="contact.url"
      target="_blank"
      rel="noopener noreferrer"
      class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-white"
    >
      <img [src]="contact.svg" [alt]="contact.alt" />
    </a>
  `,
})
export class ContactLinkComponent {
  @Input() contact!: Contact;
}
