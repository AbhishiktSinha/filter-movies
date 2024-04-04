import { useContext } from "react";

import getMoviesData from "../../data/moviesData";
import applyFilterContext from "../../context/applyFilterContext";

import './styles/MovieList.css'
import MovieListRow from "./components/MovieListRow";

export default function MovieList() {
    
    const {filter} = useContext(applyFilterContext);
    const movieListData = getMoviesData(filter);

    return (
        <div className="movie-list-section">
            <table>
                <thead>
                    <MovieListRow 
                        key={'header-row'}
                        title={'Title'}
                        genre={'Genre'}
                        year={'Year'}
                    />
                </thead>
                <tbody>
                    {
                        movieListData.map(
                            movie => {
                                const {title, genre, year} = movie;

                                return (
                                    <MovieListRow
                                        key={title}
                                        title={title}
                                        genre={genre}
                                        year={year}
                                    />
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}