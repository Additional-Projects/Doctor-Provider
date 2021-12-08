import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  List,
  ListItem,
} from '@mui/material'
import HouseIcon from '@mui/icons-material/House'
import MailIcon from '@mui/icons-material/Mail'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { useStyles } from './styles';

export const DoctorDisplay = ({ doctors }) => {
  const classes = useStyles()

  return (
    <div>
      <Grid container spacing={3} className={classes.doctorContainer}>
        {doctors.map((doctor, idx) => (
          <Grid item xs={12} sm={6} lg={4} key={`grid_item${idx}`}>
            <Card className={classes.doctorCard}>
              <CardHeader
                action={<MedicalServicesIcon />}
                title={`${doctor.basic.first_name} ${doctor.basic.last_name}`}
                style={{ backgroundColor: 'lightgrey' }}
              />
              <CardContent>
                <Typography variant="body2">
                  <span className={classes.description}>NPI Number:</span>{' '}
                  {doctor.number}
                </Typography>
                <Typography variant="body2">
                  <span className={classes.description}>Addresses: </span>
                  <List>
                    {doctor.addresses.map((address, idx) => (
                      <ListItem key={`list_item${idx}`}>
                        {address.address_purpose === 'LOCATION' ? (
                          <HouseIcon />
                        ) : (
                          <MailIcon />
                        )}
                        <Typography component={'span'} variant='body2'>
                          {address.address_1}, {address.address_2},{' '}
                          {address.city}, {address.state}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
