import React from 'react'
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select } from '@material-ui/core'

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
              ["org_name", "org_type", "org_description", "org_website", "org_email", "org_address", "org_city", "org_state", "org_zip_code", "org_country"]
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
                onChange={handleChange('org_name')}
                defaultValue={values.org_name}
                fullWidth
              />
            </Grid>
            
            {/* type of organization */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="org-type-label">Type</InputLabel>
                <Select 
                  labelId="org-type-label"
                  placeholder="Type"
                  label="Type of Organization"
                  onChange={handleChange('org_type')}
                  defaultValue={values.org_type}
                  fullWidth
                >
                  {/* Corresponds to ORG_TYPES in contribute.models */}
                  <MenuItem value={''}><em>None</em></MenuItem>
                  <MenuItem value={'A'}>Academic</MenuItem>
                  <MenuItem value={'M'}>Municipal</MenuItem>
                  <MenuItem value={'S'}>State</MenuItem>
                  <MenuItem value={'F'}>Federal</MenuItem>
                  <MenuItem value={'I'}>International</MenuItem>
                  <MenuItem value={'N'}>Non-Profit</MenuItem>
                  <MenuItem value={'i'}>Individual</MenuItem>
                  <MenuItem value={'O'}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* organization website */}
            <Grid item xs={12}>
              <TextField 
                placeholder="https://my-org.net"
                label="Website"
                onChange={handleChange('org_website')}
                defaultValue={values.org_website}
                fullWidth
              />
            </Grid>

            {/* organization email */}
            <Grid item xs={12}>
              <TextField 
                placeholder="info@my-org.net"
                label="Email"
                onChange={handleChange('org_email')}
                defaultValue={values.org_email}
                fullWidth
              />
            </Grid>

            {/* organization address */}
            <Grid item xs={12}>
              <TextField 
                label="Address"
                onChange={handleChange('org_address')}
                defaultValue={values.org_address}
                autoComplete="street-address"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="City"
                onChange={handleChange('org_city')}
                defaultValue={values.org_city}
                autoComplete="address-level2"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField 
                label="State"
                onChange={handleChange('org_state')}
                defaultValue={values.org_state}
                autoComplete="address-level1"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField 
                label="ZIP Code"
                onChange={handleChange('org_zip_code')}
                defaultValue={values.org_zip_code}
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
                  onChange={handleChange('org_country')}
                  defaultValue={values.org_country}
                  autoComplete="country"
                  // autoComplete="country-name"
                  fullWidth
                >
                  <MenuItem value="US">United States</MenuItem>
                  <MenuItem value="MX">Mexico</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* organization description */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Type something here about your organization"
                label="Description"
                onChange={handleChange('org_description')}
                defaultValue={values.org_description}
                fullWidth
                multiLine
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

