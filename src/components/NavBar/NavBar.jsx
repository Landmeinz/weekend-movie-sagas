
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function NavBar() {

    const history = useHistory();

    // BUTTON to go back to the movie list or to the add movie form; 
    function handleClick(pageDirection) {

        switch (pageDirection) {
            case 'movieList':
                console.log('CLICKED on movie list button');
                history.push('/')
                break;

            case 'addMovie':
                console.log('CLICKED on movie list button');
                history.push('/addMovie')
                break;

            default:
                break;
        }

    }; // handleClick


    return (
        <div>

            <button onClick={() => handleClick('movieList')}>HOME</button>

            <button onClick={() => handleClick('addMovie')}>ADD MOVIE</button>

        </div>
    )
}; // NavBar

export default NavBar;