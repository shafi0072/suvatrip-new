const { useMediaQuery } = require("@mui/material");

export default function screenSize(sz) {
  const matches = useMediaQuery(`(max-width:${sz})`);
  return matches;
}
