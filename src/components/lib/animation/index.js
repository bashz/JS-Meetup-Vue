import { interpolate } from "d3-interpolate";

const animate = () => {
  window.requestAnimationFrame(animate)
  Object.values(tweens).forEach((tween) => tween.update())
}

let i = 0
const tweens = {}
animate()

const Tween = function (from, to, duration, onUpdate, delay, easing) {
  this.id = (++i).toString(); 
  this.interpolation = interpolate(from, to);
  this.duration = duration;
  this.onUpdate = onUpdate;
  this.start = +new Date + delay;
  this.easing = easing;
}
Tween.prototype.update = function () {
  let t = (+new Date - this.start) / this.duration;
  (t >= 1 && this.destroy(true)) || t >= 0 && this.onUpdate(this.interpolation(this.easing(t)));
}
Tween.prototype.destroy = function (end = false) {
  end && this.onUpdate(this.interpolation(this.easing(1)));
  return delete tweens[this.id];
}

export default function (from, to, duration, onUpdate, delay = 0, easing = (t) => t) {
  const tween = new Tween(from, to, duration, onUpdate, delay, easing);
  tweens[tween.id] = tween;
  return tween
}
