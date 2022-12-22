import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "./ButtonCustom";

export default function Prova() {
  const [provaState, setProvaState] = useState({ text: "Benvenuto!" });

  const navigate = useNavigate();

  function navigazione() {
    navigate("/mouse");
  }

  function handleChange(evento) {
    setProvaState({ text: evento.target.value });
  }
  return (
    <Grid align="center" marginTop={30}>
      <TextField
        label="Scrivi qui per cambiare lo stato"
        onChange={(evento) => handleChange(evento)}
        //    onChange={handleChange} senza arrow function
      ></TextField>
      <Typography>{provaState.text}</Typography>
      <Button variant="contained" onClick={navigazione}>
        Clicca per spostarti verso il prossimo esercizio
      </Button>
      <ButtonCustom text={"vai su fetch"} endpoint={"/fetch"}></ButtonCustom>
    </Grid>
  );
}
