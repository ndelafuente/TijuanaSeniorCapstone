import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const ContactDetails = ({ nextStep, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <Typography  component="h1" variant="h5">
          Enter your contact information
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* contact_name */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Name"
                label="Name"
                onChange={handleChange('contact_name')}
                defaultValue={values.contact_name}
                fullWidth
              />
            </Grid>

            {/* email address */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Email Address"
                label="Email Address"
                onChange={handleChange('contact_email')}
                defaultValue={values.email}
                // variant="outlined"
                autoComplete="email"
                fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <Button 
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default ContactDetails
