export enum SessoEnum {
  UOMO = 'Uomo',
  DONNA = 'Donna',
  ALTRO = 'Altro'
}

export function SessoEnumBuilder(sessoString: string): SessoEnum {
  switch(sessoString) {
    case 'Uomo':
      return SessoEnum.UOMO
    case 'Donna':
      return SessoEnum.DONNA
    case 'Altro':
      return SessoEnum.ALTRO
    default:
      return SessoEnum.ALTRO
  }
}
