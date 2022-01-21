import '@adaptabletools/adaptable-react-aggrid/base.css';
import '@adaptabletools/adaptable-react-aggrid/themes/light.css';
import '@adaptabletools/adaptable-react-aggrid/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import './App.css';

import AdaptableReact from '@adaptabletools/adaptable-react-aggrid';
import { AgGridReact } from '@ag-grid-community/react';
import React  from 'react';
import { adaptableOptionsProvider } from './services/AdaptableOptionsProvider';
import { gridOptionsProvider } from './services/GridOptionsProvider';
import { modulesProvider } from './services/ModulesProvider'

export const App: React.FC = () => {
  return (
      <div className="App">
          <AdaptableReact
              style={{ flex: 'none' }}
              gridOptions={gridOptionsProvider.getGridOptions()}
              adaptableOptions={adaptableOptionsProvider.getAdaptableOptions()}
              modules={modulesProvider.getModules()}
          />
          <div data-id="grid" className="ag-theme-balham">
              <AgGridReact
                  gridOptions={gridOptionsProvider.getGridOptions()}
                  modules={modulesProvider.getModules()}
              />
          </div>
      </div>
  );
};

