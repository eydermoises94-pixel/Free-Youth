// One-shot reveals follow the reference's fade + short lateral movement.
// Content remains visible with JavaScript disabled or reduced motion enabled.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const targets = [...document.querySelectorAll<HTMLElement>('.reveal')];
let observer: IntersectionObserver | undefined;

function setupReveals() {
  observer?.disconnect();
  if (reduced.matches || !('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('motion-ready');
    targets.forEach(target => target.classList.add('in-view'));
    return;
  }
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer?.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
  targets.forEach(target => observer?.observe(target));
  document.documentElement.classList.add('motion-ready');
}
setupReveals();
reduced.addEventListener('change', setupReveals);
document.addEventListener('focusin', event => {
  if (event.target instanceof Element) event.target.closest('.reveal')?.classList.add('in-view');
});
// Keyboard navigation should always be immediate.
document.addEventListener('keydown', event => {
  if (['Tab', 'Enter', ' ', 'Escape'].includes(event.key)) document.documentElement.classList.add('keyboard-navigation');
});
document.addEventListener('pointerdown', () => document.documentElement.classList.remove('keyboard-navigation'));

export {};
