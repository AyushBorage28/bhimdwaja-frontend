import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        style={{
          padding: "2px 11px",
          fontSize: "13px",
          borderRadius: "0",
          fontWeight: "normal"
        }}
        className='mr-sm-2 ml-sm-5 mt-md-0 mt-3'
      ></Form.Control>
      <Button type='submit' style={{ backgroundColor: "#b27b23", padding: "5px 11px", borderRadius: "0" }} className=' mt-md-0 mt-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
