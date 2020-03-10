import React, { useState } from 'react';
import dayjs from 'dayjs';
import { parserPipe } from '../../utils/helpers-functions';


export const Terminal = () => {
  const [history, setHistory] = useState([
    parserPipe('welcome')
  ]);
  const [back, setBack] = useState(0);

  return (
    <div className="terminal-window" style={{ whiteSpace: 'pre-wrap' }}>
      <span className="terminal-prompt">
        { history.map(({ command, data, _time }) => (
          <span key={ command }>
            <b>jose@segura.polanco - / ➜ &#8287; { command } </b>
            <strong style={{ float: 'right' }}>
              { _time }
            </strong>
            <p>
              <b style={{ color: 'white' }}>{ data }</b>
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
              result = parserPipe(value);
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
        <strong style={{ float: 'right' }}>
          { dayjs().format('ddd HH:mm A') }
        </strong>
      </span>
    </div>
  );
}