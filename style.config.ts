export const lightTheme = {
  '--edso-brand': '#5a8dee',
  '--edso-primary': '#0d6efd',
  '--edso-success': '#28c76f',
  '--edso-danger': '#ea5455',
  '--edso-warning': '#ff9f43',
  '--edso-info': '#00cfe8',
  '--edso-disabled': '#d7dee9',
  '--edso-black': '#000000',
  '--edso-white': '#ffffff',
  '--edso-pink': '#ff6d99',
  '--edso-yellow': '#409EFF',
  '--edso-teal': '#20c997',
  '--edso-purple': '#7367f0',
  '--edso-indigo': '#374fc7',
  '--edso-title': '#3d5586',
  '--edso-subtitle': '#a2aebd',
  '--edso-content': '#667793',
  '--edso-border-input': '#dbdfef',
  '--edso-border-table': '#e2e8f0',
}

export const darkTheme = {
  '--edso-brand': '#5a8dee',
  '--edso-primary': '#0d6efd',
  '--edso-success': '#28c76f',
  '--edso-danger': '#ea5455',
  '--edso-warning': '#ff9f43',
  '--edso-info': '#00cfe8',
  '--edso-disabled': '#d7dee9',
  '--edso-black': '#000000',
  '--edso-white': '#ffffff',
  '--edso-pink': '#ff6d99',
  '--edso-yellow': '#409EFF',
  '--edso-teal': '#20c997',
  '--edso-purple': '#7367f0',
  '--edso-indigo': '#374fc7',
  '--edso-title': '#3d5586',
  '--edso-subtitle': '#a2aebd',
  '--edso-content': '#667793',
  '--edso-border-input': '#dbdfef',
  '--edso-border-table': '#e2e8f0',
}

export const getCSSPreflights = (theme: any) =>
  Object.entries(theme)
    .map(([key, value]: [string, any]) => `${key}: ${value}`)
    .join(';')
