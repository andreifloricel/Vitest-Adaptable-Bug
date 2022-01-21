import { AdaptableOptions } from '@adaptabletools/adaptable-react-aggrid';

export class AdaptableOptionsProvider {
    private readonly adaptableOptions: AdaptableOptions;

    constructor() {
        this.adaptableOptions = {
            primaryKey: 'bugId',
            autogeneratePrimaryKey: false,
            userName: 'sandbox user',
            adaptableId: 'Reconciliation Viewer',
            toolPanelOptions: {
                showAdaptableToolPanel: true
            }
        };
    }

    public getAdaptableOptions(): AdaptableOptions {
        return this.adaptableOptions;
    }
}

export const adaptableOptionsProvider = new AdaptableOptionsProvider();