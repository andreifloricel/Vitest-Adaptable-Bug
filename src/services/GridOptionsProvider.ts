import { AdaptableToolPanelAgGridComponent } from '@adaptabletools/adaptable/src/AdaptableComponents';
import { GridOptions } from '@ag-grid-enterprise/all-modules';
import { columnDefinitionsProvider } from './ColumnDefintionsProvider';

export default class GridOptionsProvider {
    private readonly gridOptions: GridOptions;

    constructor() {
        this.gridOptions = {
            columnDefs: columnDefinitionsProvider.getColumnDefinitions(),
            sideBar: true,
            components: {
                AdaptableToolPanel: AdaptableToolPanelAgGridComponent
            },
            suppressMenuHide: true,
            enableRangeSelection: true
        };
    }

    public getGridOptions(): GridOptions {
        return this.gridOptions;
    }
}

export const gridOptionsProvider = new GridOptionsProvider();