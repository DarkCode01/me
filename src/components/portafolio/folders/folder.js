import React from 'react';
import { useDrag } from 'react-dnd';

export const FolderOrFileComponent = ({ fileOrFolder, id, top, left }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'FoldersComponent' },
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
        top: fileOrFolder.top,
        left: fileOrFolder.left
      }}
      onClick={() => alert('s')}
    >
      <span className="icon-file-folder">
        { fileOrFolder.icon }
      </span>
    </div>
  );
}