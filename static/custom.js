// Add a "current year" feature to automatically update the year field
document.addEventListener('DOMContentLoaded', function() {
    // Set current year as default if available
    const yearField = document.getElementById('Year');
    if (yearField && yearField.value === '') {
        const currentYear = new Date().getFullYear();
        yearField.value = currentYear;
    }
    
    // Add floating labels effect
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        control.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check initial state
        if (control.value !== '') {
            control.parentElement.classList.add('focused');
        }
    });
    
    // Add helpful tooltips for fields
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add data visualization placeholder
    const resultSection = document.getElementById('result-section');
    if (resultSection) {
        // Create a canvas for a simple chart
        const chartContainer = document.createElement('div');
        chartContainer.className = 'mt-4';
        chartContainer.innerHTML = `
            <h4 class="mb-3">Yield Comparison</h4>
            <div class="chart-container">
                <div class="chart-bar" style="height: 30px; width: 100%; background-color: #3D8361; opacity: 0.7; margin-bottom: 5px;">
                    <span class="chart-label">Average Yield: 3000 hg/ha</span>
                </div>
                <div class="chart-bar predicted-bar" style="height: 30px; background-color: #D6CDA4; margin-bottom: 15px;">
                    <span class="chart-label">Predicted Yield: <span id="chart-predicted-value"></span> hg/ha</span>
                </div>
            </div>
        `;
        resultSection.appendChild(chartContainer);
        
        // Update the chart with the predicted value
        const resultValue = document.getElementById('result-value');
        const chartPredictedValue = document.getElementById('chart-predicted-value');
        const predictedBar = document.querySelector('.predicted-bar');
        
        if (resultValue && chartPredictedValue && predictedBar) {
            const predictedValue = parseFloat(resultValue.getAttribute('data-value'));
            chartPredictedValue.textContent = predictedValue.toLocaleString();
            
            // Set the width as a percentage (compared to the average)
            const percentage = (predictedValue / 3000) * 100;
            predictedBar.style.width = `${Math.min(percentage, 150)}%`;
            
            // Add color coding
            if (percentage > 100) {
                predictedBar.style.backgroundColor = '#9BC53D'; // Above average (green)
            } else if (percentage > 80) {
                predictedBar.style.backgroundColor = '#D6CDA4'; // Near average (neutral)
            } else {
                predictedBar.style.backgroundColor = '#FF9B42'; // Below average (orange)
            }
        }
    }
}); 