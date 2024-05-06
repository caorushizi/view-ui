import { useId, useMemo, useState } from "react";
import { center, left, managerWrapper, right } from "./styles.css";
import { DndContext } from "@dnd-kit/core";

import Draggable from "./Draggable";
import Droppable from "./Droppable";

const Manager = () => {
  const id = useId();
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable isDropped={isDropped} />;

  return (
    <DndContext onDragEnd={handleDragEnd} id={id}>
      <div className={managerWrapper}>
        <div className={left}>{!isDropped && draggableMarkup}</div>
        <div className={center}>
          <Droppable id="123123">{isDropped && draggableMarkup}</Droppable>
        </div>
        <div className={right}>123</div>
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === "123123") {
      setIsDropped(true);
    } else {
      setIsDropped(false);
    }
  }
};

export default Manager;
