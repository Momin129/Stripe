import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Register from "../components/register";
import Login from "../components/login";

export default function Tabs() {
  const [login, setLogin] = useState(false);
  return (
    <Box
      sx={{
        paddingTop: 10,
        paddingX: { xs: 3, md: 50 },
        height: "80%",
      }}
    >
      <Grid
        container
        sx={{
          border: { xs: 1, md: 2 },
          borderRadius: 5,
          height: { md: 700 },
          overflow: "hidden",
          marginBottom: { xs: 5, md: 0 },
        }}
      >
        <Grid
          item
          md={4}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            component={"img"}
            src={!login ? "/images/register.jpg" : "/images/login.jpg"}
            sx={{ width: 1, height: 1 }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={8}>
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
