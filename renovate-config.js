/*
 * dependency-tracker (https://github.com/hazendaz/dependency-tracker)
 *
 * Copyright 2011-2020 Hazendaz.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of The Apache Software License,
 * Version 2.0 which accompanies this distribution, and is available at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 *
 * Contributors:
 *     Hazendaz (Jeremy Landis).
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
