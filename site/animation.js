// Décale l'apparition des cases, une après l'autre (un seul moment animé).
document.querySelectorAll('.grille i').forEach((c, n) => c.style.animationDelay = (n * 25) + 'ms');
