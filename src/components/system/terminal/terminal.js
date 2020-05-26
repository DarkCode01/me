import React, { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { parserPipe } from '../../../utils/helpers-functions';


export const TerminalComponent = ({ window, configuration }) => {
  const reference = useRef(null);
  const refHistory = useRef(null);
  const [back, setBack] = useState(0);
  const [history, setHistory] = useState([ parserPipe('welcome'), parserPipe('help') ]);
  const styleHistory = !window ? { } : {
    overflowY: 'hidden',
    maxHeight: '65vh'
  }
  configuration = configuration || {
    prompt: { },
    promptInput: { },
    result: { }
  }
  
  // To scroll button
  useEffect(() => {
    if (window) {
      refHistory.current.scrollIntoView({
        behavior: 'smooth',  block: 'end', inline: 'end'
      });
    } else {
      reference.current.scrollIntoView({
        behavior: 'smooth',  block: 'end', inline: 'end'
      });
    }
  });

  return (
    <div className="terminal-window" style={{ whiteSpace: 'pre-wrap' }}>
      <span className="terminal-prompt" style={ configuration.prompt } >
        <div
          className="terminal-prompt-history"
          style={ styleHistory }
        >
          { history.map(({ command, data, _time }) => (
            <span key={ uuid() }>
              <b>jm@segura.polanco - / ➜ &#8287; { command } </b>
              <strong style={{ float: 'right' }}>
                { _time }
              </strong>
              <p>
                <b style={{ color: 'white', ...configuration.result  }}>{ data }</b>
              </p>
            </span>
          ))}
          <span ref={refHistory}></span>
        </div>

        {/* Prompt of terminal */}
        <b>jm@segura.polanco - / ➜</b> &#8287;
        <input
          ref={reference}
          type="text"
          style={ configuration.promptInput }
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