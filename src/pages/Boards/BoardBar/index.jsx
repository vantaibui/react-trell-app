import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const stylesChip = {
  color: "#fff",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "#fff",
  },
  "&:hover": {
    color: "primary.50",
  },
};

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        borderBottom: "1px solid #00bfa5",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label="Dashboard"
          clickable
          sx={stylesChip}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          clickable
          sx={stylesChip}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add To Drive"
          clickable
          sx={stylesChip}
        />
        <Chip
          icon={<BoltIcon />}
          label="Automation"
          clickable
          sx={stylesChip}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          sx={stylesChip}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            "&:hover": {
              borderColor: "#fff",
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          total={24}
          sx={{
            "& .MuiAvatar-root": {
              width: "30px",
              height: "30px",
              fontSize: "16px",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              "&:first-of-type": {
                bgcolor: "#a4b0be"
              }
            },
          }}
        >
          <Tooltip title="Trello app">
            <Avatar
              alt="Remy Sharp"
              src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            />
          </Tooltip>
          <Tooltip title="Trello app">
            <Avatar
              alt="Travis Howard"
              src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/ijsi5fzb1nbkbhxa2gc1.jpg"
            />
          </Tooltip>
          <Tooltip title="Trello app">
            <Avatar
              alt="Remy Sharp"
              src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            />
          </Tooltip>
          <Tooltip title="Trello app">
            <Avatar
              alt="Remy Sharp"
              src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
