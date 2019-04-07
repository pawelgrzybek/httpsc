#!/usr/bin/env node

import chalk from "chalk";
import data from "./data";
import { Istatuscode, Iclass } from "./data";

const argument: string = process.argv[2];
const stdoutLength: number = process.stdout.columns || 80;
const { classes, statuscodes } = data;

if (!argument) {
  printAll();
} else {
  const results: Istatuscode[] = statuscodes.filter((item: Istatuscode) =>
    item.code.toString().startsWith(argument)
  );

  results.length > 1 ? printGroup(results) : printSingle(results);
}

function printBorder() {
  console.log(chalk.yellow.bold("ᐧ".repeat(stdoutLength)));
}

function printItem(item: Istatuscode | Iclass, showDescription = false) {
  const { code, shortDescription, description } = item;
  console.log(
    `${chalk.bold(code.toString().padEnd(3, "x"))} — ${shortDescription}`
  );
  if (showDescription) {
    console.log(description);
  }
}

function printAll() {
  const classesLength = classes.length;
  classes.forEach((classesItem: Iclass, index) => {
    printBorder();
    printItem(classesItem);
    const codes: Istatuscode[] = statuscodes.filter((item: Istatuscode) =>
      item.code.toString().startsWith(classesItem.code.toString())
    );
    codes.forEach(item => printItem(item));
    if (index === classesLength - 1) {
      printBorder();
    }
  });
}

function printGroup(content: Istatuscode[]) {
  printBorder();
  content.forEach(item => printItem(item));
  printBorder();
}

function printSingle(content: Istatuscode[]) {
  printBorder();
  content.forEach(item => printItem(item, true));
  printBorder();
}
