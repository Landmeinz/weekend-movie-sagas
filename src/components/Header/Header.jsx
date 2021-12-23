
// --- MUI --- //
import Box from '@mui/material/Box';

function Header() {

    // box that contains the header; not sure why i took it out of the h1 tag; 
    const sxHeader = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'light',
        
        // border: 1,

        fontSize: 40,
        fontWeight: 700,
        mr: 4,
    }

    return (
        <Box sx={sxHeader}>The Movies Saga!</Box>
    )
}; // Header

export default Header;