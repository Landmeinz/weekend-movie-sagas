
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


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


    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [genreInput, setGenreInput] = useState('0')


    // BUTTON to ADD MOVIE and post to the database; 
    function handleSubmit(event) {
        console.log('CLICKED on submit new movie');
        event.preventDefault();

        if(genreInput != '0'){
            console.log('selected', genreInput);

            // --- post to database from here --- //

        } else {
            alert('remember to select a genre')
        }        
    }

    


    // add a form to the page that takes inputs for title, poster, and description;

    return (
        <div>
            <h2>AddMovie</h2>
            <button onClick={() => handleClick('movieList')}>MOVIE LIST</button>
            <p>add a new movie on this page</p>

            <form onSubmit={handleSubmit}>
                <button type="submit">ADD MOVIE</button>
                <input type="text" placeholder="Title of movie" required />
                <input type="text" placeholder="Image URL" required />
                <input type="text" placeholder="description" required />
                
                <select 
                    value={genreInput}
                    onChange={(event) => setGenreInput(event.target.value)} >
                    <option hidden value="0">Select Genre</option>
                    {genres.map((genre, i) => (
                        <option 
                            key={i}
                        >{genre}</option>
                    ))}
                </select>

            </form>

        </div>
    )
}; // AddMovie

export default AddMovie;