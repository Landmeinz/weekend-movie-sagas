
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
        console.log('CLICKED on add movie');
        event.preventDefault();

        // make sure genre gets selected before sending off the post; 
        if(genreInput != '0'){

            // --- post to database from here --- //

            // empty all back to default values after submit; 
            setTitle('')
            setUrl('')
            setDescription('');
            setGenreInput('0');
            
        } else {alert('remember to select a genre')}        
    }; // handleSubmit

    
<input type="text" value={name} 
             onChange={(evt) => setName(evt.target.value)} />

    // add a form to the page that takes inputs for title, poster, and description;

    return (
        <div>
            <h2>AddMovie</h2>

            <button onClick={() => handleClick('movieList')}>MOVIE LIST</button>

            <form onSubmit={handleSubmit}>

                <button type="submit">ADD MOVIE</button>

                <input type="text" 
                    value={title} 
                    placeholder="Title of Movie" 
                    onChange={(event) => setTitle(event.target.value)}
                    required />

                <input type="text" 
                    value={url} 
                    placeholder="Poster Image URL" 
                    onChange={(event) => setUrl(event.target.value)}
                    required />

                <input type="text" 
                    value={description} 
                    placeholder="Description" 
                    onChange={(event) => setDescription(event.target.value)}
                    required />
                
                <select name="genre"
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