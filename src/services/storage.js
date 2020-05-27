import { INFORMATION, executedCommand } from '../utils/command';

export const storage = {
  '/': [
    { type: 'folder', filename: 'Projects', open: () => {}, params: '/Projects' },
    { type: 'github', filename: 'Github', open: () => executedCommand({ command: 'open', params: INFORMATION.github }) },
    { type: 'linkedin', filename: 'Linkedin', open: () => executedCommand({ command: 'open', params: INFORMATION.linkedin }) },
    { type: 'cv', filename: 'CV', open: () => executedCommand({ command: 'open', params: INFORMATION.cv }) }
  ]
}