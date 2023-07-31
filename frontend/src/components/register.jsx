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
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { validateForm } from "../utility/formValidation";

function Register(props) {
  const [passType, setPassType] = useState("password");
  const [confirmPassType, setConfirmPassType] = useState("password");
  const [register, setRegister] = useState(true);
  const [inputs, setInputs] = useState({ gender: "male" });
  const [error, setError] = useState({
    fullname: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleBlur = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let returnMsg = validateForm(name, value);
    if (name == "confirmpassword" && returnMsg == "") {
      if (value != inputs.password) returnMsg = "*Password does not match";
    }
    setError((values) => ({ ...values, [name]: returnMsg }));

    let valid = false;

    for (let item in error) {
      if (error[item] != "") valid = true;
    }
    setRegister(valid);
  };
  return (
    <Box
      sx={{
        height: { xs: "auto", md: 1 },
        padding: 3,
        marginBottom: { xs: 5, md: 0 },
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 3,
          color: "#2d8659",
        }}
      >
        Registration
      </Typography>
      <Grid container sx={{ padding: { xs: 1, md: 3 } }} spacing={2}>
        <Grid item xs={12}>
          <TextField
            error={error.fullname}
            name="fullname"
            label="Full Name"
            type="text"
            sx={{ width: 1 }}
            helperText={error.fullname}
            value={inputs.fullname || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={error.email}
            name="email"
            type="email"
            label="Email"
            sx={{ width: 1 }}
            helperText={error.email}
            value={inputs.email || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={error.number}
            name="number"
            type="text"
            label="Mobile Number"
            sx={{
              width: 1,
              "& .MuiFormHelperText-root": { whiteSpace: "pre-line" },
            }}
            helperText={error.number}
            value={inputs.number || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              defaultValue="male"
              onChange={handleChange}
            >
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
        <Grid item xs={12}>
          <TextField
            error={error.password}
            name="password"
            type={passType}
            label="Password"
            sx={{
              width: 1,
              "& .MuiFormHelperText-root": {
                whiteSpace: "pre-line",
              },
            }}
            helperText={error.password}
            value={inputs.password || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            InputProps={{
              endAdornment: (
                <VisibilityIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    if (passType == "password") setPassType("text");
                    else setPassType("password");
                  }}
                />
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={error.confirmpassword}
            name="confirmpassword"
            type={confirmPassType}
            label="Confirm Password"
            sx={{ width: 1 }}
            helperText={error.confirmpassword}
            value={inputs.confirmpassword || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            InputProps={{
              endAdornment: (
                <VisibilityIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    if (confirmPassType == "password")
                      setConfirmPassType("text");
                    else setConfirmPassType("password");
                  }}
                />
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              color: "blue",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            // eslint-disable-next-line react/prop-types
            onClick={() => props.setLogin(true)}
          >
            Already have an account? Sing In
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="success"
            sx={{ fontWeight: "bold", marginTop: 3, borderRadius: 25 }}
            disabled={register}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Register;
