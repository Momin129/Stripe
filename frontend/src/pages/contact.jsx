import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        padding: 5,
        height: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/images/contact.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          border: 1,
          borderRadius: 3,
          height: "auto",
          width: 600,
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontSize: 45,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#333333",
            color: "white",
          }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={2} marginTop={2} padding={5}>
          <Grid item xs={12}>
            <TextField label="Your Name" sx={{ width: 1 }} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" sx={{ width: 1 }} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message" multiline rows={4} sx={{ width: 1 }} />
          </Grid>
        </Grid>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#333333",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            paddingY: 3,
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ fontWeight: "bold", paddingX: 15 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
