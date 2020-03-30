export enum ConsumableCategory {
  MASKE = 'MASKE',
  SCHUTZKLEIDUNG = 'SCHUTZKLEIDUNG',
  SCHUTZBRILLE = 'SCHUTZBRILLE',
  HANDSCHUHE = 'HANDSCHUHE',
  DESINFEKTIONSMITTEL = 'DESINFEKTIONSMITTEL',
  REAKTIONSGEFAESSE = 'REAKTIONSGEFAESSE',
  READOUTPLATES = 'READOUTPLATES',
  SONSTIGES = 'SONSTIGES',
}


export function consumableCategoryTo(locale: string) {
  if (locale === 'de') {
    return {
      MASKE: 'Maske',
      SCHUTZKLEIDUNG: 'Schutzkleidung',
      SCHUTZBRILLE: 'Schutzbrille',
      HANDSCHUHE: 'Handschuhe',
      DESINFEKTIONSMITTEL: 'Desinfektionsmittel',
      REAKTIONSGEFAESSE: 'Reaktionsgefäße',
      READOUTPLATES: 'Readoutplates',
      SONSTIGES: 'Sonstiges',
    };
  } else {
    return {
      MASKE: 'Face masks',
      SCHUTZKLEIDUNG: 'Protective suits',
      SCHUTZBRILLE: 'Safety goggles',
      HANDSCHUHE: 'Gloves',
      DESINFEKTIONSMITTEL: 'Disinfectant',
      REAKTIONSGEFAESSE: 'Reaction tubes',
      READOUTPLATES: 'Readoutplates',
      SONSTIGES: 'Others',
    };
  }
}
