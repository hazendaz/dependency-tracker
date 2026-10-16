/*
 * SPDX-License-Identifier: Apache-2.0
 * See LICENSE file for details.
 *
 * Copyright 2011-2026 Hazendaz
 */
/*
 * Retained for local self-hosted Renovate testing and configuration
 * validation. Repository-specific rules are maintained in renovate.json.
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
