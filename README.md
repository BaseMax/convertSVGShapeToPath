# Convert SVG Shapes To Path(s)

A nodejs-based program to convert shape based SVG to path by using **SVGO** library.

## Example

### Input

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="44" viewBox="0 0 28 44">
  <rect id="Rectangle_1" data-name="Rectangle 1" width="40" height="24" rx="4" transform="translate(2 42) rotate(-90)" fill="#fff" stroke="#707070" stroke-linecap="round" stroke-width="4"/>
  <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(12 31)" fill="#fff" stroke="#707070" stroke-linecap="round" stroke-width="4">
    <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
    <circle cx="2.5" cy="2.5" r="4.5" fill="none"/>
  </g>
</svg>
```

### Output

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="44" viewBox="0 0 28 44">
 <rect id="Rectangle_1" data-name="Rectangle 1" width="40" height="24" rx="4" transform="translate(2 42) rotate(-90)" fill="#fff" stroke="#707070" stroke-linecap="round" stroke-width="4"/>
 <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(12 31)" fill="#fff" stroke="#707070" stroke-linecap="round" stroke-width="4">
  <path stroke="none" d="M2.5 0A2.5 2.5 0 1 0 2.5 5 2.5 2.5 0 1 0 2.5 0z"/>
  <path fill="none" d="M2.5-2A4.5 4.5 0 1 0 2.5 7 4.5 4.5 0 1 0 2.5-2z"/>
 </g>
</svg>
```

## TODO

`svgo.config.js` config file not work when we tring to load its inside [`.js` file](https://github.com/BaseMax/convertSVGShapeToPath/blob/main/svg-converter.js#L7).
