import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const OrganizationDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <Typography  component="h1" variant="h5">
          Organization Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* { // TODO? Dynamic generation
              ["name", "type", "description", "website", "email", "address", "city", "state", "zip_code", "country"]
              .map(field => {
                return (
                  <Grid item xs={12} sm={6}>
                    <TextField 
              <TextField 
                    <TextField 
              <TextField 
                    <TextField 
                      placeholder= {field}
                      label= {field}
                      onChange={handleChange(values[field])}
                      defaultValue={values[{field}]}
                    />
                  </Grid>
                );
              })
            } */}

            {/* organization name */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Organization Name"
                label="Organization Name"
                onChange={handleChange('name')}
                defaultValue={values.name}
                fullWidth
              />
            </Grid>
            
            {/* type of organization */}
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="org-type-label">Type</InputLabel>
                <Select 
                  labelId="org-type-label"
                  placeholder="Type"
                  label="Type of Organization"
                  onChange={handleChange('type')}
                  value={values.type}
                  fullWidth
                >
                  {/* Corresponds to TYPES in contribute.models */}
                  {/* TODO https://mui.com/material-ui/react-text-field/#select */}
                  <MenuItem value={''}><em>None</em></MenuItem>
                  <MenuItem value={'A'}>Academic</MenuItem>
                  <MenuItem value={'M'}>Municipal</MenuItem>
                  <MenuItem value={'S'}>State</MenuItem>
                  <MenuItem value={'F'}>Federal</MenuItem>
                  <MenuItem value={'I'}>International</MenuItem>
                  <MenuItem value={'N'}>Non-Profit</MenuItem>
                  {/* <MenuItem value={'i'}>Individual</MenuItem> */}
                  <MenuItem value={'O'}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* organization website */}
            <Grid item xs={8}>
              <TextField 
                placeholder="https://my-org.net"
                label="Website"
                onChange={handleChange('website')}
                defaultValue={values.website}
                fullWidth
              />
            </Grid>

            {/* organization email */}
            <Grid item xs={12}>
              <TextField 
                placeholder="info@my-org.net"
                label="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                fullWidth
              />
            </Grid>

            {/* organization address */}
            <Grid item xs={12}>
              <TextField 
                label="Address"
                onChange={handleChange('address')}
                defaultValue={values.address}
                autoComplete="street-address"
                fullWidth
              />
            </Grid>
            <Grid item xs={8}>
              <TextField 
                label="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
                autoComplete="address-level2"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField 
                label="State"
                onChange={handleChange('state')}
                defaultValue={values.state}
                autoComplete="address-level1"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                label="ZIP Code"
                onChange={handleChange('zip_code')}
                defaultValue={values.zip_code}
                autoComplete="postal-code"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="org-country-label">Country</InputLabel>
                <Select 
                  labelId="org-country-label"
                  label="Country"
                  onChange={handleChange('country')}
                  value={values.country}
                  autoComplete="country"
                  // autoComplete="country-name"
                  fullWidth
                >
                  <MenuItem value="US">United States</MenuItem>
                  <MenuItem value="MX">Mexico</MenuItem>
                  <MenuItem value="CAN">Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* organization description */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Type something here about your organization"
                label="Description"
                onChange={handleChange('description')}
                defaultValue={values.description}
                fullWidth
                multiline
              />
            </Grid>

            {/* <Grid item xs={12}>
              <TextField 
                placeholder=""
                label=""
                onChange={handleChange('')}
                defaultValue={values.x}
                autoComplete=""
                fullWidth
              />
            </Grid> */}

            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default OrganizationDetails

