import { MuiMarkdown } from "mui-markdown";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const MarkDownImage = styled.img`
  max-width: 100%;
`;

const overrides = {
  img: ({ alt, src }: { alt: string; src: string }) => (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "2em 0" }}>
      <MarkDownImage alt={alt} src={`${src}?q=80&h=600`} />
    </Box>
  ),
  p: (props: any) => <Typography component="div" variant="body1" {...props} />,
  h1: (props: any) => (
    <Typography
      component="h1"
      variant="h1"
      textAlign="center"
      marginBottom=".5em"
      {...props}
    />
  ),
  h2: (props: any) => (
    <Typography
      component="h2"
      variant="h2"
      textAlign="center"
      marginBottom=".5em"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      component="h3"
      variant="h3"
      textAlign="center"
      marginBottom=".5em"
      {...props}
    />
  ),
};
export const Parafraph = ({ text }: { text: string }) => (
  <MuiMarkdown overrides={overrides}>{text}</MuiMarkdown>
);
