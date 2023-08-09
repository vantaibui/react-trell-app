import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Column from "./Column/Column";
import React from "react";
import { NoteAdd } from "@mui/icons-material";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

const ListColumns = ({ columns }) => {
  return (
    <SortableContext
      items={columns?.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar-track": {
            m: 2,
          },
        }}
      >
        {columns?.map((column, index) => {
          return <Column key={column?._id + index} column={column} />;
        })}
        {/* Box  add new column*/}
        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            mx: 2,
            borderRadius: "6px",
            height: "fit-content",
            bgcolor: "#ffffff3d",
          }}
        >
          <Button
            startIcon={<NoteAdd />}
            sx={{
              color: "#fff",
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              pl: 2.5,
              py: 1, // py: 8px
            }}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
};

export default ListColumns;
