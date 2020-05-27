import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { parserPipe } from '../../../utils/helpers-functions';
import dayjs from 'dayjs';
import { SYSTEM_TYPES } from '../../../store/actionsTypes/system';


export const TerminalComponent = ({ window, pid }) => {
  const cache = useSelector(({ system }) => system.cache[pid]);
  const dispatch = useDispatch();
  const reference = useRef(null);
  const refHistory = useRef(null);
  const [back, setBack] = useState(0);
  const styleHistory = !window ? { } : {
    overflowY: 'hidden',
    maxHeight: '65vh'
  }

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

    // eslint-disable-next-line
  }, [ cache ]);

  return (
    <div className="terminal-window" style={{ whiteSpace: 'pre-wrap' }}>
      <span className="terminal-prompt">
        <div
          className="terminal-prompt-history"
          style={ styleHistory }
        >
          { cache.map(({ command, data, _time }) => (
            <span key={ uuid() }>
              <b>jm@segura.polanco - / ➜ &#8287; { command } </b>
              <strong style={{ float: 'right' }}>
                { _time }
              </strong>
              <p>
                <b style={{ color: 'white' }}>{ data }</b>
              </p>
            </span>
          ))}
          <span ref={refHistory}></span>
        </div>

        {/* Prompt of terminal */}
        <b>jm@segura.polanco - / ➜</b> &#8287;
        <input
          autoFocus
          ref={reference}
          type="text"
          onKeyDown={event => {
            const value = event.target.value;
            let result = [];

            if (event.keyCode === 38) {  // to back on historu commands
              const index = (cache.length - 1) - back;

              if (index >= 0) {
                event.target.value = cache[index].command;
                return setBack(back + 1);
              }
            }

            if (event.keyCode === 13) {
              result = parserPipe(value);
              event.target.value = "";

              if (result.command === 'clear') {
                return dispatch({
                  type: SYSTEM_TYPES.CLEAR_CACHE_PROCESS_PID,
                  payload: { pid: pid }
                });
              };

              return [
                setBack(0),
                dispatch({
                  type: SYSTEM_TYPES.UPDATE_CACHE_PROCESS_PID,
                  payload: { pid: pid, data: [{ ...result, command: value }] }
                })
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