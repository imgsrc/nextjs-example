import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface BlogCoverProps {
  title: string;
  description: string;
  cover: {
    fields: {
      description: string;
      file: {
        url: string;
      };
    };
  };
  slug: string;
}

export const BlogCover = ({
  title,
  description,
  cover,
  slug,
}: BlogCoverProps) => (
  <Link passHref href={`/blog/${slug}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https:${cover?.fields?.file?.url}?h=200`}
        title={cover?.fields?.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h4">
          {title}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ display: { sm: "block", xs: "none" } }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Link>
);
