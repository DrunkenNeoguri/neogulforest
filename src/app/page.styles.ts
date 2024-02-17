import { css } from "../../styled-system/css";

const section = css({
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: "16px",
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
  margin: "8px",
  whiteSpace: "pre-wrap",
});

const Text = css({
  fontWeight: "medium",
  fontSize: "16px",
  textAlign: "center",
  lineHeight: "20px",
  whiteSpace: "pre-wrap",
});

const form = css({
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  width: "90%",
  margin: "16px",
});

const input = css({
  fontWeight: "medium",
  fontSize: "16px",
  textAlign: "center",
  lineHeight: "20px",
  whiteSpace: "pre-wrap",
  color: "#252525",
  height: "44px",
  width: "100%",
  borderRadius: "8px",
});

const button = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "medium",
  fontSize: "20px",
  lineHeight: "24px",
  backgroundColor: "lightskyblue",
  color: "white",
  borderRadius: "8px",
  width: "100%",
  height: "44px",
});

const imageBox = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "8px solid #87CEEB",
  borderRadius: "90%",
  width: "196px",
  height: "196px",
  margin: "16px",
  overflow: "hidden",
});

export const homeStyle = Object.assign(
  {},
  { section, imageBox, h1, h2, Text, form, input, button }
);
