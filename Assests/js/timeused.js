
        // Function to read a cookie value
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        // Function to set a cookie value
        function setCookie(name, value, days) {
            const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `${name}=${value}; expires=${expires}; path=/`;
        }

        // Variables for tracking time
        let totalTimeInSeconds = parseInt(getCookie('totalTime')) || 0;
        let timerInterval;

        // Update the total time on the page
        function updateTotalTime() {
            const totalTimeElement = document.getElementById('totalTime');
            totalTimeElement.innerText = formatTime(totalTimeInSeconds);
        }

        // Format time in HH:MM:SS
        function formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const remainingSeconds = seconds % 60;
            return `${hours}h ${minutes}m ${remainingSeconds}s`;
        }

        // Start the timer
        function startTimer() {
            timerInterval = setInterval(function () {
                totalTimeInSeconds++;
                updateTotalTime();
            }, 1000); // Update every second
        }

        // Start the timer when the page loads
        startTimer();

        // Simulate stopping the timer (you would need to implement this based on user interactions)
        setTimeout(function () {
            clearInterval(timerInterval);
            setCookie('totalTime', totalTimeInSeconds, 365); // Store the total time in a cookie for 365 days
        }, 500000); // Stop the timer after 5 seconds (replace with actual logic)

        // Optionally, you can reset the timer when the user leaves the page
        window.addEventListener('beforeunload', function () {
            clearInterval(timerInterval);
            setCookie('totalTime', totalTimeInSeconds, 365); // Store the total time in a cookie for 365 days
        });