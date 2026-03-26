// ── Formatters ──
const fmt  = (n, dec=2) => n.toLocaleString('es-ES', {minimumFractionDigits:dec, maximumFractionDigits:dec});
const fmtE = (n)        => fmt(n) + ' €';
const fmtP = (n)        => fmt(n) + '%';

// ── Stagger card animation ──
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tool-card').forEach((card, i) => {
    card.style.animation = `fadeUp 0.4s ${0.05*i + 0.15}s ease both`;
    card.style.opacity = '0';
  });
});
