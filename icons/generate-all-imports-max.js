// generate-all-imports-max.js
const fs = require('fs');
const path = require('path');

// Load package.json
const pkg = require(path.resolve(__dirname, 'package.json'));

let content = '';
Object.keys(pkg.dependencies || {}).forEach(dep => {
  const varName = dep.replace(/[^a-zA-Z0-9_$]/g, '_');
  content += `import * as ${varName} from '${dep}';\n`;
});

content += '\nexport {\n';
Object.keys(pkg.dependencies || {}).forEach(dep => {
  const varName = dep.replace(/[^a-zA-Z0-9_$]/g, '_');
  content += `  ${varName},\n`;
});
content += '};\n';

// Write to all.js
fs.writeFileSync(path.resolve(__dirname, 'all.js'), content);
console.log('all.js generated — bundle size is guaranteed to be huge!');

