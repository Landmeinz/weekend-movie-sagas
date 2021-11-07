
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function AddMovie() {

    let genres = useSelector(store => store.genres);

    // --- !!! DELETE ME !!! --- // 
    genres = ['Adventure', 'Animated', 'Biographical', 'Comedy', 'Disaster', 'Drama', 'Epic', 'Fantasy', 'Musical', 'Romantic', 'Science Fiction', 'Space-Opera', 'Superhero']

    const history = useHistory();

    // BUTTON to go back to the movie list; 
    function handleClick(value) {
        switch (value) {
            case 'movieList':
                console.log('CLICKED on movie list button');
                history.push('/')
                break;

            default:
                break;
        }
    }; // handleClick

    function handleSubmit() {
        console.log('CLICKED on submit new movie');
    }


    // add a form to the page that takes inputs for title, poster, and description;

    return (
        <div>
            <h2>AddMovie</h2>
            <button onClick={() => handleClick('movieList')}>MOVIE LIST</button>
            <p>add a new movie on this page</p>

            <form onSubmit={handleSubmit}>
                <button type="submit">ADD MOVIE</button>
                <input type="text" placeholder="Title of movie"/>
                <input type="text" placeholder="Image URL"/>
                <input type="text" placeholder="description"/>
                <select name="genres">
                    <option hidden>Select Genre</option>
                    {genres.map((genre, i) => (
                        <option key={i}>{genre}</option>
                    ))}
                </select>
            </form>

        </div>
    )
}; // AddMovie

export default AddMovie;