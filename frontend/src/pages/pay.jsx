import {
  Box,
  Typography,
  CardContent,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Subscribe() {
  const location = useLocation();
  const email = location.state.email;
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data: response } = await axios.get(
      "http://localhost:5000/api/stripe/prices"
    );
    setPrices(response.data);
  };

  const createSession = async (priceId) => {
    const { data: response } = await axios.post(
      `http://localhost:5000/api/stripe/updateSubscription`,
      {
        priceId,
        email,
      }
    );
    window.location.href = response.url;
  };

  const backgroundColors = {
    periodic: "#80bfff",
    quartile: "#ff8080",
    annual: "#ff944d",
  };

  const noOfMonths = { periodic: 1, quartile: 3, annual: 12 };

  return (
    <Box
      sx={{
        height: { md: 1 },
        paddingY: { xs: 5, md: 20 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 20, md: 35 },
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Please choose a subscription plan.
      </Typography>

      <Grid
        container
        sx={{ paddingX: { xs: 5, sm: 30, md: 50 }, paddingY: 5 }}
        spacing={10}
      >
        {prices.toReversed().map((price) => (
          <>
            <Grid item xs={12} md={4}>
              <CardContent
                key={price.id}
                sx={{
                  backgroundColor: backgroundColors[price.nickname],
                  color: "white",
                  borderRadius: 3,
                  textAlign: "center",
                  paddingY: 20,
                  height: 350,
                  width: 300,
                  boxShadow: 10,
                  transition: "all ease 300ms",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.075)",
                  },
                }}
              >
                <Typography
                  sx={{ fontSize: 36, fontWeight: "bold" }}
                  gutterBottom
                >
                  {price.nickname.toUpperCase()}
                </Typography>
                <Typography variant="h3" component="div">
                  ₹{price.unit_amount / 100}
                </Typography>
                <Divider sx={{ color: "grey" }} />
                <Typography
                  variant="h6"
                  sx={{ fontSize: 16, marginTop: 3, fontWeight: "bold" }}
                >
                  Unlimited for {noOfMonths[price.nickname]} months
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 5,
                    fontWeight: "bolder",
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}
                  onClick={() => createSession(price.id)}
                >
                  Subscribe
                </Button>
              </CardContent>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
}

export default Subscribe;
