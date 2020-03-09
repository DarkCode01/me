import React, { useState } from 'react';
import { process } from '../../utils/helpers-functions';

export const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [back, setBack] = useState(0);

  return (
    <div className="terminal-window" style={{ whiteSpace: 'pre-wrap' }}>
      <span className="terminal-prompt">
        { history.map(({ command, data }) => (
          <span key={ command }>
            <b>jose@segura.polanco - / ➜ &#8287; { command } </b>
            <p>
              <b>{ data }</b>
            </p>
          </span>
        ))}

        {/* Prompt of terminal */}
        <b>jose@segura.polanco - / ➜</b> &#8287;
        <input
          type="text"
          onKeyDown={event => {
            const value = event.target.value;
            let result = [];

            if (event.keyCode === 38) {  // to back on historu commands
              const index = (history.length - 1) - back;

              if (index >= 0) {
                event.target.value = history[index].command;
                return setBack(back + 1);
              }
            }

            if (event.keyCode === 13) {
              result = process(value, history);
              event.target.value = "";

              if (result.command === 'clear') return setHistory([]);

              return [
                setBack(0),
                setHistory([
                  ...history, ...[{ ...result, command: value }]]
                )
              ]
            }
          }}
        />
      </span>
    </div>
  );
}