import React from 'react'
import { useParams } from 'react-router'

const CharacterView = () => {
  const param = useParams()
  console.log(param)
  
  return (
    <div>CharacterView</div>
  )
}

export default CharacterView