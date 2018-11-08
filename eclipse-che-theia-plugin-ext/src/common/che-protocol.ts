/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { Workspace } from '@eclipse-che/plugin';
import { ProxyIdentifier, createProxyIdentifier } from '@theia/plugin-ext/lib/api/rpc-protocol';

export interface CheApiPlugin {

}

export interface CheApiMain {
    $currentWorkspace(): Promise<Workspace>;
}

export const PLUGIN_RPC_CONTEXT = {
    CHE_API_MAIN: <ProxyIdentifier<CheApiMain>>createProxyIdentifier<CheApiMain>('CheApiMain'),
};

// Theia RPC protocol

export const CheApiServicePath = '/che-api-service';

export const CheApiService = Symbol('CheApiService');
export interface CheApiService {
    currentWorkspace(): Promise<Workspace>;
}
