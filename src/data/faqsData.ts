export interface FAQItem {
  question: string;
  answer: string;
  category: 'General & Engagement' | 'Marine & Dredging' | 'Equipment Leasing' | 'QHSE & Compliance';
}

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'General & Engagement',
    question: 'Where are KFT Uduboh’s primary operational bases located?',
    answer: 'We operate dual strategic facilities in Delta State, Nigeria: our corporate headquarters and heavy engineering yard is located at No. 10 KFT Uduboh Crescent, off Jakpa Road, Effurun, while our marine terminal and riverine field base is positioned at No. 2 Bini-ebimiyekumoh Close, Kurutie Town, Gbaramatu Kingdom, Warri South West L.G.A.'
  },
  {
    category: 'General & Engagement',
    question: 'What is the mobilization lead-time for projects across the Niger Delta?',
    answer: 'For standard civil, earthmoving, and equipment leasing assignments in Delta, Edo, Rivers, and Bayelsa States, equipment mobilization typically occurs within 24 to 48 hours following contract execution. Complex marine operations requiring tugboat fleets and spud barges are mobilized within 3 to 5 business days subject to waterway transit clearance.'
  },
  {
    category: 'Marine & Dredging',
    question: 'Can your marine vessels navigate shallow riverine channels and creeks?',
    answer: 'Yes. Our marine fleet includes shallow-draft twin-screw tugboats and amphibious swamp buggies specifically engineered to operate in mangrove creeks, tidal mudflats, and shallow estuarine fairways with drafts as shallow as 1.2 to 2.4 meters.'
  },
  {
    category: 'Marine & Dredging',
    question: 'How do you handle environmental compliance during dredging operations?',
    answer: 'All dredging and land reclamation campaigns strictly follow Environmental Impact Assessment (EIA) guidelines and Federal Ministry of Environment standards. We deploy turbidity silt curtains to prevent sediment plumes from affecting local aquatic ecosystems and work with community liaison officers to ensure riverbed protection.'
  },
  {
    category: 'Equipment Leasing',
    question: 'What lease structures do you offer for heavy machinery and marine vessels?',
    answer: 'We provide both "Wet Lease" (machine supplied with certified operator, insurance, and routine mechanical maintenance) and "Dry Lease" (bareboat/bare-equipment hire) arrangements. Contracts can be structured on daily, monthly, or project milestone milestones.'
  },
  {
    category: 'Equipment Leasing',
    question: 'What happens in the event of an on-site equipment breakdown?',
    answer: 'KFT Uduboh maintains mobile field service technician teams stationed in Effurun and Gbaramatu equipped with genuine OEM replacement parts. If a breakdown cannot be resolved within our contractual SLA (typically 12–24 hours), we provide an equivalent backup unit from our fleet to prevent site delays.'
  },
  {
    category: 'QHSE & Compliance',
    question: 'Are your machinery operators and vessel crew certified?',
    answer: 'Yes. Every heavy equipment operator holds verified certifications from recognized trade bodies, while marine vessel captains and crew carry valid NIMASA certifications and STCW credentials. All personnel undergo mandatory pre-deployment medical fitness tests and site safety inductions.'
  },
  {
    category: 'QHSE & Compliance',
    question: 'How does KFT Uduboh manage host community relationships in riverine areas?',
    answer: 'We have maintained a 100% record of peaceful host community relations throughout our operational history. We employ a proactive Community Affairs, Safety, Health, Environment and Security (CASHES) framework, giving hiring preference to qualified local youths and establishing open dialogue with traditional leadership councils.'
  }
];
