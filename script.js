//your code here
const grid = document.getElementById('grid');
    let draggedElement = null;

    grid.addEventListener('dragstart', (e) => {
      if (e.target.classList.contains('image-div')) {
        draggedElement = e.target;
      }
    });

    grid.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    grid.addEventListener('drop', (e) => {
      if (e.target.classList.contains('image-div') && draggedElement) {
        // Swap background images
        const tempBg = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = tempBg;

        draggedElement = null; // Reset dragged element
      }
    });
