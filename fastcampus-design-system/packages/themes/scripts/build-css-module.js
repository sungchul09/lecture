import * as theme from '../dist/index.js'
import fs from 'fs'

const toCssCasting = (str) => {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
};


const generateThemeCssVaribles = () => {
  const cssString = []
  Object.entries(theme.vars).forEach(([key, value]) => {
    if (key === 'colors') {
      Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
        if (colorKey === 'light') {
          const selector = ':root'
          const cssVariables = Object.entries(colorValue).map(
            ([mainKey, mainValue]) => 
            Object.entries(mainValue).map(
              ([subKey, subValue]) => 
                `--${toCssCasting(mainKey)}-${toCssCasting(
                  subKey
                )}: ${subValue};`
              ).join('\n')
            ).join('\n')
          cssString.push(`${selector} { ${cssVariables} }`)
        }
      })
    }
  })
  return cssString
}
  
const generateThemesCss = () => {
  const variables = generateThemeCssVaribles()
  fs.writeFileSync('dist/theme.css', [...variables].join('\n'))
}

generateThemesCss()