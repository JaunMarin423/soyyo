export type Integer = integer | number;

export interface Entity {
    entityId: Integer,
    name: string, 
    identificationNumber: string,
    expirationDate: string, 
    contactName: string,
    contactEmail: string,
    logo: string
};
