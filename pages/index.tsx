import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h1" component="h1">
        Today I Learned
      </Typography>
      <Typography variant="h2" component="h2">
        Enter the Blog
      </Typography>
      <Link passHref href="/blog">
        Enter blog
      </Link>
    </Box>
  );
}
