import { ColDef, ColGroupDef } from '@ag-grid-enterprise/all-modules';

import ColumnConfiguration from './ColumnConfiguration.json';

export default class ColumnDefinitionsProvider {
    private readonly columnDefinitions: (ColDef | ColGroupDef)[] | null | undefined;

    constructor() {
        this.columnDefinitions = this.loadColumnDefinitions();
    }

    public getColumnDefinitions(): (ColDef | ColGroupDef)[] | null | undefined {
        return this.columnDefinitions;
    }

    private loadColumnDefinitions(): (ColDef | ColGroupDef)[] | null | undefined {
        const columnDefinitions: ColDef[] = ColumnConfiguration;

        const updatedCols: ColDef[] = [];
        columnDefinitions.forEach((colDef) => {
            updatedCols.push(this.addDefaultProperties(colDef));
        });

        return updatedCols;
    }

    public addDefaultProperties(columnDefintion: ColDef): ColDef {
        const result = {
            ...columnDefintion,
            filterParams: {
                cellHeight: 25
            }
        };
        return result;
    }
}

export const columnDefinitionsProvider = new ColumnDefinitionsProvider();