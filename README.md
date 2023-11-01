# Squircle rectangle css paint worklet

Import the module in javascript.

```js
CSS.paintWorklet.addModule('/squircle-rect.js')
```

Use with `paint(squircle-rect)` function in css. Control color and radius with `--squircle-color` and `--squircle-radius` css variables.

```css
.squircle-rect {
  --squircle-color: var(--cc);
  --squircle-radius: 100;
  background: paint(squircle-rect);
}
```

Use (CSS Custom Paint / Paint Worklets polyfill)[https://github.com/GoogleChromeLabs/css-paint-polyfill] for better browser support.

```html
<script src="https://unpkg.com/css-paint-polyfill"></script>
```