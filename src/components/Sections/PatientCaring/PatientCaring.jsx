import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import tick from "../../../assets/tick-blue.png";
import eventlogo from "../../../assets/eventlogo.png";

export default function PatientCaring() {
  return (
    <Box py={{ xs: 4, md: 8 }} sx={{ background: "#E7F0FF" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-around"
        >
          {/* Logo Section (Left aligned) */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              component="img"
              src={eventlogo}
              alt="Event Logo"
              sx={{
                width: { xs: "250px", md: "280px" },
                height: "200px",
              }}

            />
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <Typography
              fontWeight={600}
              color="primary.main"
              mb={1}
              sx={{ textTransform: "uppercase", fontSize: 14 }}
            >
              Connecting People Through Events!!
            </Typography>

            <Typography
              variant="h3"
              mb={1}
              sx={{ fontWeight: 700, lineHeight: 1.2 }}
            >
              Event{" "}
              <Box component="span" color="primary.main">
                Tracking
              </Box>
            </Typography>

            <Typography
              color="#77829D"
              lineHeight={1.8}
              mb={4}
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                whiteSpace: "pre-line",

              }}
            >
              {`Our goal is to deliver an exceptional event experience in a courteous,
    respectful, and engaging manner. We hope you will allow us to help you
    stay updated and connected through our platform.`}
            </Typography>


            <List>
              {[
                "Stay Updated About Events",
                "Check Event Details Online",
                "Manage Your Bookings",
              ].map((text, index) => (
                <ListItem key={index} disableGutters sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <Box
                      component="img"
                      src={tick}
                      alt="Tick Icon"
                      height={20}
                      width={20}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#1B3C74",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}
