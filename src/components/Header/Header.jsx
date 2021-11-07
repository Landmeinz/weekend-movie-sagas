
// --- MUI --- //
import Box from '@mui/material/Box';

function Header() {

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