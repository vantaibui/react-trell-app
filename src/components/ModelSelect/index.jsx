import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

const stylesMenuItem = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

const ModelSelect = () => {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <FormControl size="small" sx={{ minWidth: "120px" }}>
      <InputLabel
        id="label-select-mode"
        sx={{
          color: "#fff",
          "&.Mui-focused": { color: "#fff" },
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-mode"
        id="select-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: "#fff",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          ".MuiSvgIcon-root": {
            color: "#fff",
          },
        }}
      >
        <MenuItem value={"light"}>
          <Box sx={stylesMenuItem}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value={"dark"} sx={stylesMenuItem}>
          <Box sx={stylesMenuItem}>
            <Brightness4Icon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value={"system"} sx={stylesMenuItem}>
          <Box sx={stylesMenuItem}>
            <SettingsSuggestIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ModelSelect;
