
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// --- MUI --- //
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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



    const sxButtonBox = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,

    }

    const sxButton = {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1.4,
        m: 1,
        
        height: '30%',
        width: '40%',
    }


    return (
        <Box sx={sxButtonBox}>

            <Button variant="contained" sx={sxButton}
                onClick={() => handleClick('movieList')}
            >HOME</Button>

            <Button variant="contained" sx={sxButton} 
                onClick={() => handleClick('addMovie')}
            >ADD MOVIE</Button>

        </Box>
    )
}; // NavBar

export default NavBar;