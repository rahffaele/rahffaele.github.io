document.addEventListener("DOMContentLoaded", function() {
  const text = document.getElementById('blurred-text');

  text.addEventListener('mousemove', function(e) {
    const x = e.clientX - this.offsetLeft;
    const y = e.clientY - this.offsetTop;
    this.style.setProperty('--x', `${ x }px`);
    this.style.setProperty('--y', `${ y }px`);
  });
});


