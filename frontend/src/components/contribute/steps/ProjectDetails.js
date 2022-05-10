import React from 'react'
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox } from '@material-ui/core'

const ProjectDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
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
          Project Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* project_name */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Name of the project"
                label="Name"
                onChange={handleChange('project_name')}
                defaultValue={values.project_name}
                // variant="outlined"
                fullWidth
              />
            </Grid>
            {/* funding_agencies */}
            <Grid item xs={12}>
              <TextField 
                placeholder="(Optional)"
                label="Funding Agencies"
                onChange={handleChange('funding_agencies')}
                defaultValue={values.funding_agencies}
                // variant="outlined"
                fullWidth
              />
            </Grid>
            {/* params_default */}
            <Grid item xs={12}>
              <TextField 
                placeholder="TODO"
                label="Parameters Measured"
                onChange={handleChange('')}
                defaultValue={values.x}
                // variant="outlined"
                fullWidth
              />
            </Grid>
            {/* params_other */}
            <Grid item xs={12}>
              <TextField 
                placeholder="(Optional) Enter each one separated by commas"
                label="Additional Parameters"
                onChange={handleChange('')}
                defaultValue={values.x}
                // variant="outlined"
                fullWidth
              />
            </Grid>
            {/* location_name */}
            <Grid item xs={12}>
              <TextField 
                placeholder="TODO"
                label="Location Name"
                onChange={handleChange('location_name')}
                defaultValue={values.location_name}
                // variant="outlined"
                fullWidth
              />
            </Grid>
            {/* latitude */}
            <Grid item xs={6}>
              <TextField 
                label="Latitude"
                onChange={handleChange('latitude')}
                defaultValue={values.latitude}
                // variant="outlined"
                fullWidth
              />
            </Grid>
            {/* longitude */}
            <Grid item xs={6}>
              <TextField 
                label="Longitude"
                onChange={handleChange('longitude')}
                defaultValue={values.longitude}
                // variant="outlined"
                fullWidth
              />
            </Grid>

            {/* https://mui.com/x/react-date-pickers/getting-started/ */}
            {/* is_active */}
            <Grid item xs={12}>
              <FormControlLabel 
                label="Label"
                control={
                  <Checkbox 
                    onChange={handleChange('is_active')}
                    checked={values.is_active}
                    inputProps={{ 'aria-label': 'controlled' }}  
                    // defaultChecked
                  />
                }
              />
            </Grid>
            {/* start_date */}
            <Grid item xs={6}>
              <TextField 
                placeholder="TODO"
                label="Start Date"
                onChange={handleChange('start_date')}
                defaultValue={values.start_date}
                // variant="outlined"
                fullWidth
              />
            </Grid>
            {/* end_date */}
            <Grid item xs={6}>
              <TextField 
                placeholder="TODO"
                label="End Date"
                onChange={handleChange('end_date')}
                defaultValue={values.end_date}
                // variant="outlined"
                fullWidth
              />
            </Grid>

            {/* purpose */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Describe the purpose of this project"
                label="Purpose"
                onChange={handleChange('purpose')}
                defaultValue={values.purpose}
                fullWidth
                multiLine
              />
            </Grid>

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

export default ProjectDetails
