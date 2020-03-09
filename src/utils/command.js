export const help = ({ description, usages, examples }) => {
  return `${description}

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

  return commands[url]()
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

export const commandNotFound = command => {
  return `-error shell: Command <${command}> doesn't exist.`
}

export const commands = {
  help: () => {},
  me: meCommand,
  github: () => window.location.href = 'https://github.com/darkcode01/',
  linkedin: () => {},
  open: openCommand,
  exit: () => window.location.href = '/'
}