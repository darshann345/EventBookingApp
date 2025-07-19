import { Box, Container, Grid, Typography } from "@mui/material";
import eventteam from "../../../assets/eventteam.png";

export default function EventTrackerCard() {
  return (
    <Box py={8} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid container alignItems="center" spacing={{ xs: 4, md: 10 }}>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Tracking events for you and your team.
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Event Tracker
            </Typography>

            <Typography
              sx={{
                color: "#77829D",
                lineHeight: 1.8,
                mb: 4,
                whiteSpace: "pre-line",
              }}
            >
              {`We provide comprehensive tools to help you track and manage
your events efficiently. Whether it's a small meeting or a large
conference, our platform ensures that you stay organized and
informed. All your event details are handled with the utmost care
and confidentiality.`}
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={eventteam}
              alt="Event Tracker Team"
              sx={{
                width: "100%",
                height: { xs: "auto", md: "400px" },
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
