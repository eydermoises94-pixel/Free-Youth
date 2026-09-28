const scenes = [...document.querySelectorAll<HTMLElement>('.story-scene')];
const steps = [...document.querySelectorAll<HTMLAnchorElement>('.story-progress a')];
const progress = document.querySelector<HTMLElement>('.story-progress');
const footer = document.querySelector<HTMLElement>('.site-footer');
const header = document.querySelector<HTMLElement>('.site-header');
const art = document.querySelector<HTMLElement>('.community-art');
const photo = document.querySelector<HTMLElement>('.community-art-photo img');
const lens = document.querySelector<HTMLElement>('.community-liquid');
const word = document.querySelector<HTMLElement>('.community-art-word');
const orb = document.querySelector<HTMLElement>('.story-pact-liquid');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
let frame = 0;
let pointer = { x: 0, y: 0 };
let currentPointer = { x: 0, y: 0 };

function update() {
  frame = 0;
  const height = window.innerHeight;
  const headerHeight = header?.offsetHeight ?? 82;
  // Read all geometry before writing styles. Native scrolling remains untouched.
  const bounds = scenes.map(scene => scene.getBoundingClientRect());
  const footerTop = footer?.getBoundingClientRect().top ?? Infinity;
  let current = 0;
  bounds.forEach((rect, index) => { if (rect.top <= headerHeight + height * .3) current = index; });
  steps.forEach((step, index) => {
    if (index === current) step.setAttribute('aria-current', 'step');
    else step.removeAttribute('aria-current');
  });
  const hidden = footerTop < height - 36;
  progress?.classList.toggle('is-hidden', hidden);
  if (progress) progress.inert = hidden;
  if (reduced.matches) {
    [photo, lens, word, orb].forEach(element => element?.style.removeProperty('transform'));
    currentPointer = { x: 0, y: 0 };
    return;
  }
  currentPointer.x += (pointer.x - currentPointer.x) * .12;
  currentPointer.y += (pointer.y - currentPointer.y) * .12;
  const heroProgress = clamp((headerHeight - bounds[0].top) / bounds[0].height);
  if (bounds[0].bottom > 0) {
    if (photo) photo.style.transform = `translate3d(0,${heroProgress * 32}px,0) scale(1.08)`;
    if (word) word.style.transform = `translate3d(${heroProgress * -25}px,${heroProgress * -38}px,0) rotate(-8deg)`;
    if (lens) lens.style.transform = `translate3d(${currentPointer.x * 18}px,${currentPointer.y * 14 - heroProgress * 40}px,0) rotate(${-19 + currentPointer.x * 8 + heroProgress * 22}deg)`;
  }
  const pact = bounds[2];
  if (orb && pact.top < height && pact.bottom > 0) {
    const amount = clamp((height - pact.top) / (height + pact.height));
    orb.style.transform = `translate3d(0,${(amount - .5) * -70}px,0) rotate(${amount * 36}deg)`;
  }
  if (bounds[0].bottom > 0 && Math.abs(pointer.x - currentPointer.x) + Math.abs(pointer.y - currentPointer.y) > .005) queue();
}
function queue() { if (!frame) frame = requestAnimationFrame(update); }
art?.addEventListener('pointermove', event => {
  if (reduced.matches || !finePointer.matches) return;
  const rect = art.getBoundingClientRect();
  pointer = { x: clamp((event.clientX - rect.left) / rect.width, 0, 1) * 2 - 1, y: clamp((event.clientY - rect.top) / rect.height, 0, 1) * 2 - 1 };
  queue();
});
art?.addEventListener('pointerleave', () => { pointer = { x: 0, y: 0 }; queue(); });
window.addEventListener('scroll', queue, { passive: true });
window.addEventListener('resize', queue);
reduced.addEventListener('change', queue);
finePointer.addEventListener('change', () => { pointer = { x: 0, y: 0 }; queue(); });
queue();

export {};
