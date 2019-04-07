"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("./data"));
const { statuscodes } = data_1.default;
const dataAsAnObject = statuscodes.reduce((accumulator, currentItem) => {
    return Object.assign({}, accumulator, { [`code${currentItem.code}`]: currentItem });
}, {});
const getCode = (statusCode) => statuscodes.find(item => item.code === statusCode);
exports.getCode = getCode;
exports.default = dataAsAnObject;
