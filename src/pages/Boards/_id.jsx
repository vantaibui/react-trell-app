import { Container } from "@mui/material";
import React from "react";
import AppBar from "~/components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import { mockData } from "~/apis/mock-data";

const Board = () => {
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
    >
      <AppBar />
      <BoardBar board={mockData.board} />
      <BoardContent board={mockData.board} />
    </Container>
  );
};

export default Board;
