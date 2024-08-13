import {Container, AppBar, Toolbar, Typography, Button, Link, Box} from '@mui/material'
import { SignIn } from '@clerk/nextjs'

export default function SignInPage(){
    return <Container maxWidth = '100vw'>
        <AppBar position= 'static' >
            <Toolbar>
                <Typography variant = 'h6' sx={{flexGrow:1,}}>
                    Flashcard
                </Typography>
                <Button color="inherit">
                    <Link href = '/sign-in' passHref>Login</Link>
                </Button>
                <Button color="inherit">
                    <Link href = '/sign-up' passHref>Sign Up</Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box className = 'flex flex-col align-center jsutify-center'>
            <Typography variant='h4'>Sign In</Typography>
            <SignIn />
        </Box>
    </Container>
}