import React from 'react';

export const executedCommand = ({ command, params, options }) => {
  try {
  return commands[command](params, options);
  } catch(TypeError) {
    return commandNotFound(command);
  }
}

export const openCommand = (url = '', options="") => {

  if (options === '--help' || url.length === 0) {
    return (
      <>
        Command to open pages and view github, linkedin, and others.
        <br />
        <br />
        Usage:
          <br />
          &emsp; open [ github | linkedin ]
          <br />
          &emsp; open [--external] string // for external links
        <br/>
        <br/>
        Examples: <br />
          &emsp; ~$ open github
          <br />
          &emsp; ~$ open --external https://google.com/
        <br />
      </>
    );
  }

  if (options === '--external') {
    window.location.href = url // redirect to url;
    return 'Redirecting...';
  }

  return commands[url]()
}

export const commandNotFound = command => {
  return `-error shell: Command <${command}> doesn't exist.`
}

export const commands = {
  help: () => {},
  github: () => window.location.href = 'https://github.com/darkcode01/',
  linkedin: () => {},
  open: openCommand,
  exit: () => window.location.href = '/'
}