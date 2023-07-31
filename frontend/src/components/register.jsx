import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

function Register(props) {
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
          marginTop: 3,
        }}
      >
        Registration
      </Typography>
      <Grid container sx={{ padding: { xs: 1, md: 3 } }} spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            name="fullname"
            label="Full Name"
            type="text"
            sx={{ width: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="email"
            type="email"
            label="Email"
            sx={{ width: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="number"
            type="text"
            label="Mobile Number"
            sx={{ width: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="gender" defaultValue="male">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="others"
                control={<Radio />}
                label="Others"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="password"
            type="password"
            label="Password"
            sx={{ width: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="confirmpassword"
            type="password"
            label="Confirm Password"
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
            Register
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
          onClick={() => props.setLogin(true)}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
}

export default Register;
