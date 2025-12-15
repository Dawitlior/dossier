// Dark mode utility class generator
export const getDarkModeClasses = (isDarkMode: boolean) => ({
  // Text colors
  heading: isDarkMode ? 'text-slate-100' : 'text-slate-900',
  subheading: isDarkMode ? 'text-slate-200' : 'text-slate-900',
  body: isDarkMode ? 'text-slate-300' : 'text-slate-800',
  bodySecondary: isDarkMode ? 'text-slate-400' : 'text-slate-700',
  muted: isDarkMode ? 'text-slate-500' : 'text-slate-600',

  // Backgrounds
  bg: isDarkMode ? 'bg-slate-900' : 'bg-white',
  bgAlt: isDarkMode ? 'bg-slate-800' : 'bg-slate-50',
  bgCard: isDarkMode ? 'bg-slate-800/50' : 'bg-white',

  // Borders
  border: isDarkMode ? 'border-slate-700' : 'border-slate-200',
  borderHeavy: isDarkMode ? 'border-slate-100' : 'border-slate-900',
  borderLeft: isDarkMode ? 'border-l-slate-600' : 'border-l-slate-900',

  // Interactive elements
  hover: isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100',
  active: isDarkMode ? 'bg-slate-700' : 'bg-slate-200',
});
