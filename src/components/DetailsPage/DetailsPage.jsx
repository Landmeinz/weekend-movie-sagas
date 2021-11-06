
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// --- COMPONENTS --- // 


function DetailsPage() {

    const history = useHistory();
    const selectedMovie = useSelector(store => store.selectedMovie);

    console.log('this is selectedMovie', selectedMovie);


    // BUTTON to go back to the movie list; 
    function handleClick() {
        console.log('CLICKED on movie list button');
        history.push('/')
    }

    return (
        <div>
            <button
                onClick={handleClick}
            >MOVIE LIST</button>

            {selectedMovie ? 
            <img
                src={selectedMovie.poster}
                alt={selectedMovie.title}
                width="200"
                height="275"
            /> :
                <p>selected movie not working</p>
            }
            
        </div>

    )
};

export default DetailsPage;