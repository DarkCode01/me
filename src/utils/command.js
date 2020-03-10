const INFORMATION = {
  github: process.env.REACT_APP_GITHUB_URL,
  linkedin: process.env.REACT_APP_LINKEDIN_URL,
  cv: process.env.REACT_APP_CV_URL,
  telephone: process.env.REACT_APP_TEL_INFO
}

export const help = ({ description, usages, examples }) => {
  return `
    ${description}

    Usage:
       ${usages.join('\n\t')}
  
    Examples:
      ${examples.join('\n\t')}
  `
}

export const executedCommand = ({ command, params, options }) => {
  try {
    if (command) return commands[command](params, options);

    return '';
  } catch(TypeError) {
    return commandNotFound(command);
  }
}

export const welcomeCommand = () => {
  return `
  Welcome to my personal website :D

  run command (help) to more information, enjoy it!
 `
}

export const helpCommand = () => {
  return `
  Available commands:

  Commands
    welcome :       Welcome message.
    me      :       To display info of darkcoder.
    open    :       To open url and contact web pages.
    get     :       To get url or info on attrs.
    help    :       To diaply all available  commands.
    clear   :       To clear terminal and remove historial.

  Extras:
    '|'     :       You can use the command pipe to pass result to another command.
                    examples: get github | open
  `
}

export const meCommand = () => {
  return `
  José Miguel Segura Polanco (Darkcoder)

  Hi, i'm web developer and devops lover.

  I'm a little bad at giving an autobiography,
  although I can clarify some clab points of me.

  I am a lover of projects OpenSource, although I have
  very few contributions some projects but my goal is to
  spend all my time contributing to different projects.
  `
}

export const getCommand = (param = '') => {
  const url = INFORMATION[param.toLowerCase()];

  if (url) return url;

  return help({
    description: 'Command to get (url|info) of github | linkedin | email | cv',
    usages: [ 'get [github | linkedin | cv | tel]' ],
    examples: [ '~$ get github' ]
  });
}

export const downloadCommand = (param = '') => {
  const downloadButton = document.createElement('a');
  downloadButton.download = `${param}`;
  downloadButton.href = param;
  downloadButton.click();

  return `Downloaded!`;
}

export const openCommand = (param = '') => {
  const urlValidator = /^(http|https):\/\/[^ "]+$/

  if (urlValidator.test(param)) {
    // window.location.href = url // redirect to url;
    window.open(param, '_blank');
    window.focus();

    return `Opening new tab with ${param}`;
  }

  return help({
    description: 'Command to open the linkedin, email or github on new tab.',
    usages: [ 'open (https:// | http://)' ],
    examples: [ '~$ get github | open', '~$ open https://google.com/' ]
  });
}

export const commandNotFound = command => {
  return `-error shell: Command <${command}> doesn't exist.`
}

export const commands = {
  welcome: welcomeCommand,
  me: meCommand,
  help: helpCommand,
  open: openCommand,
  get: getCommand,
  download: downloadCommand,
  exit: () => window.location.href = '/'
}