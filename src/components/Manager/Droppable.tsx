import React, { type FC, type PropsWithChildren } from "react";
import clsx from "clsx";
import { useDroppable } from "@dnd-kit/core";
import { droppable } from "./styles.css";

interface DroppableProps extends PropsWithChildren {
  id: string;
}

const Droppable: FC<DroppableProps> = ({ children, id }) => {
  const { isOver, over, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  const cls = clsx({
    [droppable]: !children,
  });

  return (
    <div className={cls} ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
