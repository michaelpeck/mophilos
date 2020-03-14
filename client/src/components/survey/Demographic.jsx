import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const Demographic = props => {

  const [age, setAge] = React.useState('');
  const ages = Array.from(Array(100).keys());

  const [country, setCountry] = React.useState('');
  const countries = ['United States', 'Canada'];

  const [state, setState] = React.useState('');
  const states = ['Delaware', 'Maryland', 'New Jersey', 'New York', 'Pennsylvania'];

  const [sex, setSex] = React.useState('');
  const sexes = ['Male', 'Female'];

  const [gender, setGender] = React.useState('');
  const genders = ['Male', 'Female', 'Transgender', 'Gender Fluid'];

  const [sexuality, setSexuality] = React.useState('');
  const sexualities = ['Straight', 'Bisexual', 'Gay'];

  const [race, setRace] = React.useState('');
  const [race2, setRace2] = React.useState('');
  const races = ['Arab', 'Asian', 'Black', 'Jewish', 'Latino', 'Native American', 'White'];

  const [ethnicity, setEthnicity] = React.useState('');
  const [ethnicity2, setEthnicity2] = React.useState('');
  const ethnicities = ['Arab', 'Asian', 'Black', 'Jewish', 'Latino', 'Native American', 'White'];

  return (
    <Paper elevation={5} className={props.class}>
      <h3>Demographic</h3>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl required className='form-control'>
            <InputLabel id='age-label'>Age</InputLabel>
            <Select labelId='age-label' id='age' value={age}>
              { ages.map((key) => {
                   return <MenuItem value={key+1}>{key+1}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl required className='form-control'>
            <InputLabel id='country-label'>Country</InputLabel>
            <Select labelId='country-label' id='country' value={country}>
              { countries.map((c) => {
                   return <MenuItem value={c}>{c}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl required className='form-control'>
            <InputLabel id='state-label'>State</InputLabel>
            <Select labelId='state-label' id='state' value={state}>
              { states.map((s) => {
                   return <MenuItem value={s}>{s}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl required className='form-control'>
            <InputLabel id='sex-label'>Sex</InputLabel>
            <Select labelId='sex-label' id='sex' value={sex}>
              { sexes.map((s) => {
                   return <MenuItem value={s}>{s}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl required className='form-control'>
            <InputLabel id='gender-label'>Gender</InputLabel>
            <Select labelId='gender-label' id='gender' value={gender}>
              { genders.map((g) => {
                   return <MenuItem value={g}>{g}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl required className='form-control'>
            <InputLabel id='sexuality-label'>Sexuality</InputLabel>
            <Select labelId='sexuality-label' id='sexuality' value={sexuality}>
              { sexualities.map((se) => {
                   return <MenuItem value={se}>{se}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <h5 style={{paddingTop:'20px'}}>Birth Race & Ethnicity</h5>
      <p>Select the groups that most closely match those into which you were born.</p>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl required className='form-control'>
            <InputLabel id='race-label'>Race</InputLabel>
            <Select labelId='race-label' id='race' value={race}>
              { races.map((r) => {
                   return <MenuItem value={r}>{r}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl required className='form-control'>
            <InputLabel id='ethnicity-label'>Ethnicity</InputLabel>
            <Select labelId='ethnicity-label' id='ethnicity' value={ethnicity}>
              { ethnicities.map((e) => {
                   return <MenuItem value={e}>{e}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <h5 style={{paddingTop:'20px'}}>Identity Race & Ethnicity</h5>
      <p>Select the groups that most closely match those to which you identify.</p>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl required className='form-control'>
            <InputLabel id='race2-label'>Race</InputLabel>
            <Select labelId='race2-label' id='race2' value={race2}>
              { races.map((r) => {
                   return <MenuItem value={r}>{r}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl required className='form-control'>
            <InputLabel id='ethnicity2-label'>Ethnicity</InputLabel>
            <Select labelId='ethnicity2-label' id='ethnicity2' value={ethnicity2}>
              { ethnicities.map((e) => {
                   return <MenuItem value={e}>{e}</MenuItem>
                 })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  )
}

Demographic.propTypes = {
  className: PropTypes.string,
};

Demographic.defaultProps = {
  className: null,
};

export default Demographic;
