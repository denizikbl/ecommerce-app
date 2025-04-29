import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CapitalizeNamePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value.name === 'string') {
      value.name = value.name
        .trim()
        .split(' ')
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
    return value;
  }
}
