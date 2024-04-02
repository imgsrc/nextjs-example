import { Alert, AlertTitle } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import styled from '@emotion/styled'

const QuoteComponent = styled(Alert)`
    .MuiAlert-message {
        width: 100%;
        text-align: center;
    }
`
export const Quote = ({ quote, author }: { quote: string; author: string }) => (
  <QuoteComponent severity="info" icon={<AutoStoriesIcon />}>
    <AlertTitle>{quote}</AlertTitle>
    author - <strong>{author}</strong>
  </QuoteComponent>
);
