document.querySelectorAll('.bar-filling').forEach((fill) => {
    const width = getComputedStyle(fill).width; // Ambil lebar dari CSS
    fill.style.setProperty('--fill-width', width);
});