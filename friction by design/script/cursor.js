document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  // Trail and root storage
  const trails = [];
  const roots = [];

  // Tracking cursor movement
  let lastX = 0;
  let lastY = 0;
  let lastTime = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function calculateSpeed(currentX, currentY, currentTime) {
    const deltaX = currentX - lastX;
    const deltaY = currentY - lastY;
    const deltaTime = currentTime - lastTime;

    // Calculate pixel distance moved per millisecond
    const speed =
      Math.sqrt(deltaX * deltaX + deltaY * deltaY) / (deltaTime || 1);

    return Math.min(speed, 50); // Cap speed for root generation
  }

  function generateRootBranch(x, y, length, angle, depth, velocity) {
    // Calculate end point of the current root
    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;

    // Determine number of child roots based on velocity
    const childCount = Math.floor(velocity * 6);
    const childRoots = [];

    // Generate child roots
    for (let i = 0; i < childCount; i++) {
      // Slightly randomize child root angles
      const childAngle = angle + (Math.random() - 0.5) * Math.PI;
      const childLength = length * Math.floor(velocity * 8);

      childRoots.push({
        x: endX,
        y: endY,
        endX: endX + Math.cos(childAngle) * childLength,
        endY: endY + Math.sin(childAngle) * childLength,
        opacity: Math.max(0.1, velocity * 0.5),
        depth: depth + 1,
      });
    }

    return {
      x: x,
      y: y,
      endX: endX,
      endY: endY,
      opacity: Math.max(0.2, velocity),
      childRoots: childRoots,
      depth: depth,
    };
  }

  function drawTrailsAndRoots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and update trails
    for (let i = trails.length - 1; i >= 1; i--) {
      trails[i].opacity -= 0.0005;

      if (trails[i].opacity <= 0) {
        trails.splice(i, 1);
      } else {
        ctx.beginPath();
        ctx.moveTo(trails[i - 1].x, trails[i - 1].y);
        ctx.lineTo(trails[i].x, trails[i].y);

        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(0, 0, 0, ${trails[i].opacity})`;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }
    }

    // Draw and update roots
    for (let i = roots.length - 1; i >= 0; i--) {
      const root = roots[i];
      root.opacity -= 0.005;

      if (root.opacity <= 0 || root.depth > 3) {
        roots.splice(i, 1);
      } else {
        // Draw main root
        ctx.beginPath();
        ctx.moveTo(root.x, root.y);
        ctx.lineTo(root.endX, root.endY);

        ctx.lineWidth = Math.max(1, 3 - root.depth);
        ctx.strokeStyle = `rgba(0, 0, 0, ${root.opacity * 0.7})`;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw child roots
        root.childRoots.forEach((childRoot) => {
          ctx.beginPath();
          ctx.moveTo(childRoot.x, childRoot.y);
          ctx.lineTo(childRoot.endX, childRoot.endY);

          ctx.lineWidth = Math.max(1, 2 - childRoot.depth);
          ctx.strokeStyle = `rgba(80, 40, 0, ${childRoot.opacity * 0.5})`;
          ctx.lineCap = "round";
          ctx.stroke();
        });
      }
    }

    requestAnimationFrame(drawTrailsAndRoots);
  }

  function handleMouseMove(e) {
    const currentTime = performance.now();
    const speed = calculateSpeed(e.clientX, e.clientY, currentTime);

    // Calculate opacity based on speed (logarithmic to make it more sensitive)
    const opacity = Math.min(Math.log(speed + 1) / Math.log(51), 1);

    trails.push({
      x: e.clientX,
      y: e.clientY,
      opacity: opacity,
    });

    // Root generation based on speed
    if (Math.random() < opacity) {
      const rootAngle = Math.random() * Math.PI * 2;
      const rootLength = 50 * opacity;

      const newRoot = generateRootBranch(
        e.clientX,
        e.clientY,
        rootLength,
        rootAngle,
        0,
        opacity
      );

      roots.push(newRoot);
    }

    // Limit trail and root lengths
    if (trails.length > 100) {
      trails.splice(0, trails.length - 100);
    }
    if (roots.length > 50) {
      roots.splice(0, roots.length - 50);
    }

    // Update last known position and time
    lastX = e.clientX;
    lastY = e.clientY;
    lastTime = currentTime;
  }

  // Event Listeners
  window.addEventListener("resize", resizeCanvas);
  document.addEventListener("mousemove", handleMouseMove);

  // Start drawing trails and roots
  drawTrailsAndRoots();
});
