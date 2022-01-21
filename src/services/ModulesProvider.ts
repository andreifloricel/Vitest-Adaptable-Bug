import { AllEnterpriseModules, ClientSideRowModelModule, Module } from '@ag-grid-enterprise/all-modules';

export default class ModulesProvider {
    private readonly modules: Module[];

    constructor() {
        this.modules = [...AllEnterpriseModules, ClientSideRowModelModule];
    }

    public getModules(): Module[] {
        return this.modules;
    }
}


export const modulesProvider = new ModulesProvider();