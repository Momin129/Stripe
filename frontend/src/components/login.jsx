import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Login(props) {
  return (
    <Box
      sx={{
        height: { md: "100%" },
        padding: 3,
        paddingY: 15,
        marginBottom: { xs: 5, md: 0 },
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: { xs: 5, md: 10 },
          color: "#2d8659",
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
        <Grid item xs={12}>
          <Typography
            sx={{
              color: "blue",
              fontWeight: "bold",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            // eslint-disable-next-line react/prop-types
            onClick={() => props.setLogin(false)}
          >
            Don't have an account? Sing Un
          </Typography>
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
            sx={{ fontWeight: "bold", marginTop: 5 }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
