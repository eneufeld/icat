/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { ConnectionHandler, JsonRpcConnectionHandler } from "@theia/core";
import { ContainerModule } from "inversify";
import { BackendExport, EXPORT_PATH } from "../common/export-protocol";
import { BackendExportImpl } from "./backend-export";

export default new ContainerModule(bind => {
    bind(BackendExport).to(BackendExportImpl).inSingletonScope()
    bind(ConnectionHandler).toDynamicValue(ctx =>
        new JsonRpcConnectionHandler(EXPORT_PATH, () => {
            return ctx.container.get<BackendExport>(BackendExport);
        })
    ).inSingletonScope();
});