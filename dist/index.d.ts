import { Istatuscode } from "./data";
declare const dataAsAnObject: {
    [key: string]: Istatuscode;
};
declare const getCode: (statusCode: number) => Istatuscode;
export default dataAsAnObject;
export { getCode };
