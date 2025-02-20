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

// Code generated by tygo. DO NOT EDIT.
import type * as common from "./common.ts"

//////////
// source: requests.go

export interface IssueConsoleRequest extends common.CommandRequest {
  command: "consoleCommand";
  /**
   * Console command to execute
   */
  commandText: string;
  /**
   * Name of the console
   */
  consoleName: string;
}
export interface IssueTsoRequest extends common.CommandRequest {
  command: "tsoCommand";
  /**
   * TSO command to execute
   */
  commandText: string;
}
export interface IssueUnixRequest extends common.CommandRequest {
  command: "unixCommand";
  /**
   * UNIX command to execute
   */
  commandText: string;
}

//////////
// source: responses.go

export interface IssueConsoleResponse {
  /**
   * Data returned from the console command
   */
  data: string;
}
export interface IssueTsoResponse {
  /**
   * Data returned from the TSO command
   */
  data: string;
}
export interface IssueUnixResponse {
  /**
   * Data returned from the UNIX command
   */
  data: string;
}
