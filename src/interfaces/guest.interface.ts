export interface IGuestRequest {
    name: string;
    phone_number: string;
    nationality: string;
    emergency_contact: string;
    cpf: string;
}

export interface IGuestUpdate {
    name?: string;
    phone_number?: string;
    nationality?: string;
    emergency_contact?: string;
    cpf?: string;
}