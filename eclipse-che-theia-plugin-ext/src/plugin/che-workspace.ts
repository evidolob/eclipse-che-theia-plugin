/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/
import { RPCProtocol } from '@theia/plugin-ext/lib/api/rpc-protocol';
import { PLUGIN_RPC_CONTEXT, CheApiMain } from '../common/che-protocol';
import { WorkspaceSettings, WorkspaceConfig, Workspace, ResourceCreateQueryParams } from '@eclipse-che/plugin';

export class CheApiPluginImpl {
    private readonly delegate: CheApiMain;

    constructor(rpc: RPCProtocol) {
        this.delegate = rpc.getProxy(PLUGIN_RPC_CONTEXT.CHE_API_MAIN);
    }

    getSettings(): Promise<WorkspaceSettings> {
        throw new Error('Method not implemented.');
    }
    stop(workspaceId: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    startTemporary(config: WorkspaceConfig): Promise<any> {
        throw new Error('Method not implemented.');
    }
    start(workspaceId: string, environmentName: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    deleteWorkspace(workspaceId: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    update(workspaceId: string, workspace: Workspace): Promise<any> {
        throw new Error('Method not implemented.');
    }
    create(config: WorkspaceConfig, params: ResourceCreateQueryParams): Promise<any> {
        throw new Error('Method not implemented.');
    }
    getById(workspaceKey: string): Promise<Workspace> {
        throw new Error('Method not implemented.');
    }
    getAllByNamespace(namespace: string): Promise<Workspace[]> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<Workspace[]> {
        throw new Error('Method not implemented.');
    }
    getCurrentWorkspace(): Promise<Workspace> {
        return this.delegate.$currentWorkspace();
    }
}
