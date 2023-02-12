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
  fontFamily: "HelveticaNeue",
  fontStyle: "normal",
  color: "#1A1A1A",
  paddingBottom: 12,
});

const PageTitle = styled("p", {
  fontFamily: "HelveticaNeue",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 24,
});

const PageNumber = styled("p", {
  fontFamily: "HelveticaNeue",
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
