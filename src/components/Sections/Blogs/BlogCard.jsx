import { Box, Stack, Typography } from "@mui/material";
import person from "../../../assets/person.png";
import EventBlog from "../../../assets/eventblog.jpg";

export default function BlogCard() {
  return (
    <Box
      border="1px solid rgba(0,0,0,0.1)"
      borderRadius={2}
      width={{ xs: "100%", sm: 250, md: 280 }}
      overflow="hidden"
      sx={{ flexShrink: 0 }}
    >
      <Box component="img" src={EventBlog} width="100%" height={160} />
      <Box p={1.5} gap={10}>
        <Typography
          color="#77829D"
          fontWeight={500}
          mb={1}
          fontSize={{ xs: 11, md: 14 }}
        >
          Event | March 31, 2022
        </Typography>
        <Typography
          component="h3"
          color="#1B3C74"
          fontSize={{ xs: 13, md: 16 }}
          fontWeight={500}
          lineHeight={1.3}
          mb={1.5}
        >
          5 Strategies to Maximize Your Event Attendance
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box component="img" src={person} height={28} width={28} />
          <Typography color="#1B3C74" fontSize={{ xs: 11, md: 14 }}>
            John Doe
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
