import update from 'immutability-helper';
import { SYSTEM_TYPES } from '../actionsTypes/system';

const DEFAULT_STATE = {
  // Structure of memory
  // memory: {
  //   '<#PID>': {
  //     top: 20,
  //     left: 150,
  //     name: $pid,
  //     open: '',
  //     widget: $WidgetComponent,
  //     data: $data -> Cache history of process
  //   }
  // }
  isBooting: true,
  memory: { },
  cache: { }
}

export default function systemReducer(state=DEFAULT_STATE, { type, payload }) {
  switch(type) {
    case SYSTEM_TYPES.BOOT_SYSTEM:
      return { ...state, isBooting: payload.isBooting }
    case SYSTEM_TYPES.REGISTER_PROCESS_PID:
      return {
        memory: { ...state.memory, [ payload.pid ]: {} },
        cache: { ...state.cache, [ payload.pid ]: [] }
      }
    case SYSTEM_TYPES.REGISTER_CONFIGURATION_PID:
      return {
        cache: { ...state.cache },
        memory: {
          ...state.memory,
          [ payload.pid ]: { ...payload.configuration }
        }
      };
    case SYSTEM_TYPES.UPDATE_PROCESS_PID:
      return {
        cache: { ...state.cache },
        memory: update(state.memory, {
          [ payload.pid ]: {
            $merge: { left: payload.left, top: payload.top }
          },
        })
      };
    case SYSTEM_TYPES.UPDATE_CACHE_PROCESS_PID:
      return {
        memory: { ...state.memory },
        cache: {
          ...state.cache,
          [ payload.pid ]: [ ...state.cache[payload.pid], ...payload.data ]
        }
      }
    case SYSTEM_TYPES.CLEAR_CACHE_PROCESS_PID:
      return {
        memory: { ...state.memory },
        cache: { ...state.cache, [ payload.pid ]: [] }
      }
    case SYSTEM_TYPES.KILL_PROCESS_PID:
      delete state.memory[payload.pid];
      delete state.cache[payload.pid];

      return { memory: { ...state.memory }, cache: { ...state.cache } }
    case SYSTEM_TYPES.KILL_ALL_PROCESS:
      return { ...state, memory: {}, cache: {} }
    default:
      return state;
  }
}