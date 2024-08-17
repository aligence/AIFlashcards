'use client'
import getStripe from '@/utils/get-stripe'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";

export default function Home() {

  const handleSubmit = async () =>{
    const checkoutSession = await fetch('/app/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000',
      },
    })

    const checkoutSessionJson = await checkoutSession.json()

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message)
      return
    }

    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckOut({
      sessionId: checkoutSessionJson.id,
    })

    if (error){
      console.warn(error.message)
    }
  }

  return (
    <Container maxWidth='100vw' >
      <Head>
        <title>Flashcards</title>
        <meta name = 'description' content = 'Create Flashcards from your text using ai'></meta>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="grow">Flashcards</Typography>
          <SignedOut>
            <Button color = 'inherit' href="/sign-in"> Login</Button>
            <Button color = 'inherit' href='/sign-up'> Signup</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box className= 'text-center m-4'>
        <Typography variant = 'h2' gutterBottom>Welcome to Flashcards</Typography>
        <Typography variant = 'h5' gutterBottom>{' '}SOme subheader descrip</Typography>
        <Button variant = 'contained' color= 'primary' className = 'mt-2'> Get Started</Button>
      </Box>


      <Box className = 'my-4 text-center'>
        <Typography variant='h4' className="p-4" gutterBottom>
          Features
        </Typography>

        <Grid container spacing ={4}>
          <Grid item xs={12} md={4}>
            <Box className = 'pd-2 border border-solid border-gray-300 rounded-lg'>
              <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
              <Typography>{' '}Meow meowoowmeoemweo descrip</Typography>
            </Box>
          </Grid>
        
          <Grid item xs={12} md={4}>
            <Box className = 'pd-2 border border-solid border-gray-300 rounded-lg'>
              <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
              <Typography>{' '}Meow meowoowmeoemweo descrip</Typography>
            </Box>
          </Grid>
        
          <Grid item xs={12} md={4}>
            <Box className = 'pd-2 border border-solid border-gray-300 rounded-lg'>
              <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
              <Typography>{' '}Meow meowoowmeoemweo descrip</Typography>
            </Box>
          </Grid>
        </Grid>

      </Box>

      <Box className = 'text-center my-4'>
        <Typography variant='h4' className="p-4" gutterBottom>Pricing</Typography>

        <Grid container spacing ={2}>
          <Grid item xs={12} md={6}>
            <Box className = 'pd-2 border border-solid border-gray-300 rounded-lg'>
              <Typography variant="h5"gutterBottom>Basic</Typography>
              <Typography variant="h6" gutterBottom>$5 / month</Typography>
              <Typography>{' '}Meow meowoowmeoemweo descrip</Typography>
              <Button variant="contained" className="mt-2" >Choose Basic</Button>
            </Box>
          </Grid>
  
          <Grid item xs={12} md={6}>
            <Box className = 'pd-2 border border-solid border-gray-300 rounded-lg'>
              <Typography variant="h5"gutterBottom>Pro</Typography>
              <Typography variant="h6" gutterBottom>$10 / month</Typography>
              <Typography>{' '}Meow meowoowmeoemweo descrip</Typography>
              <Button variant="contained" className="mt-2" onClick={handleSubmit}>Choose Pro</Button>
            </Box>
          </Grid>
      
        </Grid>

      </Box>
    </Container>
  )
}
