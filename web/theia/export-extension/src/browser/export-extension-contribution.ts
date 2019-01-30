import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, SelectionService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
import { BackendExport } from "../common/export-protocol";
import URI from "@theia/core/lib/common/uri";
import { UriAwareCommandHandler, UriCommandHandler } from "@theia/core/lib/common/uri-command-handler";

import { NAVIGATOR_CONTEXT_MENU } from '@theia/navigator/lib/browser/navigator-contribution';

export const ICAT_NAVIGATOR = [...NAVIGATOR_CONTEXT_MENU, 'icat'];

export const ExportExtensionCommand = {
    id: 'ExportExtension.command',
    label: "Shows a message"
};

@injectable()
export class ExportExtensionCommandContribution implements CommandContribution {

    constructor(
        @inject(BackendExport) private readonly backendExport: BackendExport,
        @inject(SelectionService) protected readonly selectionService: SelectionService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(ExportExtensionCommand, this.newUriAwareCommandHandler({
            execute: (uri) => this.backendExport.export(uri.parent.path.toString(),uri.parent.path.join('xml').toString()),
            isVisible: (uri) => uri.path.ext === '.ecore',
            isEnabled: (uri) => uri.path.ext === '.ecore',
        }));
    }
    
    private newUriAwareCommandHandler(handler: UriCommandHandler<URI>): UriAwareCommandHandler<URI> {
        return new UriAwareCommandHandler(this.selectionService, handler)
    };
}

@injectable()
export class ExportExtensionMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: ExportExtensionCommand.id,
            label: 'Export to XML'
        });
        menus.registerMenuAction(ICAT_NAVIGATOR, {
            commandId: ExportExtensionCommand.id,
            label: 'Export to XML'
        });
    }
}