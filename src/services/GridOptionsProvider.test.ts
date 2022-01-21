import GridOptionsProvider from './GridOptionsProvider';
import { columnDefinitionsProvider } from './ColumnDefintionsProvider';

describe('GridOptionsProvider', () => {
    it('should provide grid options', () => {
        const columnDefinitionsProviderSpy = jest.spyOn(columnDefinitionsProvider, 'getColumnDefinitions');
        columnDefinitionsProviderSpy.mockReturnValue([]);
        const sut = new GridOptionsProvider();
        const result = sut.getGridOptions();
        expect(result).toMatchSnapshot();
    });
});
