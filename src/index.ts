import data from "./data";
import { Istatuscode } from "./data";
const { statuscodes } = data;

const dataAsAnObject: { [key: string]: Istatuscode } = statuscodes.reduce(
  (accumulator, currentItem) => {
    return {
      ...accumulator,
      [`code${currentItem.code}`]: currentItem,
    };
  },
  {}
);

const getCode = (statusCode: number): Istatuscode =>
  statuscodes.find((item) => item.code === statusCode) as Istatuscode;

export default dataAsAnObject;
export { getCode };
