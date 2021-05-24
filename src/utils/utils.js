export function fixedPx (rem, noPX = true, basic = 750, width = window.screen.width) {
  let px = (rem * width) / basic
  px = parseFloat(px.toFixed(2))
  return noPX ? px : `${px}px`
}
