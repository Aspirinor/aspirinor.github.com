document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');
    const yearMonthElement = document.getElementById('yearMonth');
    const lunarSolarTermElement = document.getElementById('lunarSolarTerm');

    function getCurrentWeekDates() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // Sunday - Saturday : 0 - 6
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)); // Adjust when today is Sunday

        const dates = [];
        for (let i = 0; i < 7; i++) {
            const current = new Date(startOfWeek);
            current.setDate(startOfWeek.getDate() + i);
            dates.push(current);
        }

        return dates;
    }

    function formatDate(date) {
        return date.getDate().toString().padStart(2, '0');
    }

    function displayWeekDates() {
        const dates = getCurrentWeekDates();
        const today = new Date();

        dates.forEach((date, index) => {
            const day = formatDate(date);
            const dateElement = document.createElement('div');
            dateElement.className = 'date';
            dateElement.textContent = day;
            days[index].appendChild(dateElement);

            if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
                days[index].classList.add('selected');
            }
        });

        // Update year, month, lunar, and solar term
        yearMonthElement.textContent = `${today.getFullYear()}年${(today.getMonth() + 1).toString().padStart(2, '0')}月`;

        // Fetch and update lunar and solar term
        fetchLunarAndSolarTerm(today);
    }

    function fetchLunarAndSolarTerm(today) {
        const dateStr = today.toISOString().split('T')[0];
        const url = `https://holiday-api.mooim.com/v1/${dateStr}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const lunarData = data.data.lunar;
                const lunarYear = lunarData.year;
                const lunarMonth = lunarData.month;
                const lunarDay = lunarData.day;
                const solarTerm = lunarData.jie_qi || '';

                let displayInfo = `${lunarYear}年${lunarMonth}${lunarDay}`;
                if (solarTerm) {
                    displayInfo += ` · ${solarTerm}`;
                }

                lunarSolarTermElement.textContent = displayInfo;
            })
            .catch(error => {
                console.error('Error fetching lunar and solar term data:', error);
            });
    }

    displayWeekDates();
});
