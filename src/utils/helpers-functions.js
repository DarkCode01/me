import dayjs from 'dayjs';
import { v4 as PID } from 'uuid';
import { INFORMATION, executedCommand } from './command';

const OPTIONS = /--[a-zA-Z]*/ // To get all options like --option

export const PREFIXES = [
  '(FullStack) Web Developer <3',
  'I ❤️ Open Source',
  'I ❤️ Linux projects',
  'Lover of Lambda Calculus',
  'Functional Programming ❤️',
  'Elixir ❤️'
]

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

export const createPID = () => PID();

export const logger = (info, type='log') => {
  try {
    console[type](`[${dayjs().format('ddd HH:mm A')}]: ${info}`);
  } catch(err) {
    console.error(`[${dayjs().format('ddd HH:mm A')}]: Type: {type} not exixts as color.`);
    console.log(`[${dayjs().format('ddd HH:mm A')}]: ${info}`);
  }
}

export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const mocksFiles = [
  { name: 'Github', open: () => executedCommand({ command: 'open', params: INFORMATION.github }) },
  { name: 'Linkedin', open: () => executedCommand({ command: 'open', params: INFORMATION.linkedin }) },
  { name: 'CV', open: () => executedCommand({ command: 'open', params: INFORMATION.cv }) }
];