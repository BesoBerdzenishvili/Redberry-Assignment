import React from "react";
import { styled } from "../stitches.config";

const Title = styled("p", {
  marginTop: 25,
  fontWeight: "bolder",
});

const Dates = styled("p", {
  color: "#919191",
  margin: "7px 0 16px 0",
  fontStyle: "italic",
});

export default function ({
  position,
  organisation,
  startDate,
  endDate,
  description,
}) {
  return (
    <div>
      <Title>
        {position && position + ","} {organisation}
      </Title>
      <Dates>
        {startDate && startDate} {startDate && "-"} {endDate}
      </Dates>
      <p>{description}</p>
    </div>
  );
}
