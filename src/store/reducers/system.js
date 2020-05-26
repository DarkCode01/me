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
  memory: { }
}

export default function systemReducer(state=DEFAULT_STATE, { type, payload }) {
  switch(type) {
    case SYSTEM_TYPES.BOOT_SYSTEM:
      return { ...state, isBooting: payload.isBooting }
    case SYSTEM_TYPES.REGISTER_PROCESS_PID:
      return { memory: { ...state.memory, [ payload.pid ]: {} } }
    case SYSTEM_TYPES.REGISTER_CONFIGURATION_PID:
      return {
        memory: {
          ...state.memory,
          [ payload.pid ]: { ...payload.configuration }
        }
      };
    case SYSTEM_TYPES.UPDATE_PROCESS_PID:
      return {
        memory: update(state.memory, {
          [ payload.pid ]: {
            $merge: { left: payload.left, top: payload.top }
          },
        })
      };
    case SYSTEM_TYPES.KILL_PROCESS_PID:
      delete state.memory[payload.pid];

      return { memory: { ...state.memory } }
    case SYSTEM_TYPES.KILL_ALL_PROCESS:
      return { ...state, memory: {} }
    default:
      return state;
  }
}