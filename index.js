#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';

const data = {
    work: `${chalk.white.bold("Work: ")}${chalk.white('Apprentice at ')}${chalk.green('Becode Liège')}`,
    gitHub: `${chalk.white.bold("GitHub: ")}${chalk.gray('https://github.com/')}${chalk.green('JeanChristopheM')}`,
    npm: `${chalk.white.bold('Npm: ')}${chalk.gray('https://npmjs.com/')}${chalk.green('~jeanchristophem')}`,
    linkedin: `${chalk.white.bold('Linkedin: ')}${chalk.gray('https://linkedin.com/in/')}${chalk.green('jeanchristophem')}`,
    email: `${chalk.white.bold('Email: ')}${chalk.green('jean.christophe.molhant')}${chalk.gray('@gmail.com')}`,
}
console.log(
    boxen(
        [
            data.work,
            '\n',
            data.gitHub,
            data.npm,
            data.linkedin,
            data.email
        ].join('\n'),
        {
            padding: 1,
            margin: 1,
            dimBorder: true,
            title: 'Jean-Christophe Molhant',
            titleAlignment: 'center',
            textAlignment: 'center',
            borderStyle: 'round',
            borderColor: 'cyan'
        }
    )
);