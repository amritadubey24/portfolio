document.addEventListener('keydown', (e) => {
    if (e.keyCode === 123 || (e.keyCode === 85 && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67 || e.keyCode === 74)) {
        e.preventDefault();
    }
});
