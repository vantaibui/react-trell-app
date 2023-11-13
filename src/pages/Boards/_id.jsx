import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBar from "~/components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import { mockData } from "~/apis/mock-data";
import { fetchBoardDetailsAPI } from "~/apis";

const Board = () => {
  const [board, setBoard] = useState();

  useEffect(() => {
    const boardId = "6551cd370b072951d7a9aba8";
    fetchBoardDetailsAPI(boardId).then((board) => {
      setBoard(board);
    });
  }, []);

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
