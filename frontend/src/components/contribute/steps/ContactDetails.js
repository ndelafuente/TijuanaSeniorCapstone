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
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* first name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="First Name"
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
            </Grid>
            {/* last name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
            </Grid>

              {/* email address */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Email Address"
                  label="Email Address"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  // variant="outlined"
                  autoComplete="email"
                  fullWidth
                />
              </Grid>
              <br />
              {/* username */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Username"
                  label="Username"
                  onChange={handleChange('username')}
                  defaultValue={values.username}
                  // variant="outlined"
                  autoComplete="username"
                  fullWidth
                />
              </Grid>
              <br />
              {/* password */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Password"
                  label="Password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  // variant="outlined"
                  autoComplete="password"
                  fullWidth
                  type="password"
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
