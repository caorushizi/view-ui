import React, { type FC, type PropsWithChildren } from "react";
import { useDraggable } from "@dnd-kit/core";
import { createStyles } from "antd-style";
import { draggable } from "./styles.css";
import Droppable from "./Droppable";

interface DraggableProps extends PropsWithChildren {
  isDropped: boolean;
}

const Draggable: FC<DraggableProps> = ({ children, isDropped }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    active,
    isDragging,
    node,
  } = useDraggable({
    id: "draggable",
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const renderComponent = () => {
    return <div>Flex</div>;
  };

  return (
    <div
      ref={setNodeRef}
      className={draggable}
      style={style}
      {...listeners}
      {...attributes}
    >
      {isDropped ? <Droppable id="flex"></Droppable> : renderComponent()}
    </div>
  );
};

export default Draggable;
