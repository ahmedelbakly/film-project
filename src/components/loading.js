import React from 'react'
import {Spinner, Row} from 'react-bootstrap'

const Loading = () => {
  return (
    <Row className=" text-center pt-5 mt-5">
    <Spinner className="h1 p-5 m-auto" animation="border" variant="primary" />
    </Row> 
  )
}

export default Loading