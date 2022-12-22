import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to={"/home"}>
             Academy
            </Link>
          </Typography>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to={"/prova"}>
              schermata di prova
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to={"/mouse"}>
              schermata di Mouse
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to={"/fetch"}>
              schermata di Fetch
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to={"/login"}>
              FAI STO CRISTO DI LOGIN
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
