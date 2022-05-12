import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Autocomplete from '@mui/material/Autocomplete'

const ProjectDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const parameters = [
    { value: 101, label: 'Air Temperature' },
    { value: 102, label: 'Battery' },
    // { value: 103, label: 'Cadmium Level' },
    // { value: 104, label: 'MOCD' },
    // { value: 105, label: 'Chemical Oxygen Demand' }
  ];

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
            {/* https://mui.com/material-ui/react-autocomplete/#controlled-states */}
            {/* <Grid item xs={12}>
              <TextField 
                placeholder="TODO"
                label="Parameters Measured"
                onChange={handleChange('params_default')}
                defaultValue={values.params_default}
                // variant="outlined"
                fullWidth
              />
            </Grid> */}
            <Grid item xs={12}>
              <Autocomplete
                // name="params_default"
                multiple
                id="tags-outlined"
                options={parameters}
                isOptionEqualToValue={(option, value) => option.value === value}
                filterSelectedOptions
                value={values.params_default}
                onChange={handleChange('params_default')}
                getOptionLabel={(option) => {
                  console.log('getOptionLabel', option, typeof option)
                  if (typeof option === 'number') {
                    return parameters.find(item => item.value === option)?.label;
                  } else {
                    return option.label;
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Parameters Measured"
                    placeholder="Type to filter"
                  />
                )}
              />
            </Grid>
            {/* params_other */}
            <Grid item xs={12}>
              <TextField 
                placeholder="(Optional) Enter each one separated by commas"
                label="Additional Parameters"
                onChange={handleChange('params_other')}
                defaultValue={values.params_other}
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
            {/* start_date */}
            <Grid item xs={6}>
              <TextField 
                placeholder="YYYY-MM-DD"
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
                placeholder="YYYY-MM-DD"
                label="End Date"
                onChange={handleChange('end_date')}
                defaultValue={values.end_date}
                // variant="outlined"
                fullWidth
              />
            </Grid>
            {/* is_active */}
            <Grid item xs={12}>
              <FormControlLabel 
                label="Project is currently active"
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

            {/* purpose */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Describe the purpose of this project"
                label="Purpose"
                onChange={handleChange('purpose')}
                defaultValue={values.purpose}
                fullWidth
                multiline
              />
            </Grid>

            {/* FORM BUTTONS */}
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
