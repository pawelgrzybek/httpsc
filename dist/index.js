#!/usr/bin/env
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const statuscodesData = require("./statuscodes");
const { en } = statuscodesData;
const results = en.statuscodes.filter((item) => item.code.toString().startsWith(process.argv[2]));
const stdoutLength = Math.min(process.stdout.columns, 80);
const formatSingle = item => {
    console.log(chalk.yellow("ᐧ".repeat(stdoutLength)));
    console.log(chalk.bold(`${item.code} — ${item.shortDescription}`));
    console.log(item.description);
    if (results.length === 1) {
        console.log(chalk.yellow("ᐧ".repeat(stdoutLength)));
    }
};
results.map(formatSingle);
