export interface Iclass {
    code: number;
    shortDescription: string;
    description: string;
}
export interface Istatuscode {
    code: number;
    shortDescription: string;
    description: string;
}
export interface Idata {
    classes: Iclass[];
    statuscodes: Istatuscode[];
}
declare const data: Idata;
export default data;
