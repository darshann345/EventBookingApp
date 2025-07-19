import { Box, Container } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import offer1 from "../../../assets/eventoffer1.png";
import offer2 from "../../../assets/eventoffer2.png";
import divSwipper from "../../../assets/div.swiper-pagination.png";

export default function Offers() {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          {[offer1, offer2, offer1, offer2, offer1, offer2].map((img, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={img}
                alt={`Offer ${index + 1}`}
                sx={{
                  width: "100%",
                  maxWidth: 280,
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                  borderRadius: 2,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          mb: 2,
        }}
      >
        <img src={divSwipper} alt="Div Swiper" />
      </Box>
    </Box>
  );
}
