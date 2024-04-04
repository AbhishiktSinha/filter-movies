
export default function MovieListRow({title, genre, year}) {

    return (
        <tr className="movie-data-row">
            <td
                key={'movie-title'}
                className="movie-title">
                {title}
            </td>

            <td
                key={'movie-genre'}
                className="movie-genre">
                {genre}
            </td>

            <td
                key={'movie-year'}
                className="movie-year">
                {year}
            </td>
        </tr>
    )
}