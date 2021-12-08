import React, { useState } from 'react'
import { DoctorDisplay } from './DoctorDisplay'
import { Pagination } from './Pagination'
import { usStates } from './statesInfo/states'
import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from '@mui/material'
import { useStyles } from './styles'

export const SearchField = () => {
  const classes = useStyles()

  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [state, setState] = useState('')
  const [doctors, setDoctors] = useState([])
  const [currPage, setCurrPage] = useState(1)

  const clickHandler = () => {
    if (
      (firstName.length && lastName.length) ||
      (lastName.length && state.length) ||
      (specialty.length && state.length) ||
      (firstName.length && lastName.length && specialty.length && state.length)
    ) {
      setLoading(true)
      fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          state: state,
          specialty: specialty,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setDoctors(data.results)
          setLoading(false)
        })
    }
  }

  //Pagination: Get Current Cards
  const cardsPerPage = 6
  const indexOfLastCard = currPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentDoctors = doctors.slice(indexOfFirstCard, indexOfLastCard)

  //Change Page1 -> Page2
  const paginate = (pageNumber) => setCurrPage(pageNumber)

  return (
    <div>
      <Card className={classes.inputCard}>
        <CardContent>
          <Typography variant="caption" className={classes.caption}>
            Enter Doctor Information Below
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                placeholder="Enter First Name"
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                placeholder="Enter Last Name"
                variant="outlined"
                onChange={(e) => setLastName(e.target.value)}
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Specialty"
                placeholder="Enter Specialty"
                variant="outlined"
                onChange={(e) => setSpecialty(e.target.value)}
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel title="state-list">Enter State Here</InputLabel>
                <Select
                  variant="standard"
                  defaultValue=""
                  onChange={(e) => setState(e.target.value)}
                >
                  {usStates.map((state) => (
                    <MenuItem
                      key={state.abbreviation}
                      value={state.abbreviation}
                    >
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                className={classes.searchButton}
                title="button"
                onClick={clickHandler}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {!loading && <DoctorDisplay doctors={currentDoctors} />}
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={doctors.length}
        paginate={paginate}
      />
    </div>
  )
}
