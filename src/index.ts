#!/usr/bin/env

const chalk = require("chalk");
import { Istatuscode } from "./interfaces";

const statuscodesData = require("./statuscodes");
const { en } = statuscodesData;
const results: Istatuscode[] = en.statuscodes.filter((item: Istatuscode) =>
  item.code.toString().startsWith(process.argv[2])
);

const stdoutLength = Math.min(process.stdout.columns as number, 80);

const formatSingle = item => {
  console.log(chalk.yellow("ᐧ".repeat(stdoutLength)));

  console.log(chalk.bold(`${item.code} — ${item.shortDescription}`));
  console.log(item.description);

  if (results.length === 1) {
    console.log(chalk.yellow("ᐧ".repeat(stdoutLength)));
  }
};

results.map(formatSingle);
