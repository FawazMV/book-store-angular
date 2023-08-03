import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform (value: string) {
    if (!value) return null
    if (value.length < 45) return value
    // value = value.substring(0, 45)
    // let index = value.lastIndexOf(' ')
    // let indexComa = value.lastIndexOf(',')
    // if (indexComa !== -1 && indexComa < index) index = indexComa
    return value.substring(0, 45) + ' ...'
  }
}
