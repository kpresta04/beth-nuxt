export function changeOpacity(isVisible, entry) {
  this.isVisible = isVisible

  if (entry.isIntersecting) {
    entry.target.style = 'opacity: 1;'
  }
}

export function addClass(isVisible, entry) {
  this.isVisible = isVisible

  if (entry.isIntersecting) {
    entry.target.className = 'overlay roll-right'
  }
}
