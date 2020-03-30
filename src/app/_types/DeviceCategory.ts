export enum DeviceCategory {
  PCR_THERMOCYCLER = 'PCR_THERMOCYCLER',
  RT_PCR_THERMOCYCLER = 'RT_PCR_THERMOCYCLER',
  ZENTRIFUGE = 'ZENTRIFUGE',
  VORTEXER = 'VORTEXER',
  PIPETTE = 'PIPETTE',
  SONSTIGES = 'SONSTIGES',
}


export function deviceCategoryTo(locale: string) {
  if (locale === 'de') {
    return {
      PCR_THERMOCYCLER: 'PCR Thermocycler',
      RT_PCR_THERMOCYCLER: 'Real-Time PCR Thermocycler',
      ZENTRIFUGE: 'Zentrifuge',
      VORTEXER: 'Vortexer',
      PIPETTE: 'Pipette',
      SONSTIGES: 'Sonstiges',
    };
  } else {
    return {
      PCR_THERMOCYCLER: 'PCR thermal cycler',
      RT_PCR_THERMOCYCLER: 'Real-Time PCR  thermal cycler',
      ZENTRIFUGE: 'Centrifuge',
      VORTEXER: 'Vortex mixing device',
      PIPETTE: 'Pipette',
      SONSTIGES: 'Others',
    };
  }
}
