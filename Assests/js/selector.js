
document.addEventListener("DOMContentLoaded", function() {
    let selectedDivs = 0;

    function toggleSelection(div) {
      div.classList.toggle('selected');
      selectedDivs = document.querySelectorAll('.selectable.selected').length;
      document.getElementById('selectedCount').textContent = selectedDivs;
    }

    function printSelectedDivs() {
      // Add code here to print the selected divs or perform any other actions
      // based on the user's selection.
      // You can access the selected divs using document.querySelectorAll('.selectable.selected');
    }

    const selectableDivs = document.querySelectorAll('.selectable');
    for (const div of selectableDivs) {
      div.addEventListener('click', function() {
        toggleSelection(this);
      });
    }

    // Attach event listener to the "Print" button
    const printButton = document.querySelector('.print-button');
    if (printButton) {
      printButton.addEventListener('click', printSelectedDivs);
    }
  });
