import FilterColumns from './filter.columns';

interface Filters {
    columns: FilterColumns;
    temperature: string;
    rows: string;
    measure: string;
    toggle: boolean;
    cityName?: string;
}

export default Filters;