export enum Unit {
  PIECE = 'Stück',
  PACK = 'Packung',
  OTHERS = 'Sonstiges',
}


export function unitTo(locale: string) {
  if (locale === 'de') {
    return {
      Stück: 'Stück',
      Packung: 'Packung',
      Sonstiges: 'Sonstiges',
    };
  } else {
    return {
      Stück: 'Piece',
      Packung: 'Pack',
      Sonstiges: 'Others',
    };
  }
}
