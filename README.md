# Squircle rectangle css paint worklet

Import the module in javascript.

```js
CSS.paintWorklet.addModule('squircle-rect.js')
```

Use with `paint(squircle-rect)` function in css. Control color and radius with `--squircle-color` and `--squircle-radius` css variables.

```css
.squircle-rect {
  --squircle-color: var(--cc);
  --squircle-radius: 100;
  background: paint(squircle-rect);
}
```

Use [CSS Custom Paint / Paint Worklets polyfill](https://github.com/GoogleChromeLabs/css-paint-polyfill) for better browser support.

```html
<script src="https://unpkg.com/css-paint-polyfill"></script>
```

## Limitations

- The squircle shape is an approximations using beziers. My understanding is that the approach is similar to how Figma does it, but quite a simplified version.
- Radius is only in pixels at the moment. Didn't yet figure out how to have it accept any [css &lt;length&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/length]) value like your regular border-radius does.
- Only seems to work as a background-image in Chrome at the moment. Safari and Firefox use the polyfill, and with that, it looks like the squircle can be used anywhere a [css &lt;image&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/image) type can be used.
