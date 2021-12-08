import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  caption: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    paddingBottom: '1em',
    width: '100%',
  },

  textField: {
    width: '100%',
  },

  searchButton: {
    width: '100%',
  },

  inputCard: {
    maxWidth: 450,
    margin: '0 auto',
  },

  formControl: {
    justifyContent: 'center',
    minWidth: '10rem',
  },

  doctorContainer: {
    padding: '1em',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  doctorCard: {
    minWidth: 200,
    minHeight: 350,
    transitionProperty: 'transform',
    transitionDuration: '.25s',
    '&:hover': {
      transform: 'scale(1.05, 1.05)',
    },
  },

  description: {
    color: 'gray',
  },

  pageNumberList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
  },

  pageNumbers: {
    border: '1px solid gray',
    borderRadius: '10%',
    padding: '.5em .5em',
    marginLeft: '1em',
    transitionProperty: 'transform',
    transitionDuration: '.25s',
    '&:hover': {
      transform: 'scale(1.3, 1.3)',
    },
  },
}))
