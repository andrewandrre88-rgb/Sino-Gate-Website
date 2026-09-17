const fs = require('fs');

let types = fs.readFileSync('src/types.ts', 'utf8');

// Update InspectionType
types = types.replace(/export interface InspectionType {/, `export interface InspectionType {
  nameAr?: string;
  stageAr?: string;
  descriptionAr?: string;
  deliverableAr?: string;
  turnaroundAr?: string;
  idealForAr?: string;`);

// Update CorporateComparisonItem
types = types.replace(/export interface CorporateComparisonItem {/, `export interface CorporateComparisonItem {
  featureAr?: string;
  wfoeChinaAr?: string;
  hkCompanyAr?: string;`);

// Update OfficeLocation
types = types.replace(/export interface OfficeLocation {/, `export interface OfficeLocation {
  cityAr?: string;
  regionAr?: string;
  roleAr?: string;
  teamLeadAr?: string;
  specialtyAr?: string;`);

fs.writeFileSync('src/types.ts', types);
