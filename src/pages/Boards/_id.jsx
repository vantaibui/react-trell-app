import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchBoardDetailsAPI } from "~/apis";
import { mockData } from "~/apis/mock-data";
import AppBar from "~/components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

const Board = () => {
  const [board, setBoard] = useState();

  useEffect(() => {
    const boardId = "6552be03602935aef9c69c58";
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
