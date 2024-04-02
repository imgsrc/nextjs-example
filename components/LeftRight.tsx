import { Box } from "@mui/material";
import { renderComponent } from "@/src/renderer";
import styled from "@emotion/styled";

const LeftRightImage = styled.img`
  max-width: 100%;
`;

export const LeftRight = ({
  left,
  right,
  image,
}: {
  left: any;
  right: any;
  image: any;
}) => (
  <Box
    sx={{
      display: { xs: "flex", md: "grid" },
      flexDirection: "column",
      gridTemplateColumns: "1fr 1fr",
      gap: 4,
    }}
  >
    {left && renderComponent(left)}
    <LeftRightImage
      src={`https:${image?.fields?.file?.url}`}
      alt={image?.fields?.description}
    />
    {right && renderComponent(right)}
  </Box>
);
