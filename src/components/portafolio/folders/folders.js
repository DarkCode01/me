import React from 'react';
import { useDrop } from 'react-dnd';
import { FolderOrFileComponent } from './folder';

export const FoldersComponent = ({ folders, moveBox }) => {
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

  return (
    <div ref={drop} className="desktop">
      { Object.keys(folders).map(key => (
        <FolderOrFileComponent
          key={Math.random() * 100}
          fileOrFolder={folders[key]}
          id={key}
          top={folders[key].top}
          left={folders[key].left}
        />
      ))}
    </div>
  );
}