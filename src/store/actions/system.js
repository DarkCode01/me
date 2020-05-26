import { SYSTEM_TYPES } from '../actionsTypes/system';
import { createPID, logger } from '../../utils/helpers-functions';


export const initBoot = () => async dispatch => {
  await dispatch({
    type: SYSTEM_TYPES.BOOT_SYSTEM,
    payload: { isBooting: true }
  });

  logger('Init boot process');
}

export const stopBoot = () => async dispatch => {
  await dispatch({
    type: SYSTEM_TYPES.BOOT_SYSTEM,
    payload: { isBooting: false }
  });

  logger('Finished boot system ✅');
}

export const registerProcess = () => async dispatch => {
  const pid = createPID();

  await dispatch({
    type: SYSTEM_TYPES.REGISTER_PROCESS_PID,
    payload: { pid }
  });
  logger(`Porcess created - PID: ${pid}`);

  return pid;
}

export const registerConfigurationProcess = ({ pid, configuration }) => async dispatch => {
  await dispatch({
    type: SYSTEM_TYPES.REGISTER_CONFIGURATION_PID,
    payload: { pid, configuration }
  });

  logger(`PID: ${pid} is running on background`);
}

export const updatePositionWidget = ({ pid, top, left }) => async dispatch => {
  await dispatch({
    type: SYSTEM_TYPES.UPDATE_PROCESS_PID,
    payload: { pid, top, left }
  });
}

export const killProcess = ({ pid }) => async dispatch => {
  await dispatch({
    type: SYSTEM_TYPES.KILL_PROCESS_PID,
    payload: { pid }
  });

  logger(`Porcess killed - PID: ${pid}`);
}

export const killAllProcess = () => async dispatch => {
  await dispatch({ type: SYSTEM_TYPES.KILL_ALL_PROCESS, payload: {} });

  logger(`All process killed...`);
  console.clear();
}