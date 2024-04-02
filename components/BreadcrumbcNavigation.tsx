import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Button,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

interface BreadcrumbcNavigationProps {
  breadcrumbs: {
    href: string;
    title: string;
  }[];
  current: string;
}

export const BreadcrumbcNavigation = ({
  breadcrumbs,
  current,
}: BreadcrumbcNavigationProps) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (_: any, inputValue: string) => {
    setValue(inputValue);
    if (inputValue.trim().length < 3) {
      return;
    }
    axios(`/api/search?query=${inputValue}`).then((res) => {
      setData(res?.data);
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { sm: "center", xs: "flex-start" },
        maxWidth: "1440px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ marginY: "1em" }}
      >
        {breadcrumbs.map(({ href, title }) => (
          <Link
            key={title}
            passHref
            href={href}
            style={{ color: "inherit" }}
            legacyBehavior
          >
            <MuiLink underline="hover" color="inherit" href={href}>
              {title}
            </MuiLink>
          </Link>
        ))}
        <Typography color="text.primary">{current}</Typography>
      </Breadcrumbs>
      <Autocomplete
        id="free-solo-demo"
        sx={{
          ml: "auto",
          mr: { xs: "auto", sm: 0 },
          width: { xs: "100%", sm: "auto" },
          minWidth: 300,
          maxWidth: "100%",
        }}
        value={value}
        onInputChange={handleChange}
        freeSolo
        options={data.map((option) => option?.title)}
        renderOption={(option) => {
          const post = data.filter((item) => item?.title === option?.key)[0];
          return (
            <Link
              href={post?.href}
              passHref
              key={post?.href}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button
                variant="text"
                sx={{ display: "block", textAlign: "left" }}
                onClick={() => {
                  setData([]);
                  setValue("");
                }}
              >
                {post?.title}
              </Button>
            </Link>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search article"
          />
        )}
      />
    </Box>
  );
};
