import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ButtonCustom(props) {

    const navigate = useNavigate();

    function navigazione(){
        navigate(props.endpoint);
    }

  return (
    <Button variant="contained" onClick={navigazione}>{props.text}</Button>
  )
}
