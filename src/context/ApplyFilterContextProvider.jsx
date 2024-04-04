import { useState } from "react";

import applyFilterContext from "./applyFilterContext";

export default function ApplyFilterContextProvider({children}) {

    const [filter, setFilter] = useState('');

    function clearFilter() {
        setFilter('');
    }
    function applyFilter(new_filter) {
        setFilter(new_filter);
    }

    return (
        <applyFilterContext.Provider
            value={{
                filter: filter,
                clearFilter: clearFilter, 
                applyFilter: applyFilter
            }}
        >
            {children}
        </applyFilterContext.Provider>
    )
}