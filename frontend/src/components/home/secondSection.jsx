import { Box, Grid, Typography } from "@mui/material";

function SecondSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        height: { md: "40%" },
        paddingY: { xs: 5, md: 10 },
        paddingX: { xs: 5, md: 25 },
        marginBottom: { xs: 25, md: 0 },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 65,
          fontFamily: "Times New Roman",
        }}
      >
        How can you upload?
      </Typography>

      <Grid container sx={{ marginTop: 5 }}>
        <Grid item xs={12} md={3} sx={{ display: "block" }}>
          <Box
            sx={{
              border: 1,
              height: 200,
              width: 200,
              borderRadius: 25,
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <Box component="img" src="/images/how1.jpg" sx={{ width: 1 }}></Box>
          </Box>
          <Typography sx={{ textAlign: "center", fontSize: 20, marginTop: 1 }}>
            Register on our website.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: "block" }}>
          <Box
            sx={{
              border: 1,
              height: 200,
              width: 200,
              borderRadius: 25,
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <Box component="img" src="/images/how2.jpg" sx={{ width: 1 }}></Box>
          </Box>
          <Typography sx={{ textAlign: "center", fontSize: 20, marginTop: 1 }}>
            Upload atleast 80 photos of model.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: "block" }}>
          <Box
            sx={{
              border: 1,
              height: 200,
              width: 200,
              borderRadius: 25,
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <Box component="img" src="/images/how3.jpg" sx={{ width: 1 }}></Box>
          </Box>
          <Typography sx={{ textAlign: "center", fontSize: 20, marginTop: 1 }}>
            Wait for atleast 24 hours.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: "block" }}>
          <Box
            sx={{
              border: 1,
              height: 200,
              width: 200,
              borderRadius: 25,
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <Box component="img" src="/images/how4.jpg" sx={{ width: 1 }}></Box>
          </Box>
          <Typography sx={{ textAlign: "center", fontSize: 20, marginTop: 1 }}>
            Your model will be uploaded to specific category.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SecondSection;
