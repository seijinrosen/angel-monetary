import { Button } from "@mui/material";

const Masu = ({
  id,
  text,
  tootta,
  width,
  height,
  zIndex,
  disabled,
  onClick,
  top,
  right,
  bottom,
  left,
  pt,
  pr,
  pb,
  pl,
}: {
  id: number;
  text: string;
  tootta: boolean;
  width: string;
  height: string;
  disabled: boolean;
  onClick: () => void;
  zIndex?: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}) => {
  return (
    <Button
      variant={tootta ? "outlined" : "contained"}
      disabled={disabled}
      onClick={onClick}
      sx={{
        position: "absolute",
        border: "solid 1px",
        borderRadius: 0,
        fontSize: "small",
        width: width,
        height: height,
        zIndex: zIndex,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        pt: pt,
        pr: pr,
        pb: pb,
        pl: pl,
      }}
    >
      {text}
    </Button>
  );
};

export default Masu;
