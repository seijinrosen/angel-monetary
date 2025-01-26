import { Box } from "@mui/material";
import { memo } from "react";

export const Rules = memo(function Rules() {
	return (
		<Box
			component="ul"
			sx={{
				pl: 2,
			}}
		>
			<li>隣のスペースに行ける</li>

			<li>同じスペースは通れない</li>
		</Box>
	);
});
