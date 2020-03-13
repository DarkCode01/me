import {
  welcomeCommand,
  helpCommand,
  getCommand,
  executedCommand,
  downloadCommand,
  meCommand
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

  test('verify me command return the correct message.', () => {
    const correctMessage = `
  José Miguel Segura Polanco (Darkcoder)

  Hi, i'm web developer and devops lover.

  I'm a little bad at giving an autobiography,
  although I can clarify some clab points of me.

  I am a lover of projects OpenSource, although I have
  very few contributions some projects but my goal is to
  spend all my time contributing to different projects.
  `;
    const message = meCommand();

    expect(typeof(message)).toBe('string');
    expect(message.trim() == correctMessage.trim()).toBe(true)
  });

  test('it return get message.', () => {
    const github = 'https://github.com/darkcode01/';
    const linkedin = 'https://www.linkedin.com/in/jos%C3%A9-miguel-segura-polanco-792298187/';

    expect(typeof(getCommand(''))).toBe('string')
    expect(getCommand('github')).toEqual(github);
    expect(getCommand('linkedin')).toEqual(linkedin);
  });

  test('it return download message.', () => {
    const result = downloadCommand('cv');

    expect(typeof(result)).toBe('string');
    expect(result).toEqual('Downloaded!');
  });
});