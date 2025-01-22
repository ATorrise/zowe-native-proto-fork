/*
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright Contributors to the Zowe Project.
 *
 */

import type { IHandlerParameters } from "@zowe/imperative";
import type { SshSession } from "@zowe/zos-uss-for-zowe-sdk";
import { type ReadDataset, ZSshClient, ZSshUtils } from "zowe-native-proto-sdk";
import { SshBaseHandler } from "../../SshBaseHandler";

export default class ViewDataSetHandler extends SshBaseHandler {
    public async processWithSession(params: IHandlerParameters, session: SshSession): Promise<ReadDataset.Response> {
        using client = await ZSshClient.create(session);
        const request: ReadDataset.Request = {
            command: "readDataset",
            dataset: params.arguments.dataSet,
            // binary: params.arguments.binary,
            encoding: params.arguments.encoding,
        };
        const response = await client.request<ReadDataset.Response>(request);
        const content = ZSshUtils.decodeByteArray(response.data).toString();
        params.response.data.setMessage(
            "Successfully downloaded %d bytes of content from %s",
            content.length,
            params.arguments.dataSet,
        );
        params.response.data.setObj(content);
        params.response.console.log(content);
        return response;
    }
}
