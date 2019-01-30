import { JsonRpcServer } from '@theia/core/lib/common/messaging';

export const BackendExport = Symbol('BackendExport');
export const EXPORT_PATH = '/services/export';

export interface BackendExport extends JsonRpcServer<undefined> {
    export(ecoreFolder:string, targetFolder:string): Promise<string>
}
