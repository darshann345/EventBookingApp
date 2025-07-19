import EventIcon from "../../assets/event.png";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import thumb from "../../assets/thumbsup.png";
import Calendar from "../Calendar/Calendar";
import { useState } from "react";
import { format } from "date-fns";

export default function HospitalCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  const eventName = details?.eventName ?? "Unnamed Event";
  const city = details?.city ?? "Unknown City";
  const state = details?.state ?? "Unknown State";
  const address = details?.address ?? "Address not available";
  const rating = typeof details?.rating === "number" ? details.rating : 0;
  const bookingTime = details?.bookingTime ?? "Time Not Set";
  const bookingDate = details?.bookingDate
    ? format(new Date(details.bookingDate), "dd MMMM yyyy")
    : "Date Not Set";

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap="wrap"
      >
        {/* Event Icon */}
        <Box
          component="img"
          src={EventIcon}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />

        {/* Event Info */}
        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            lineHeight={1}
          >
            {eventName}
          </Typography>

          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
            mb={0.5}
          >
            {`${city}, ${state}`}
          </Typography>

          <Typography fontSize={14} mb={1}>
            {address}
          </Typography>

          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="primary.green"
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>Registration Fee</Typography>
          </Stack>

          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

          <Stack
            direction="row"
            alignItems="center"
            bgcolor="primary.green"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component="img"
              src={thumb}
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {rating}
            </Typography>
          </Stack>
        </Box>

        {/* Booking Section */}
        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking ? (
            <>
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {!showCalendar
                  ? "Book FREE Event Entry"
                  : "Hide Booking Calendar"}
              </Button>
            </>
          ) : (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={bookingTime}
                variant="outlined"
                color="primary"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
              <Chip
                label={bookingDate}
                variant="outlined"
                color="success"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* Conditional calendar */}
      {showCalendar && (
        <Calendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}
