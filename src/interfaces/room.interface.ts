export interface IRoomRequest {
    numberRoom: string;
    description: string;
}

export interface IRoomUpdate {
    numberRoom?: string;
    status?: string;
    description?: string;
}