
const slides = document.querySelectorAll('.hero-slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 4500);
document.querySelectorAll('.billing-option').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('.billing-option').forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
  });
});

document.querySelectorAll('.pay-method').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
