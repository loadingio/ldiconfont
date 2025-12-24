module.exports = {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeXMLNS',
    'removeXlink',
    'removeMetadata',
    'removeStyleElement',
    {
      name: 'removeClasses',
      type: 'visitor',
      fn: () => ({
        element: {
          enter: (node) => {
            if (node.attributes?.class) {
              delete node.attributes.class;
            }
          }
        }
      })
    },
    {
      name: 'removeSvgStyleAttr',
      type: 'visitor',
      fn: () => ({
        element: {
          enter: (node) => {
            if (node.name === 'svg' && node.attributes?.style) {
              delete node.attributes.style;
            }
          }
        }
      })
    },
    {
      name: 'removeAllClipPaths',
      type: 'visitor',
      fn: () => ({
        element: {
          enter: (node, parentNode) => {
            if (node.name === 'clipPath') {
              parentNode.children =
                parentNode.children.filter(n => n !== node);
              return;
            }
            if (node.attributes?.['clip-path']) {
              delete node.attributes['clip-path'];
            }
            if (
              node.attributes?.style &&
              /clip-path\s*:/.test(node.attributes.style)
            ) {
              node.attributes.style =
                node.attributes.style
                  .replace(/clip-path\s*:[^;]+;?/g, '')
                  .trim();

              if (!node.attributes.style) {
                delete node.attributes.style;
              }
            }
          }
        }
      })
    },
    {
      name: 'removeInvisibleShapes',
      type: 'visitor',
      fn: () => ({
        element: {
          enter: (node, parentNode) => {
            const shapes = new Set([
              'path',
              'rect',
              'circle',
              'ellipse',
              'line',
              'polygon',
              'polyline'
            ]);

            if (!shapes.has(node.name)) return;

            const attrs = node.attributes || {};
            const style = attrs.style || '';

            const fillNone =
              attrs.fill === 'none' ||
              /(?:^|;) *fill *: *none *(?:;|$)/.test(style);

            const hasStroke =
              'stroke' in attrs ||
              /(?:^|;) *stroke *:/.test(style);

            if (fillNone && !hasStroke) {
              parentNode.children =
                parentNode.children.filter(n => n !== node);
            }
          }
        }
      })
    },
    'collapseGroups',
    'removeEmptyContainers'
  ]
};
