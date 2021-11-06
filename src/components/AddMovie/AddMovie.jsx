
import { useHistory } from 'react-router-dom';


function AddMovie() {

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
    }


    return (
        <div>
            <button onClick={() => handleClick('movieList')}>MOVIE LIST</button>
            <p>add a new movie on this page</p>
        </div>
    )
};

export default AddMovie;