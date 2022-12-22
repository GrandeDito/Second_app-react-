import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

import { Card, CardContent, Grid } from "@mui/material";

export default function Fetch() {
  const statoIniziale = {
    userId: "7543",
    id: "2",
    title: "",
    completed: "",
  };

  const [json, setJson] = useState(statoIniziale);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((responseJson) =>
        setJson((prevState) => ({
          ...prevState,
          title: responseJson.title,
          completed: responseJson.completed,
        }))
      );
  }, []);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())

//       .then((responseJson) =>
//         setJson({
//           userId: responseJson.userId,

//           id: responseJson.id,

//           title: responseJson.title,

//           completed: responseJson.completed,
//         })
//       );
//   }, []);

  return (
    <Grid align="center" marginTop={30}>
      <Card sx={{ width: 375, background: "#f5f5f5" }}>
        <CardContent>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Fetch da JsonPlaceholder
          </Typography>
          <Typography variant="h6" component="div">
            {statoIniziale.userId}
          </Typography>
          <Typography variant="h6" component="div">
            {statoIniziale.id}
          </Typography>
          <Typography variant="h6" component="div">
            {statoIniziale.title}
          </Typography>
          <Typography variant="h6" component="div">
            {statoIniziale.completed.toString}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
