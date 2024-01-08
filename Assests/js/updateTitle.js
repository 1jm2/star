function updateTitle() {
    const titleElement = document.querySelector('title');
    const currentDate = new Date();
    
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    
    const formattedDateTime = `${day}_${month}_${year}:${hours}_${minutes}_${seconds}`;
    titleElement.textContent = `Computer-paper  || ${formattedDateTime}\\CADMUS-SCIENCE-SCHOOL:-@jaydevs-web`;
  }
  
  // Call the updateTitle function initially
  updateTitle();
  
  // Set up a timer to update the title every second
  setInterval(updateTitle, 1000);