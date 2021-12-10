module.exports = {
  // "multipass": true, // boolean. false by default
  // datauri: 'enc', // 'base64', 'enc' or 'unenc'. 'base64' by default
  // "js2svg": {
  //   "indent": 2, // string with spaces or number of spaces. 4 by default
  //   "pretty": true, // boolean, false by default
  // },
  // "pretty": true,
  // "multipass": true,
  // "floatPrecision": 2,
  // "plugins": [
  //   {
  //     "name": "convertShapeToPath",
  //     "enabled": true,
  //     "params": {
  //       "convertArcs": true
  //     }
  //   }
  // ],
  multipass: true,
  js2svg: {
    pretty: true,
    indent: 1
  },
  plugins: ([
    {
      name: 'cleanupAttrs',
      active: true
    },
    {
      name: 'cleanupEnableBackground',
      active: true
    },
    {
      name: 'cleanupIDs',
      active: true
    },
/*    {
      name: 'cleanupListOfValues',//https://github.com/svg/svgo/issues/1402
    },*/
    {
      name: 'cleanupNumericValues',
      active: true
    },
    {
      name: 'collapseGroups',
      active: true
    },
    {
      name: 'convertColors',
      active: true
    },
    {
      name: 'convertPathData',
      active: true,
      params: {
        noSpaceAfterFlags: false
      }
    },
    {
      name: 'convertShapeToPath',
      active: true,
      params: {
        convertArcs: true
      }
    },
    {
      name: 'convertStyleToAttrs',
      active: true
    },
    {
      name: 'convertTransform',
      active: true
    },
    {
      name: 'inlineStyles',
      active: true
    },
    {
      name: 'mergePaths',
      active: true,
      params: {
        noSpaceAfterFlags: false
      }
    },
    {
      name: 'minifyStyles',
      active: true
    },
    {
      name: 'moveElemsAttrsToGroup',
      active: true
    },
    {
      name: 'moveGroupAttrsToElems',
      active: true
    },
    {
      name: 'removeComments',
      active: true
    },
    {
      name: 'removeDesc',
      active: true
    },
    {
      name: 'removeDoctype',
      active: false
    },
    {
      name: 'removeEditorsNSData',
      active: true
    },
    {
      name: 'removeEmptyAttrs',
      active: true
    },
    {
      name: 'removeEmptyContainers',
      active: true
    },
    {
      name: 'removeEmptyText',
      active: true
    },
    {
      name: 'removeHiddenElems',
      active: true
    },
    {
      name: 'removeMetadata',
      active: true
    },
    {
      name: 'removeNonInheritableGroupAttrs',
      active: true
    },
    {
      name: 'removeTitle',
      active: true
    },
    {
      name: 'removeUnknownsAndDefaults',
      active: true,
      params: {
        keepRoleAttr: true
      }
    },
    {
      name: 'removeUnusedNS',
      active: true
    },
    {
      name: 'removeUselessDefs',
      active: true
    },
    {
      name: 'removeUselessStrokeAndFill',
      active: true
    },
    {
      name: 'removeViewBox',
      active: true
    },
    {
      name: 'removeXMLNS',
      active: false
    },
    {
      name: 'removeXMLProcInst',
      active: false
    },
    {
      name: 'sortAttrs',
      active: true
    }
  ])
};
