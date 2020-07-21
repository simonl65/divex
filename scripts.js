listner = document.addEventListener('click', (e) => {
  console.log(getPos(e.srcElement));
});

function getPos(el) {
  for (
    var lx = 0, ly = 0, lw = 0, lh = 0;
    el != null;
    lx += el.offsetLeft,
      ly += el.offsetTop,
      lw += el.offsetWidth,
      lh += el.offsetHeight,
      el = el.offsetParent
  );
  return { x: lx, y: ly, w: lw, h: lh };
}
