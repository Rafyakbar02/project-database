export const formattterIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

export const formattterCompact = new Intl.NumberFormat("id-ID", {
  notation: "compact",
  maximumFractionDigits: 2,
});

export const product = [
  {
    value: "product-1",
    label: "KPBU",
    checked: false,
  },
  {
    value: "product-2",
    label: "Non-KPBU",
    checked: false,
  },
  {
    value: "product-3",
    label: "PDF",
    checked: false,
  },
];

export const sector = [
  {
    value: "sector-1",
    label: "Road",
    checked: false,
  },
  {
    value: "sector-2",
    label: "Tourism",
    checked: false,
  },
  {
    value: "sector-3",
    label: "Telecommunication",
    checked: false,
  },
  {
    value: "sector-4",
    label: "Electricity",
    checked: false,
  },
  {
    value: "sector-5",
    label: "Transportation",
    checked: false,
  },
];

export const phase = [
  {
    value: "phase-1",
    label: "Planning",
    checked: false,
  },
  {
    value: "phase-2",
    label: "Signing",
    checked: false,
  },
  {
    value: "phase-3",
    label: "Finished",
    checked: false,
  },
];

export const priority = [
  {
    value: "priority-1",
    label: "Shortlist",
    checked: false,
  },
  {
    value: "priority-2",
    label: "Longlist",
    checked: false,
  },
];

export const pjpk = [
  {
    value: "pjpk-1",
    label: "Minister For Public Works and Human Settlements",
    checked: false,
  },
  {
    value: "pjpk-2",
    label: "Madiun Regency Government",
    checked: false,
  },
  {
    value: "pjpk-3",
    label: "Ministry of Telecommunication and Informatics",
    checked: false,
  },
  {
    value: "pjpk-4",
    label: "PT Perusahaan Listrik Negara (PLN)",
    checked: false,
  },
];

export const projects = [
  {
    id: "patimban-access-toll-road",
    title: "Patimban Access Toll Road",
    sector: "Road",
    division: "Minister For Public Works and Human Settlements",
    product: "Non-KPBU",
    totalInvestment: 139685379136,
    phase: "Signing",
    priority: "Shortlist",
    signingDate: "24 Jan 2023",
    totalExposure: 2450000000000,
    effectiveDate: "1 Feb 2023",
  },
  {
    id: "madiun-street-lighting-equipment-project",
    title: "Madiun Street Lighting Equipment Project",
    sector: "Energy Conservation",
    division: "Madiun Regency Government",
    product: "KPBU",
    totalInvestment: 6359024000000,
    phase: "Signing",
    priority: "Longlist",
    signingDate: "20 Sep 2022",
    totalExposure: 56230000000000,
    effectiveDate: "1 Oct 2022",
  },
  {
    id: "palapa-ring-project-western-package",
    title: "Palapa Ring Project - Western Package",
    sector: "Telecommunication",
    division: "Ministry of Telecommunication and Informatics",
    product: "KPBU",
    totalInvestment: 11889299512102,
    phase: "Finished",
    priority: "",
    signingDate: "29 Feb 2016",
    totalExposure: 61200000000000,
    effectiveDate: "10 Nov 2016",
  },
  {
    id: "central-java-power-plant-project",
    title: "Central Java Power Plant Project",
    sector: "Electricity",
    division: "PT Perusahaan Listrik Negara (PLN)",
    product: "PDF",
    totalInvestment: 16233409000000,
    phase: "Finished",
    priority: "",
    signingDate: "06 Oct 2011",
    totalExposure: 6000000000000,
    effectiveDate: "03 Jun 2016",
  },
  {
    id: "callender-hamilton-bridge",
    title: "Callender Hamilton (CH) Bridge",
    sector: "Road",
    division: "Minister For Public Works and Human Settlements",
    product: "PDF",
    totalInvestment: 14690641000000,
    phase: "Finished",
    priority: "",
    signingDate: "06 Dec 2021",
    totalExposure: 22800000000000,
    effectiveDate: "-",
  },
  {
    id: "ppp-project-for-jatiluhur-water-supper-system-1",
    title: "PPP Project for Jatiluhur Water Supply System 1",
    sector: "Water",
    division: "Minister For Public Works and Human Settlements",
    product: "KPBU",
    totalInvestment: 8408605000000,
    phase: "Finished",
    priority: "",
    signingDate: "19 Feb 2021",
    totalExposure: 14300000000000,
    effectiveDate: "-",
  },
];

export const icons = {
  chevronDown: {
    name: "Chevron Down",
    viewBox: "0 0 512 512",
    path: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z",
  },
  chevronUp: {
    name: "Chevron Up",
    viewBox: "0 0 512 512",
    path: "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z",
  },
  close: {
    name: "Close Symbol",
    viewBox: "0 0 384 512",
    path: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
  },
};
