import React from "react";
import Header from "./Header"
import ListCard from "./ListCard"

const TaskList = () => {
  return (
    <div>
      <Header text="Tasks" add="+" />
      <ListCard />
    </div>
  )
}

export default TaskList;
