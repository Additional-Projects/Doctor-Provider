import React from 'react'
import { AppBar, CssBaseline, Typography, Toolbar } from '@mui/material'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'

export const NavBar = () => {
  return (
    <div style={{ marginBottom: '1em' }}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalHospitalIcon />
          <Typography align="center" variant="h6">
            Doctor Provider
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
