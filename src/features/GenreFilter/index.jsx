import { useContext } from "react";

import { genres } from "../../data/filtersData";
import applyFilterContext from "../../context/applyFilterContext";

import './styles/GenreFilterSection.css'


export default function GenreFilter() {

    const {filter, applyFilter, clearFilter} = useContext(applyFilterContext);
    
    function checkStatus(genre) {        
        return (genre.toLowerCase() == filter.toLowerCase());
    }

    return (
        <div className="genre-filter-section">
            <header>
                <h2>Filter by Genre</h2>
                {
                    Boolean(filter) && (
                        <span
                            onClick={clearFilter}
                            className="clear-filter">Clear filters
                        </span>
                    )
                }
            </header>

            <div className="filter-buttons-container">
                {
                    genres.map( genre => {
                        return (
                            <button
                                key={genre}
                                className={"filter-button" + (
                                    checkStatus(genre) ? ' active' : ''
                                )}
                                onClick={
                                    ()=>{
                                        applyFilter(genre)
                                    }
                                }>

                                {genre}

                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}