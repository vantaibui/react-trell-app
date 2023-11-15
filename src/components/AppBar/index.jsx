import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { useState } from "react";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import ModelSelect from "../ModelSelect";
import Profiles from "./Menus/Profiles";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Workspaces from "./Menus/Workspaces";

const AppBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Box
        px={2}
        sx={{
          width: "100%",
          height: (theme) => theme.trelloCustom.appBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          overflowX: "auto",
          bgcolor: (theme) =>
            theme.palette.mode == "dark" ? "#2c3e50" : "#1565c0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <AppsIcon sx={{ color: "#fff" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <SvgIcon
              component={TrelloIcon}
              fontSize="small"
              inheritViewBox
              sx={{ color: "#fff" }}
            />
            <Typography
              variant="span"
              sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "#fff" }}
            >
              Trello
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Workspaces />
            <Recent />
            <Templates />
            <Starred />
            <Button
              variant="outlined"
              startIcon={<LibraryAddIcon />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  border: "1px solid #fff",
                },
              }}
            >
              Create
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Search..."
            type="text"
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CloseIcon
                    fontSize="small"
                    sx={{
                      color: searchValue ? "#fff" : "transparent",
                      cursor: "pointer",
                    }}
                    onClick={() => setSearchValue("")}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              minWidth: "120px",
              maxWidth: "180px",
              "& label": { color: "#fff" },
              "& input": { color: "#fff" },
              "& label.Mui-focused": { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#fff" },
                "&:hover fieldset": { borderColor: "#fff" },
                "&.Mui-focused fieldset": { borderColor: "#fff" },
              },
            }}
          />
          <ModelSelect />
          <Tooltip title="Notification">
            <Badge badgeContent={4} color="warning" sx={{ cursor: "pointer" }}>
              <NotificationsNoneIcon sx={{ color: "#fff" }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon color="action" />
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
