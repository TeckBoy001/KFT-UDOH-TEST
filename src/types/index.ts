export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-detail' 
  | 'projects' 
  | 'fleet' 
  | 'qhse' 
  | 'contact' 
  | 'privacy';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  capabilities: string[];
  problemsSolved: string[];
  keyOutcomes: string[];
  equipmentUtilized: string[];
  imageUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  clientType: string;
  challenge: string;
  approach: string;
  outcome: string;
  imageUrl: string;
  year?: string;
  stats?: { label: string; value: string };
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Heavy Earthmoving' | 'Marine Vessels' | 'Dredging Equipment' | 'Lifting & Haulage';
  specs: { [key: string]: string };
  capacity: string;
  applications: string[];
  availableForHire: boolean;
  imageUrl: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceCategory: string;
  projectLocation: string;
  message: string;
}
