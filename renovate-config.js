/*
 * SPDX-License-Identifier: Apache-2.0
 * See LICENSE file for details.
 *
 * Copyright 2011-2020 Hazendaz
 */
module.exports = {
    baseBranches: ['master'],
    commitMessagePrefix: '[renovate]',
    dryRun: false,
    endpoint: 'https://github.com/',
    extends: ['config:base'],
    gitAuthor: 'jeremylandis@hotmail.com',
    logLevel: 'debug',
    maven: {
        enabled: true
    },
    npm: {
        enabled: true
    },
    repositories: ['hazendaz/dependency-tracker']
};
