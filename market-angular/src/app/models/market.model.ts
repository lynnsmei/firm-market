export interface FirmsResponse {
    firms: Firm[];
}

export interface Firm {
    id: number,
    email: string,
    name: string
}