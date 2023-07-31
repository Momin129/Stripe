import { Box, Typography } from "@mui/material";

function ThirdSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#e6e6e6",
        height: { md: "60%" },
        paddingY: { xs: 5, md: 5 },
        paddingX: { xs: 5, md: 25 },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 65,
          fontFamily: "Arial",
        }}
      >
        Videos
      </Typography>
      <Box
        component={"iframe"}
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        sx={{ width: 1, height: 450, marginTop: 2 }}
      ></Box>
    </Box>
  );
}

export default ThirdSection;
