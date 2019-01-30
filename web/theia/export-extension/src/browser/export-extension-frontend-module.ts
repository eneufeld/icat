/**
 * Generated using theia-extension-generator
 */

import { ExportExtensionCommandContribution, ExportExtensionMenuContribution } from './export-extension-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";
import { BackendExport, EXPORT_PATH } from '../common/export-protocol';
import { WebSocketConnectionProvider } from '@theia/core/lib/browser';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(ExportExtensionCommandContribution);
    bind(MenuContribution).to(ExportExtensionMenuContribution);

    bind(BackendExport).toDynamicValue(ctx => {
        const connection = ctx.container.get(WebSocketConnectionProvider);
        return connection.createProxy<BackendExport>(EXPORT_PATH);
    }).inSingletonScope();
    
});