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

export const pjkp = [
    {
        value: "pjkp-1",
        label: "Minister For Public Works and Human Settlements",
        checked: false,
    },
    {
        value: "pjkp-2",
        label: "Madiun Regency Government",
        checked: false,
    },
    {
        value: "pjkp-3",
        label: "Ministry of Telecommunication and Informatics",
        checked: false,
    },
    {
        value: "pjkp-4",
        label: "PT Perusahaan Listrik Negara (PLN)",
        checked: false,
    },
];

export const projects = [
    {
        id: "project-1",
        title: "Patimban Access Toll Road",
        sector: "Road",
        division: "Minister For Public Works and Human Settlements",
        product: "Non-KPBU",
        totalInvestment: "5,02 Trillion (IDR)",
        phase: "Signing",
        priority: "Shortlist",
        signingDate: "24 Jan 2023",
        totalExposure: "1,10 Trillion (IDR)",
        effectiveDate: "1 Feb 2023",
    },
    {
        id: "project-2",
        title: "Madiun Street Lighting Equipment Project",
        sector: "Energy Conservation",
        division: "Madiun Regency Government",
        product: "KPBU",
        totalInvestment: "100 Billion (IDR)",
        phase: "Signing",
        priority: "Longlist",
        signingDate: "20 Sep 2022",
        totalExposure: "10 Billion (IDR)",
        effectiveDate: "1 Oct 2022",
    },
    {
        id: "project-3",
        title: "Palapa Ring Project - Western Package",
        sector: "Telecommunication",
        division: "Ministry of Telecommunication and Informatics",
        product: "KPBU",
        totalInvestment: "1,2 Trillion (IDR)",
        phase: "Finished",
        priority: "",
        signingDate: "29 Feb 2016",
        totalExposure: "14,9 Trillion (IDR)",
        effectiveDate: "10 Nov 2016",
    },
    {
        id: "project-4",
        title: "Central Java Power Plant Project",
        sector: "Electricity",
        division: "PT Perusahaan Listrik Negara (PLN)",
        product: "PDF",
        totalInvestment: "61,4 Trillion (IDR)",
        phase: "Finished",
        priority: "",
        signingDate: "06 Oct 2011",
        totalExposure: "-",
        effectiveDate: "03 Jun 2016",
    },
    {
        id: "project-5",
        title: "Callender Hamilton (CH) Bridge",
        sector: "Road",
        division: "Minister For Public Works and Human Settlements",
        product: "PDF",
        totalInvestment: "2,4 Trillion (IDR)",
        phase: "Finished",
        priority: "",
        signingDate: "06 Dec 2021",
        totalExposure: "-",
        effectiveDate: "-",
    },
    {
        id: "project-6",
        title: "PPP Project for Jatiluhur Water Supply System 1",
        sector: "Water",
        division: "Minister For Public Works and Human Settlements",
        product: "KPBU",
        totalInvestment: "1,675 Trillion (IDR)",
        phase: "Finished",
        priority: "",
        signingDate: "19 Feb 2021",
        totalExposure: "-",
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
