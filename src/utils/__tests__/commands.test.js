import {
  welcomeCommand,
  helpCommand,
  getCommand,
  executedCommand
} from '../command';

describe('Test use of executed command!', () => {
  test('executed command with help command', () => {
    expect(typeof executedCommand({
      command: 'help',
      params: '',
      options: ''
    })).toBe('string')
  });
});

describe('Test all commands functions.', () => {
  test('it return welcome message.', () => {
    expect(typeof(welcomeCommand())).toBe('string');
  });

  test('it return help message.', () => {
    expect(typeof(helpCommand())).toBe('string');
  });

  test('it return get message.', () => {
    const github = 'https://github.com/darkcode01/';
    const linkedin = 'https://www.linkedin.com/in/jos%C3%A9-miguel-segura-polanco-792298187/';

    expect(typeof(getCommand(''))).toBe('string')
    expect(getCommand('github')).toEqual(github);
    expect(getCommand('linkedin')).toEqual(linkedin);
  });
});