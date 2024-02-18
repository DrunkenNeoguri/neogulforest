import { css } from "../../../../styled-system/css";

const section = css({
  display: "flex",
  flexDir: "column",
  height: "100vh",
  padding: "16px 16px 32px 16px",
  margin: "32px 0",
  boxSizing: "border-box",
});

const description = css({
  display: "flex",
  flexDir: "column",
  textAlign: "left",
  width: "100%",
  fontSize: "16px",
  lineHeight: "20px",
});

const h1 = css({
  fontWeight: "semibold",
  fontSize: "24px",
  lineHeight: "30px",
  whiteSpace: "pre-wrap",
});

const h2 = css({
  fontWeight: "semibold",
  fontSize: "20px",
  lineHeight: "24px",
  margin: "8px 0",
  whiteSpace: "pre-wrap",
});

const h3 = css({
  fontWeight: "semibold",
  fontSize: "16px",
  lineHeight: "20px",
  whiteSpace: "pre-wrap",
});

const articleLine = css({
  height: "4px",
  width: "95%",
  border: "2px solid white",
  borderRadius: "4px",
  backgroundColor: "white",
  margin: "16px 0",
});

const Text = css({
  fontWeight: "medium",
  fontSize: "12px",
  textAlign: "center",
  lineHeight: "26px",
  whiteSpace: "pre-wrap",
});

const infoBox = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  margin: "16px 12px 32px 12px",
  boxSizing: "border-box",
});

const mapBox = css({
  display: "flex",
  width: "100%",
  gap: "24px",
  fontWeight: "semibold",
});

const unOrderedList = css({
  display: "flex",
  flexDir: "column",
  gap: "16px",
  listStyleType: "disc",
  margin: "0 8px",
});

const orderedList = css({
  display: "flex",
  flexDir: "column",
  gap: "8px",
  listStyleType: "decimal",
  margin: "0 8px",
});

export const CheckInStyle = Object.assign(
  {},
  {
    section,
    description,
    h1,
    h2,
    h3,
    Text,
    infoBox,
    articleLine,
    unOrderedList,
    orderedList,
    mapBox,
  }
);
