import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredentials(email: string, password: string): void {
    // Lógica para enviar las credenciales al servidor
    console.log(`Enviando credenciales: ${email}, ${password}`);
  }
}
