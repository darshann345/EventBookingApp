import { Box, Grid, Typography } from "@mui/material";

import EventIcon from "../../assets/eventhome.png";
import VenuesIcon from "../../assets/venue.png"
import TicketsIcon from "../../assets/ticket.png"
import WorkshopIcon from "../../assets/workshop.png"
import ServicesIcon from "../../assets/service.png"
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  const Services = useMemo(
    () => [
      { img: EventIcon, title: "Events" },
      { img: VenuesIcon, title: "Venues" },
      { img: TicketsIcon, title: "Tickets", active: true },
      { img: WorkshopIcon, title: "Workshops" },
      { img: ServicesIcon, title: "Services" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {Services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}