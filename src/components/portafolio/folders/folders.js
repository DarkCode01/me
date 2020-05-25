import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import { FolderOrFileComponent } from './folder';

export const FoldersComponent = ({ folders }) => {
  const [data, setData] = useState(folders);
  const [, drop] = useDrop({
    accept: 'FoldersComponent',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      moveBox(
        item.id,
        Math.round(item.left + delta.x),
        Math.round(item.top + delta.y)
      );

      return;
    }
  });

  const moveBox = (id, left, top) => {
    setData(
      update(data, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }

  return (
    <div ref={drop} className="desktop">
      { Object.keys(data).map(key => (
        <FolderOrFileComponent
          key={Math.random() * 100}
          fileOrFolder={data[key]}
          id={key}
          top={data[key].top}
          left={data[key].left}
        />
      ))}
    </div>
  );
}