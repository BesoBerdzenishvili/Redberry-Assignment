import { styled } from "../stitches.config";

const HeaderContainer = styled("header", {
  position: "relative",
  left: 0,
  top: 0,
  maxWidth: 798,
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "Helvetica Neue",
  fontStyle: "normal",
  color: "#1A1A1A",
  padding: "47px 0 12px 0",
});

const PageTitle = styled("p", {
  fontFamily: "Helvetica Neue",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 24,
});

const PageNumber = styled("p", {
  fontFamily: "Helvetica Neue",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 20,
});
const Hr = styled("hr", {
  border: "1px solid black",
});

export default function Header({ pageTitle, pageNumber }) {
  return (
    <HeaderContainer>
      <Container>
        <PageTitle>{pageTitle}</PageTitle>
        <PageNumber>{pageNumber}/3</PageNumber>
      </Container>
      <Hr />
    </HeaderContainer>
  );
}
