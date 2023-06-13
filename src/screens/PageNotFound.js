import React from 'react'
import { Container } from 'react-bootstrap'

const PageNotFound = () => {
  return (
    <Container className="py-3 content-container" fluid>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
          </div>
          <a href="/">Go TO Homepage</a>
        </div>
      </div>
    </Container>
  )
}

export default PageNotFound