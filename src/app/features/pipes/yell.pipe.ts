import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yell'
})
export class YellPipe implements PipeTransform {

    // Pipe para convertir una palabra a mayúsculas + !!!!
  transform(value: string): string {
    return value.toUpperCase() + '!!!!!';
  }
}
