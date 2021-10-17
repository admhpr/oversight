export const SVG_ATTRIBUTES = `xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                        xmlns:svg="http://www.w3.org/2000/svg"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"`

export async function generateDiagrams(file) {
  if (file.extension !== '.md') return
  if (file.path === '/home/adam/workspace/oversight/content/notes/on-vue.md') {
    const mermaid = require('headless-mermaid')
    const fs = require('fs')
    const regex = /```mermaid((.(?!``)|\n)*)```/g
    const matches = file.data.matchAll(regex)
    for (const [index, match] of [...matches].entries()) {
      const graphValues = `${match[1]}`
      const contentNameParts = file.path.split('/')
      const contentName = contentNameParts[contentNameParts.length - 1].replace(
        '.md',
        ''
      )
      const diagramOutputLocation = contentNameParts.slice(
        contentNameParts.indexOf('content'),
        contentNameParts.length - 1
      )
      const svg = await mermaid.execute(graphValues)
      fs.writeFileSync(
        `./${diagramOutputLocation.join(
          '/'
        )}/diagrams/${contentName}-diagram-${index}.svg`,
        svg
      )
    }
  }
}
