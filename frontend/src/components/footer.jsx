import { Box, Grid, Typography } from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#333333",
        color: "white",
        paddingY: 5,
        paddingX: { md: 25 },
        fontFamily: "Arial",
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={3}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { xs: 20, md: 25 },
            }}
          >
            <HourglassBottomIcon />
            Artvista
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            sx={{
              textAlign: "center",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Contact
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            sx={{
              textAlign: "center",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            About
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="a"
            sx={{
              textAlign: "center",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => navigate("/register")}
          >
            Register
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
