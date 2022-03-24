import { Registration } from "./Registartion";

export interface ResponseModel {
    statusCode: number;
    response: any;
    data: Registration | Registration[] | null | undefined
}