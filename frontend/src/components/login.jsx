import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Login(props) {
  return (
    <Box
      sx={{
        height: { xs: "auto", md: 1 },
        padding: 3,
        marginBottom: { xs: 5, md: 0 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: { xs: 5, md: 10 },
        }}
      >
        Login
      </Typography>
      <Grid container sx={{ padding: { xs: 1, md: 3 } }} spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            name="email"
            type="email"
            label="Email"
            sx={{ width: 1 }}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            name="password"
            type="password"
            label="Password"
            sx={{ width: 1 }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ fontWeight: "bold" }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
      <Box
        flexGrow={1}
        sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ paddingX: 10, fontWeight: "bold" }}
          // eslint-disable-next-line react/prop-types
          onClick={() => props.setLogin(false)}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
