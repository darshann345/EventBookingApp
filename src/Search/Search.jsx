import { Container, Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EventCard from "../components/EventCard/EventCard";
import icon from "../assets/tick.png";
import eventoffer2 from "../assets/eventoffer2.png";
import SearchHospital from "../components/SearchEvents/SearchEvents";
import BookingModal from "../components/BookingModal/BookingModal";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";
import NavBar from "../components/NavBar/NavBar";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [events, setEvents] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  useEffect(() => {
    const rawState = searchParams.get("state");
    const rawCity = searchParams.get("city");

    // Ensure capitalization matches what the test expects
    setState(capitalize(rawState));
    setCity(capitalize(rawCity));
  }, [searchParams]);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setEvents([]);

      try {
        const apiUrl = `https://eventdata.onrender.com/events?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`;
        const response = await axios.get(apiUrl);
        setEvents(response.data || []);
      } catch (error) {
        console.error("Event fetch failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch only when both are present and properly capitalized
    if (state && city) {
      // Delay fetch if needed to let state update propagate
      setTimeout(fetchEvents, 200);
    }
  }, [state, city]);

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <>
      <NavBar />
      <Box sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}>
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              transform: "translateY(50px)",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <SearchHospital />
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          {events.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography component="h1" fontSize={24} fontWeight={500} mb={2}>
                {`${events.length} events available in ${city}`}
              </Typography>

              <Stack direction="row" spacing={2}>
                <img src={icon} alt="verified icon" height={24} width={24} />
                <Typography color="#787887">
                  Book tickets with minimum wait-time & verified event details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr={{ md: "24px" }}
            >
              {events.map((event) => (
                <EventCard
                  key={event.eventName}
                  details={event}
                  availableSlots={availableSlots}
                  handleBooking={handleBookingModal}
                />
              ))}

              {isLoading && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Loading...
                </Typography>
              )}

              {!state || !city ? (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Please select a state and city
                </Typography>
              ) : null}

              {events.length === 0 && !isLoading && state && city && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  No events found in {city}, {state}
                </Typography>
              )}
            </Stack>

            <Box component="img" src={eventoffer2} width={360} height="auto" alt="banner" />
          </Stack>
        </Container>

        <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
        />

        <AutohideSnackbar
          open={showBookingSuccess}
          setOpen={setShowBookingSuccess}
          message="Booking Successful"
        />
      </Box>
    </>
  );
}
