import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Register from "../components/register";
import Login from "../components/login";

export default function Tabs() {
  const [login, setLogin] = useState(false);
  return (
    <Box
      sx={{
        paddingY: 10,
        height: "auto",
        backgroundColor: "#66cc99",
      }}
    >
      <Grid
        container
        sx={{
          borderRadius: { md: 5 },
          boxShadow: 15,
          height: { md: "auto" },
          overflow: "hidden",
          margin: "0 auto",
          marginBottom: { xs: 5, md: 0 },
          width: { md: 600 },
        }}
      >
        <Grid item xs={12}>
          {!login ? (
            <Register setLogin={setLogin} />
          ) : (
            <Login setLogin={setLogin} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
