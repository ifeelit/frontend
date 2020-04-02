export enum PersonnelArea {
  CHEMISTRY = 'CHEMISTRY',
  BIOCHEMISTRY = 'BIOCHEMISTRY',
  GENETICS = 'GENETICS',
  CELL_BIOLOGY = 'CELL_BIOLOGY',
  BIOLOGY = 'BIOLOGY',
  VIROLOGY = 'VIROLOGY',
  MICRO_BIOLOGY = 'MICRO_BIOLOGY',
  MOLECULAR_BIOLOGY = 'MOLECULAR_BIOLOGY',
  PHARMACOLOGY = 'PHARMACOLOGY',
  MEDICINE = 'MEDICINE',
  OTHERS = 'OTHERS',
}


export function personnelAreaTo(locale: string) {
  if (locale === 'de') {
    return {
      CHEMISTRY: 'Chemie',
      BIOCHEMISTRY: 'Biochemie',
      GENETICS: 'Genetik',
      CELL_BIOLOGY: 'Zellbiologie',
      BIOLOGY: 'Biologie',
      VIROLOGY: 'Virologie',
      MICRO_BIOLOGY: 'Mikrobiologie',
      MOLECULAR_BIOLOGY: 'Molekularbiologie',
      PHARMACOLOGY: 'Pharmakologie',
      MEDICINE: 'Medizin',
      OTHERS: 'Sonstiges',
    };
  } else {
    return {
      CHEMISTRY: 'Chemistry',
      BIOCHEMISTRY: 'Biochemistry',
      GENETICS: 'Genetics',
      CELL_BIOLOGY: 'Cell biology',
      BIOLOGY: 'Biology',
      VIROLOGY: 'Virology',
      MICRO_BIOLOGY: 'Microbiology',
      MOLECULAR_BIOLOGY: 'Molecular biology',
      PHARMACOLOGY: 'Pharmacology',
      MEDICINE: 'Medicine',
      OTHERS: 'Others',
    };
  }
}
