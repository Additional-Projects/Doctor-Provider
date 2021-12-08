import React from 'react'
import { useStyles } from './styles'

export const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const classes = useStyles()
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className={classes.pageNumberList}>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={classes.pageNumbers}>
            <a onClick={() => paginate(pageNumber)} href="!#">
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
