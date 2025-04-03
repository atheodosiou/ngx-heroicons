const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.resolve(__dirname, '../projects/ngx-heroicons/src/icons');
const OUTPUT_FILE = path.resolve(__dirname, '../projects/ngx-heroicons/src/lib/icons.ts');
const TYPES_FILE = path.resolve(__dirname, '../projects/ngx-heroicons/src/lib/types.ts');

const styles = ['outline', 'solid','mini','micro'];

function sanitizeSvg(svg) {
    return svg
        .replace(/\r?\n|\r/g, '')       // remove newlines
        .replace(/'/g, "\\'")           // escape single quotes
        .replace(/\s{2,}/g, ' ')        // collapse multiple spaces
        .trim();
}

function generateIconMap() {
    const result = {};

    styles.forEach(style => {
        const styleDir = path.join(ICONS_DIR, style);
        if (!fs.existsSync(styleDir)) return;

        const files = fs.readdirSync(styleDir).filter(f => f.endsWith('.svg'));
        result[style] = {};

        files.forEach(file => {
            const iconName = file.replace('.svg', '');
            const filePath = path.join(styleDir, file);
            const rawSvg = fs.readFileSync(filePath, 'utf-8');
            const minified = sanitizeSvg(rawSvg);
            result[style][iconName] = minified;
        });
    });

    return result;
}

function buildTypeScriptFile(iconMap) {
    const lines = [];
    lines.push(`// 🚨 This file is auto-generated. Do not edit directly.`);
    lines.push(`export const ICONS: Record<'outline' | 'solid', Record<string, string>> = {`);

    for (const style of styles) {
        lines.push(`  '${style}': {`);
        for (const [name, svg] of Object.entries(iconMap[style] || {})) {
            lines.push(`    '${name}': '${svg}',`);
        }
        lines.push(`  },`);
    }

    lines.push(`};`);
    return lines.join('\n');
}


function buildTypes(iconMap) {
    const names = new Set();

    for (const style of styles) {
        Object.keys(iconMap[style] || {}).forEach(name => names.add(name));
    }

    const sorted = [...names].sort();
    const union = sorted.map(n => `'${n}'`).join(' | ');

    return `// 🚨 This file is auto-generated. Do not edit directly.\n` +
        `export type IconName = ${union};\n`;
}


function run() {
    const iconMap = generateIconMap();

    // Write icons.ts
    const tsFile = buildTypeScriptFile(iconMap);
    fs.writeFileSync(OUTPUT_FILE, tsFile);
    console.log(`✅ Generated icon map: ${OUTPUT_FILE}`);

    // Write types.ts
    const typeDef = buildTypes(iconMap);
    fs.writeFileSync(TYPES_FILE, typeDef);
    console.log(`✅ Generated icon types: ${TYPES_FILE}`);
}


run();
