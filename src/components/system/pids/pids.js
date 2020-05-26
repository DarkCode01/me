import React from 'react';
import { useDrop } from 'react-dnd';
import { PIDComponent } from './pid';

export const PIDsComponent = ({ pids, moveInterface }) => {
  const [, drop] = useDrop({
    accept: 'PIDsComponent',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      moveInterface({
        pid: item.id,
        left: Math.round(item.left + delta.x),
        top: Math.round(item.top + delta.y)
      });

      return;
    }
  });

  return (
    <div ref={drop} className="desktop">
      { Object.keys(pids).map(key => (
        <PIDComponent
          key={Math.random() * 100}
          pid={pids[key]}
          id={key}
          top={pids[key].top}
          left={pids[key].left}
        />
      ))}
    </div>
  );
}