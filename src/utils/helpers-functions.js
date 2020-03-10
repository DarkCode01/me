import dayjs from 'dayjs';
import { executedCommand } from './command';

const OPTIONS = /--[a-zA-Z]*/ // To get all options like --option

export const parserPipe = value => {
  if (value.indexOf('|') !== -1) {
    // return value.split('|');
    
    const commandsSeparated = value.split('|').map(command => command.trim());
    const results = pipeProcess(commandsSeparated, 0, '');

    return results;
  }

  return process(value);
}

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

export const pipeProcess = (commands, index, lastResultCommand) => {
  if (index === commands.length) return lastResultCommand;

  const param = typeof(lastResultCommand) === 'object' ? lastResultCommand.data : '';

  return pipeProcess(
    commands,
    index + 1,
    process(`${commands[index]} ${param}`)
  );
}

export const process = value => {
  const { command, options, params } = parserInput(value);

  return {
    command: command,
    data: executedCommand({ command, options, params }),
    _time: dayjs().format('ddd HH:mm A')
  }
}
