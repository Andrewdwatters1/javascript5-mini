import React from 'react';

export default function Movie(props) {
  console.log(props)
  return (
      <p>{props.movie}</p>
  )  
}