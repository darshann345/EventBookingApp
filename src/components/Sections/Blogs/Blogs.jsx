import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <Box py={6}>
      <Container>
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Blog & News
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Read Our Latest News
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BlogCard />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}