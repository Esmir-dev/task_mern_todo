import React, { useState } from "react";
// import Card from "./Cards/Card";
import Header from "./Header/Header";
import Input from "./Input/Input";
import Members from "./Members/Members";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./style.css";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "To do",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card contendddt",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "In progress",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: "In review",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content",
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content",
        },
      ],
    },
    {
      id: 4,
      title: "Done",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content",
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content",
        },
      ],
    },
  ],
};

const Dashboard = () => {
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <div>
      <Header />
      <Members />
      <Input />
      <div className="board">
        <Board onCardDragEnd={handleCardMove} disableColumnDrag>
          {controlledBoard}
        </Board>
      </div>
    </div>
  );
};

export default Dashboard;
