#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const data_1 = __importDefault(require("./data"));
const argument = process.argv[2];
const stdoutLength = process.stdout.columns || 80;
const { classes, statuscodes } = data_1.default;
if (!argument) {
    printAll();
}
else {
    const results = statuscodes.filter((item) => item.code.toString().startsWith(argument));
    results.length > 1 ? printGroup(results) : printSingle(results);
}
function printBorder() {
    console.log(chalk_1.default.yellow.bold("ᐧ".repeat(stdoutLength)));
}
function printItem(item, showDescription = false, showDescriptionMargin = false, titleBold = false) {
    const { code, shortDescription, description } = item;
    if (titleBold) {
        console.log(chalk_1.default.bold(`${code.toString().padEnd(3, "x")} — ${shortDescription}`));
    }
    else {
        console.log(`${chalk_1.default.bold(code.toString().padEnd(3, "x"))} — ${shortDescription}`);
    }
    if (showDescription) {
        console.log("");
        console.log(description);
    }
    if (showDescriptionMargin) {
        console.log("");
    }
}
function printAll() {
    const classesLength = classes.length;
    classes.forEach((classesItem, index) => {
        printBorder();
        printItem(classesItem, true, true, true);
        const codes = statuscodes.filter((item) => item.code.toString().startsWith(classesItem.code.toString()));
        codes.forEach(item => printItem(item));
        if (index === classesLength - 1) {
            printBorder();
        }
    });
}
function printGroup(content) {
    printBorder();
    content.forEach(item => printItem(item));
    printBorder();
}
function printSingle(content) {
    printBorder();
    if (!content.length) {
        console.log("No results :-(");
    }
    content.forEach(item => printItem(item, true, false, true));
    printBorder();
}
