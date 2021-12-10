const fs = require('fs');
const {
	// loadConfig,
	optimize
} = require('svgo');

// const config = loadConfig();
// console.log(config);
const config = {
  multipass: true,
  js2svg: {
    pretty: true,
    indent: 1
  },
  plugins: ([
    // {
    //   name: 'cleanupAttrs',
    //   active: true
    // },
    // {
    //   name: 'cleanupEnableBackground',
    //   active: true
    // },
    // {
    //   name: 'cleanupIDs',
    //   active: true
    // },
/*    {
      name: 'cleanupListOfValues',//https://github.com/svg/svgo/issues/1402
    },*/
    // {
    //   name: 'cleanupNumericValues',
    //   active: true
    // },
    // {
    //   name: 'collapseGroups',
    //   active: true
    // },
    // {
    //   name: 'convertColors',
    //   active: true
    // },
    // {
    //   name: 'convertPathData',
    //   active: true,
    //   params: {
    //     noSpaceAfterFlags: false
    //   }
    // },
    {
      name: 'convertShapeToPath',
      active: true,
      params: {
      	convertArcs: true
      }
    },
    // {
    //   name: 'convertStyleToAttrs',
    //   active: true
    // },
    // {
    //   name: 'convertTransform',
    //   active: true
    // },
    // {
    //   name: 'inlineStyles',
    //   active: true
    // },
    // {
    //   name: 'mergePaths',
    //   active: true,
    //   params: {
    //     noSpaceAfterFlags: false
    //   }
    // },
    // {
    //   name: 'minifyStyles',
    //   active: true
    // },
    // {
    //   name: 'moveElemsAttrsToGroup',
    //   active: true
    // },
    // {
    //   name: 'moveGroupAttrsToElems',
    //   active: true
    // },
    // {
    //   name: 'removeComments',
    //   active: true
    // },
    // {
    //   name: 'removeDesc',
    //   active: true
    // },
    // {
    //   name: 'removeDoctype',
    //   active: false
    // },
    // {
    //   name: 'removeEditorsNSData',
    //   active: true
    // },
    // {
    //   name: 'removeEmptyAttrs',
    //   active: true
    // },
    // {
    //   name: 'removeEmptyContainers',
    //   active: true
    // },
    // {
    //   name: 'removeEmptyText',
    //   active: true
    // },
    // {
    //   name: 'removeHiddenElems',
    //   active: true
    // },
    // {
    //   name: 'removeMetadata',
    //   active: true
    // },
    // {
    //   name: 'removeNonInheritableGroupAttrs',
    //   active: true
    // },
    // {
    //   name: 'removeTitle',
    //   active: true
    // },
    // {
    //   name: 'removeUnknownsAndDefaults',
    //   active: true,
    //   params: {
    //     keepRoleAttr: true
    //   }
    // },
    // {
    //   name: 'removeUnusedNS',
    //   active: true
    // },
    // {
    //   name: 'removeUselessDefs',
    //   active: true
    // },
    // {
    //   name: 'removeUselessStrokeAndFill',
    //   active: true
    // },
    // {
    //   name: 'removeViewBox',
    //   active: true
    // },
    // {
    //   name: 'removeXMLNS',
    //   active: false
    // },
    // {
    //   name: 'removeXMLProcInst',
    //   active: false
    // },
    // {
    //   name: 'sortAttrs',
    //   active: true
    // }
  ])
};

const result = optimize(`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="44" viewBox="0 0 28 44">
  <rect id="Rectangle_1" data-name="Rectangle 1" width="40" height="24" rx="4" transform="translate(2 42) rotate(-90)" fill="#fff" stroke="#707070" stroke-linecap="round" stroke-width="4"/>
  <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(12 31)" fill="#fff" stroke="#707070" stroke-linecap="round" stroke-width="4">
    <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
    <circle cx="2.5" cy="2.5" r="4.5" fill="none"/>
  </g>
</svg>`, config);
const optimizedSvgString = result.data;
// console.log(optimizedSvgString);

fs.writeFile('optimized.svg', optimizedSvgString, (err) => {
	if (err) throw err;
	console.log('SVG created successfully.');
});
