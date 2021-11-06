
import { useHistory } from 'react-router-dom';

function DetailsPage() {

    const history = useHistory(); 

    function handleClick() {
        console.log('CLICKED on movie list button');
        history.push('/')
    }

    return(
        <div>
            <button 
                onClick={handleClick}
            >MOVIE LIST</button>
            <p>details page</p>
        </div>
        
    )
};

export default DetailsPage; 