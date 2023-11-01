registerPaint('squircle-rect', class {
  static get inputProperties() {
    return ['--squircle-radius', '--squircle-smooth', '--squircle-color']
  }
  paint(x, g, props) {
    const radius = props.get('--squircle-radius').toString()
    //TODO: Figure out how to calculate handles using smoothness.
    const smooth = props.get('--squircle-smooth').toString()
    const color = props.get('--squircle-color').toString()
    console.log({radius, smooth, color})

    const w = g.width
    const h = g.height
    let r = radius
    r = Math.min(r, h/2, w/2)

    //TODO: This is a heavily rounded approximation of a squircle with beziers. Uses similar beziers as the end result as figma, but this should really be based on some calculations instead of being a hard coded rounded approximation. (https://www.figma.com/blog/desperately-seeking-squircles/)
    x.fillStyle = color;
    x.beginPath();
    x.moveTo(r, 0); //start at top left
    x.lineTo(w-r, 0); //to top right
    x.bezierCurveTo (w-r*.5, 0, w-r*.3, 0, w-r*.15, r*.15) //top right segment
    x.bezierCurveTo (w, r*.3, w, r*.5, w, r) //right top segment
    x.lineTo(w, h-r); //to right bottom
    x.bezierCurveTo (w, h-r*.5, w, h-r*.3, w-r*.15, h-r*.15) //right bottom segment
    x.bezierCurveTo (w-r*.3, h, w-r*.5, h, w-r, h) //bottom right segment
    x.lineTo(r, h); //to bottom left
    x.bezierCurveTo (r*.5, h, r*.3, h, r*.15, h-r*.15) // bottom left segment
    x.bezierCurveTo (0, h-r*.3, 0, h-r*.5, 0, h-r) //left bottom segment
    x.lineTo(0, r); //to left top
    x.bezierCurveTo (0, r*.5, 0, r*.3, r*.15, r*.15) //left top segment
    x.bezierCurveTo (r*.3, 0, r*.5, 0, r, 0) //
    x.fill();
  }
})