export enum PersonnelQualification {
  TA = 'TA',
  LAB_ASSISTANT = 'LAB_ASSISTANT',
  POSTDOC = 'POSTDOC',
  PHD_STUDENT = 'PHD_STUDENT',
  MSC_STUDENT = 'MSC_STUDENT',
  BSC_STUDENT = 'BSC_STUDENT',
  SONSTIGES = 'SONSTIGES',
}


export function personnelQualificationTo(locale: string) {
  if (locale === 'de') {
    return {
      TA: 'TA',
      LAB_ASSISTANT: 'Laborassistent',
      POSTDOC: 'Postdoc',
      PHD_STUDENT: 'PhD-Student',
      MSC_STUDENT: 'MSc Student',
      BSC_STUDENT: 'BSc Student',
      SONSTIGES: 'Sonstiges',
    };
  } else {
    return {
      TA: 'TA',
      LAB_ASSISTANT: 'Lab assistant',
      POSTDOC: 'Postdoc',
      PHD_STUDENT: 'PhD Student',
      MSC_STUDENT: 'MSc Student',
      BSC_STUDENT: 'BSc Student',
      SONSTIGES: 'Others',
    };
  }
}
