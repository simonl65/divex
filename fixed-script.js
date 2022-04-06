listner = document.addEventListener('click', (e) => {
  const clickedExpander = e.target.closest('.expander, .expanded');
  if (!clickedExpander) return; // An expander wasn't clicked

  const container = document.querySelector('#container');
  const clone = document.querySelector('.expanded');

  if (!clone) {
    // Expand the clicked node
    clonedExpander = clickedExpander.cloneNode(true);

    let pos = getIdPositionAndDimensions(clickedExpander);
    console.log(pos.id, pos.h, pos.x, pos.y, pos.w);

    // clonedExpander.setAttribute('id', pos.id + '--expanded');
    clonedExpander.style.cssText = `
      position: absolute;
      height: ${pos.h}px;
      left: ${pos.x}px;
      top: ${pos.y}px;
      width: ${pos.w}px;
      margin: 0;
    `;
    container.appendChild(clonedExpander);
    setTimeout(() => {
      clonedExpander.setAttribute('class', 'expanded');
    }, 200);
  } else {
    // Remove the existing expanded node
    clone.setAttribute('class', 'expander');
    // Give enough time for the animation to complete
    setTimeout(() => {
      container.removeChild(clone);
      delete clone;
    }, 200);
  }
});

function getIdPositionAndDimensions(el) {
  return {
    id: el.id,
    x: el.offsetLeft,
    y: el.offsetTop,
    w: el.offsetWidth,
    h: el.offsetHeight,
  };
}
