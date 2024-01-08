var elements = document.querySelectorAll('.child');

elements.forEach(function(element) {
    var storageKey = "installed_" + element.dataset.boxId;

    element.addEventListener('click', function() {
        changeTextAndIcon(element);
        showDownloadNotification();
    });

    // Load installation status from local storage
    if (localStorage.getItem(storageKey) === "true") {
        var installText = element.querySelector(".installText");
        var box = element.querySelector(".box");

        installText.innerText = "Installed";
        // Change the icon to a tick
        box.querySelector("i").className = "fas fa-check-circle";
    }
});

function changeTextAndIcon(element) {
    var installText = element.querySelector(".installText");
    var box = element.querySelector(".box");
    var storageKey = "installed_" + element.dataset.boxId;

    if (localStorage.getItem(storageKey) !== "true") {
        installText.innerText = "Installed";
        // Change the icon to a tick
        box.querySelector("i").className = "fas fa-check-circle";
        // Store the value in local storage
        localStorage.setItem(storageKey, "true");
    } else {
        alert("Already installed!");
    }
}

function showDownloadNotification() {
    var notification = document.getElementById("downloadNotification");
    notification.style.display = "block";
}

function closeNotification() {
    var notification = document.getElementById("downloadNotification");
    notification.style.display = "none";
}