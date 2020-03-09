export const help = ({ description, usages, examples }) => {
  return `
  ${description}

  Usage:
    ${usages.map(usage => `${usage}\n`)}
  Examples:
    ${examples.map(example => `${example}\n`)}
  `
}

export const executedCommand = ({ command, params, options }) => {
  try {
  return commands[command](params, options);
  } catch(TypeError) {
    return commandNotFound(command);
  }
}

export const welcomeCommand = () => {
  return `
  Welcome to my personal website :D

  run command (help) to moore information, enjoy it!
 `
}

export const helpCommand = () => {
  return `
  Available commands:

  Commands:         Descrioptions:
    me:                      To display info of darkcoder.
    open:                  To open url and contact web pages.
    linkedin:             To print url of linkedin.
    github:               To print url of github.
    help:                   To diaply all available commands.
    clear:                   To clear terminal and remove historial.
  `
}

export const meCommand = () => {
  return `
  José Miguel Segura Polanco (Darkcoder)

  Hi, im web developer and devops lover.
  Soy un poco malo al dar una autobiografia, aunque puedo aclarar
  algunos puntos clabes de mi. Soy amante a los proyectos
  OpenSource, aunque tengo muy pocas aportaciones algunos proyectos
  pero mi meta es poder dedicar todo mi tiempo aportar a
  diferentes proyectos.

  Con ganas de aprender mas y poder resolver cualquier
  problema o retos que se me cruzen en el camino :D
  `
}

export const openCommand = (url = '', options="") => {

  if (options === '--help' || url.length === 0) {

    return help({
      description: 'Command to open pages and view github, linkedin, and others.',
      usages: ['open [ github | linkedin ]', 'open [--external] string // for external links',],
      examples: ['~$ open github', '~$ open --external https://google.com/'],
    });
  }

  if (options === '--external') {
    window.location.href = url // redirect to url;
    return 'Redirecting...';
  }

  return commands[url]();
}

export const commandNotFound = command => {
  return `-error shell: Command <${command}> doesn't exist.`
}

export const commands = {
  linkedin: () => {},
  welcome: welcomeCommand,
  me: meCommand,
  help: helpCommand,
  open: openCommand,
  exit: () => window.location.href = '/',
  github: () => window.location.href = 'https://github.com/darkcode01/',
}