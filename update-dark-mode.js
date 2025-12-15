const fs = require('fs');

const file = fs.readFileSync('src/App.tsx', 'utf8');

// Replace patterns for dark mode
const replacements = [
  // Headings
  [/className="text-2xl font-bold text-slate-900 mb-/g, 'className={`text-2xl font-bold mb-'],
  [/ tracking-tight mono-accent">/g, ' tracking-tight mono-accent transition-colors duration-300 ${isDarkMode ? \'text-slate-100\' : \'text-slate-900\'}`}>'],
  
  // Base font-bold headings
  [/className="text-base font-bold text-slate-900 mb-/g, 'className={`text-base font-bold mb-'],
  
  // Body text
  [/className="text-base text-slate-800 leading-relaxed/g, 'className={`text-base leading-relaxed'],
  [/className="text-sm text-slate-700 leading-relaxed font-light/g, 'className={`text-sm leading-relaxed font-light transition-colors duration-300 ${isDarkMode ? \'text-slate-300\' : \'text-slate-700\'}`'],
  [/className="text-xs text-slate-700 leading-relaxed font-light/g, 'className={`text-xs leading-relaxed font-light transition-colors duration-300 ${isDarkMode ? \'text-slate-300\' : \'text-slate-700\'}`'],
  [/className="text-slate-600 text-xs leading-relaxed font-light/g, 'className={`text-xs leading-relaxed font-light transition-colors duration-300 ${isDarkMode ? \'text-slate-400\' : \'text-slate-600\'}`'],
  
  // Borders
  [/className="border border-slate-200/g, 'className={`border transition-colors duration-300 ${isDarkMode ? \'border-slate-700\' : \'border-slate-200\'}'],
  [/className="border-l-2 border-slate-900/g, 'className={`border-l-2 transition-colors duration-300 ${isDarkMode ? \'border-slate-500\' : \'border-slate-900\'}'],
  
  // Backgrounds
  [/className="bg-slate-50/g, 'className={`transition-colors duration-300 ${isDarkMode ? \'bg-slate-800/50\' : \'bg-slate-50\'}'],
  [/className="bg-slate-900 text-white/g, 'className={`text-white transition-colors duration-300 ${isDarkMode ? \'bg-slate-800 border-slate-700\' : \'bg-slate-900 border-slate-900\'}'],
];

let updated = file;
for (const [pattern, replacement] of replacements) {
  updated = updated.replace(pattern, replacement);
}

fs.writeFileSync('src/App.tsx.bak', file);
console.log('Backup created at src/App.tsx.bak');
console.log('Updates would need manual review - this is complex');
