
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// --- MUI --- //
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';

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
        width: 300,

    }

    const sxButton = {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1.4,
        m: 1,

    }


    return (
        <Box sx={sxButtonBox}>

            <Button variant="contained" sx={sxButton}
                onClick={() => handleClick('movieList')}
            ><LocalMoviesOutlinedIcon fontSize='large'/>WATCH LIST</Button>

            <Button variant="contained" sx={sxButton}
                onClick={() => handleClick('addMovie')}
            ><LibraryAddCheckOutlinedIcon fontSize='large'/>ADD NEW MOVIE</Button>

        </Box>
    )
}; // NavBar

export default NavBar;