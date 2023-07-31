import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FirstSection() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#333333",
        height: { md: "60%" },
        color: "white",
        paddingY: { xs: 5, md: 10 },
        paddingX: { xs: 5, md: 25 },
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: { xs: 40, md: 100 },
              fontFamily: "Trebuchet MS",
              letterSpacing: 10,
            }}
          >
            ARTVISTA
          </Typography>
          <Box
            sx={{
              fontSize: 25,
              width: { xs: 320, md: 450 },
              wordWrap: "break-word",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            ducimus debitis placeat eaque tempore nemo aperiam, obcaecati
            dolorem doloribus necessitatibus vero. Qui sint nostrum inventore,
            quaerat eaque commodi alias distinctio.
          </Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: "bold",
              fontSize: 25,
              marginTop: 5,
              paddingX: { xs: 12, md: 20 },
            }}
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">DEMO MODEL</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FirstSection;
