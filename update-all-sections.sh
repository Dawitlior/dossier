#!/bin/bash

# This script will update ALL remaining sections in App.tsx to use theme tokens
# It performs a systematic find-and-replace for all text, background, and border classes

cd /tmp/cc-agent/61536608/project

# Create backup
cp src/App.tsx src/App.tsx.pre-theme-update

# Python script to update all sections
python3 << 'PYSCRIPT'
import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Define replacement patterns
replacements = [
    # All h2 section headings
    (r'className="text-2xl font-bold text-slate-900 mb-\d+ tracking-tight mono-accent"', 
     'className="text-2xl font-bold mb-8 tracking-tight mono-accent text-theme transition-colors duration-300"'),
    
    # All h3 base headings
    (r'className="text-base font-bold text-slate-900 mb-\d+ tracking-wide mono-accent"',
     'className="text-base font-bold mb-6 tracking-wide mono-accent text-theme transition-colors duration-300"'),
    
    # All h3 small headings
    (r'className="text-sm font-bold text-slate-900 mb-\d+ tracking-wide mono-accent"',
     'className="text-sm font-bold mb-3 tracking-wide mono-accent text-theme transition-colors duration-300"'),
    
    # All h4 headings
    (r'className="font-bold text-slate-900 mb-\d+ text-xs mono-accent tracking-wider"',
     'className="font-bold mb-2 text-xs mono-accent tracking-wider text-theme transition-colors duration-300"'),
    
    # Body text variations
    (r'className="text-base text-slate-800 leading-relaxed([^"]*)"',
     r'className="text-base leading-relaxed\1 text-theme-secondary transition-colors duration-300"'),
    (r'className="text-sm text-slate-700 leading-relaxed([^"]*)"',
     r'className="text-sm leading-relaxed\1 text-theme-secondary transition-colors duration-300"'),
    (r'className="text-xs text-slate-700 leading-relaxed([^"]*)"',
     r'className="text-xs leading-relaxed\1 text-theme-secondary transition-colors duration-300"'),
    (r'className="text-slate-600 text-xs leading-relaxed([^"]*)"',
     r'className="text-xs leading-relaxed\1 text-theme-secondary transition-colors duration-300"'),
    (r'className="text-slate-700 text-xs leading-relaxed([^"]*)"',
     r'className="text-xs leading-relaxed\1 text-theme-secondary transition-colors duration-300"'),
    (r'className="text-slate-700 leading-relaxed text-xs([^"]*)"',
     r'className="leading-relaxed text-xs\1 text-theme-secondary transition-colors duration-300"'),
    
    # Borders - simple borders
    (r'className="border border-slate-200 p-(\d+) research-card"',
     r'className="border border-theme-secondary p-\1 research-card transition-colors duration-300"'),
    
    # Borders - left accent
    (r'className="border-l-2 border-slate-900 pl-(\d+) py-(\d+) research-card"',
     r'className="border-l-2 border-theme-muted pl-\1 py-\2 research-card transition-colors duration-300"'),
    
    # Backgrounds - slate-50
    (r'className="bg-slate-50 border-l-2 border-slate-300 pl-(\d+) py-(\d+) my-(\d+)"',
     r'className="bg-theme-secondary border-l-2 border-theme-muted pl-\1 py-\2 my-\3 transition-colors duration-300"'),
    (r'className="bg-slate-50 border border-slate-200 p-(\d+)"',
     r'className="bg-theme-secondary border border-theme-secondary p-\1 transition-colors duration-300"'),
    
    # Dark boxes
    (r'className="bg-slate-900 text-white p-(\d+) border-2 border-slate-900"',
     r'className="p-\1 border-2 transition-colors duration-300" style={{ backgroundColor: "rgb(var(--accent-primary))", borderColor: "rgb(var(--border-primary))", color: "rgb(var(--text-primary))" }}'),
    
    # Footer
    (r'className="bg-slate-900 text-white py-(\d+) border-t-2 border-slate-900"',
     r'className="py-\1 border-t-2 transition-colors duration-300" style={{ backgroundColor: "rgb(var(--accent-primary))", borderColor: "rgb(var(--border-primary))", color: "rgb(var(--text-primary))" }}'),
    (r'className="text-slate-400 text-xs mono-accent text-center tracking-wider"',
     'className="text-xs mono-accent text-center tracking-wider text-theme-muted transition-colors duration-300"'),
    
    # Scroll button
    (r'className="fixed bottom-8 right-8 bg-slate-900 text-white p-3 border-2 border-slate-900 transition-all duration-300 hover:bg-white hover:text-slate-900"',
     'className="fixed bottom-8 right-8 p-3 border-2 border-theme bg-theme-accent text-theme transition-all duration-300"'),
]

# Apply all replacements
for pattern, replacement in replacements:
    content = re.sub(pattern, replacement, content)

with open('src/App.tsx', 'w') as f:
    f.write(content)

print("✓ All sections updated with theme tokens")
PYSCRIPT

echo "Theme update complete!"
