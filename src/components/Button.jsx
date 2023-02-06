import { useMemo } from "react";
import { css } from "../stitches.config";

export default function Button({
  as: Component = "button",
  variant,
  children,
  ...restProps
}) {
  const buttonStyles = useMemo(
    () =>
      css({
        fontSize: "16px",
        padding: "18px 60px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        "&:active": {
          position: "relative",
          top: "2px",
          left: "2px",
        },
        variants: {
          variant: {
            addBtn: {
              backgroundColor: "#62A1EB",
              color: "#ffffff",
            },
            nextPrevBtn: {
              backgroundColor: "#6B40E3",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#7949FF",
              },
              "&:active": {
                backgroundColor: "#512FAF",
              },
            },
          },
        },
      }),
    []
  );

  return (
    <Component {...restProps} className={buttonStyles({ variant })}>
      {children}
    </Component>
  );
}
