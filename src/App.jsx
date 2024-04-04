import GenreFilter from "./features/GenreFilter/index";

import './App.css'
import MovieList from "./features/MoviesList/index";

export default function App() {
    
    return (
        <div className="app-container">

            <div id="main">
                <h1>Top 15 Movies of All Time</h1>
                 <GenreFilter />
                 <MovieList />
            </div>
        
        </div>
    )
}