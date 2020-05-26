import React from 'react';
import { useDrag } from 'react-dnd';

export const PIDComponent = ({ pid, id, top, left }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'PIDsComponent' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  });

  if (isDragging) {
    return <div ref={drag} />
  }

  return (
    <div
      ref={drag}
      className="file-folder item"
      style={{
        top: pid.top,
        left: pid.left
      }}
      onClick={pid.open}
    >
      <span className="icon-file-folder">
        { pid.icon }
      </span>
    </div>
  );
}