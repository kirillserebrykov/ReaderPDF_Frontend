import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
export const CustomTextField = styled(TextField)({
	"& .MuiInput-input ": {
		color: "#ffff",
		fontSize: "15px",
		fontWeight: 500,
	},

	"& .MuiInputBase-inputMultiline::-webkit-scrollbar-thumb ": {
		border: "5px solid transparent",
		borderRadius: "100px",
	},
	"&  .MuiInputLabel-root": {
		color: "#cccccc",
		fontWeight: 700,
		fontSize: "15px",
	},
});
