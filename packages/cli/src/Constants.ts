/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright Contributors to the Zowe Project.
 *
 */

import * as path from "node:path";
import type { ICommandOptionDefinition } from "@zowe/imperative";
import { ZSshClient } from "zowe-native-proto-sdk";

// biome-ignore lint/complexity/noStaticOnlyClass: Constants class has static properties
export class Constants {
    public static readonly OPT_SERVER_PATH: ICommandOptionDefinition = {
        name: "server-path",
        aliases: ["sp"],
        description: `The remote path of the Zowe SSH server. Defaults to '${ZSshClient.DEFAULT_SERVER_PATH}'.`,
        type: "string",
        required: false,
    };

    public static readonly ZSSH_BIN_DIR = path.join(__dirname, "..", "bin");
}
