import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform { // Esempio di custom pipe che accorcia il testo di una string più lunga di 10 caratteri
  transform(value: any, limit: number): any {
    if(value.length > limit) {
      return value.substr(0, limit)+ "..." // Restituisce soltanto i primi 10 caratteri della stringa
    }
    return value
  }
}
