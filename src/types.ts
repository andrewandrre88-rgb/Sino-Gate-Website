export type ServiceTab = 'logistics' | 'sourcing' | 'inspection' | 'china_company' | 'hk_company';

export interface Port {
  id: string;
  name: string;
  code: string;
  city: string;
  country: string;
  type: 'origin' | 'destination';
  coordinates: { x: number; y: number }; // Percentage for SVG map
}

export interface RouteOption {
  id: string;
  originId: string;
  destId: string;
  mode: 'sea_fcl' | 'sea_lcl' | 'air' | 'rail';
  seaTransitDays: number;
  airTransitDays: number;
  railTransitDays?: number;
  frequency: string;
  co2Savings?: string;
  popularFor: string;
}

export interface InspectionType {
  nameAr?: string;
  stageAr?: string;
  descriptionAr?: string;
  deliverableAr?: string;
  turnaroundAr?: string;
  idealForAr?: string;
  id: string;
  name: string;
  shortCode: string;
  stage: string;
  description: string;
  deliverable: string;
  turnaround: string;
  idealFor: string;
}

export interface AQLThreshold {
  lotRange: string;
  minLot: number;
  maxLot: number;
  sampleSize: number;
  criticalAccept: number;
  majorAccept: number;
  minorAccept: number;
}

export interface CorporateComparisonItem {
  featureAr?: string;
  wfoeChinaAr?: string;
  hkCompanyAr?: string;
  feature: string;
  wfoeChina: string;
  hkCompany: string;
  recommendation: string;
}

export interface OfficeLocation {
  cityAr?: string;
  regionAr?: string;
  roleAr?: string;
  teamLeadAr?: string;
  specialtyAr?: string;
  city: string;
  region: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  operatingHours: string;
  teamLead: string;
  specialty: string;
}

export interface PortStatus {
  portCode: string;
  portName: string;
  city: string;
  status: 'Normal' | 'Mild Congestion' | 'High Flow';
  tempC: number;
  weather: string;
  avgBerthWaitHours: number;
  customsDwellHours: number;
  weeklySailings: number;
}
