import dayjs from 'dayjs';
import { executedCommand } from './command';

const OPTIONS = /--[a-zA-Z]*/ // To get all options like --option

export const parserInput = value => {
  const [command, params] = value.split(' ');
  let options = OPTIONS.exec(params);
  options = options != null ? options[0] : '';

  return {
    command: command.toLowerCase(),
    options: options.toLowerCase(),
    params: params
  }
}

export const process = value => {
  const { command, options, params } = parserInput(value);

  return {
    command: command,
    data: executedCommand({ command, options, params }),
    _time: dayjs().format('ddd HH:mm: A')
  }
}