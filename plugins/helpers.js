const uniqId = () => Math.random().toString(36).substr(2, 9);

// Clamps a value between an upper and lower bound
const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num)

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) =>
  clamp(((x - a) * (d - c)) / (b - a) + c, Math.min(c, d), Math.max(c, d))

export { uniqId, clamp, lerp, map }
