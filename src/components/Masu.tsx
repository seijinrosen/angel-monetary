import { Button } from "@mui/material";

const Masu = ({
  id,
  text,
  width,
  height,
  zIndex,
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
  width: string;
  height: string;
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
      variant="contained"
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
