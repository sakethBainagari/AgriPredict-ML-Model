document.addEventListener('DOMContentLoaded', function() {
    // Form validation and submission
    const predictionForm = document.getElementById('prediction-form');
    const loadingIndicator = document.getElementById('loading');
    const resultSection = document.getElementById('result-section');
    
    if (predictionForm) {
        predictionForm.addEventListener('submit', function(e) {
            if (!validateForm()) {
                e.preventDefault();
                return false;
            }
            
            // Show loading indicator
            if (loadingIndicator) {
                loadingIndicator.style.display = 'block';
            }
            
            // Hide previous results while loading
            if (resultSection) {
                resultSection.style.display = 'none';
            }
            
            return true;
        });
    }
    
    // Form validation function
    function validateForm() {
        const year = document.getElementById('Year');
        const rainfall = document.getElementById('average_rain_fall_mm_per_year');
        const pesticides = document.getElementById('pesticides_tonnes');
        const avgTemp = document.getElementById('avg_temp');
        const area = document.getElementById('Area');
        const item = document.getElementById('Item');
        
        let isValid = true;
        
        // Year validation
        if (!year.value || year.value < 1900 || year.value > 2100) {
            showError(year, 'Please enter a valid year between 1900 and 2100');
            isValid = false;
        } else {
            removeError(year);
        }
        
        // Rainfall validation
        if (!rainfall.value || rainfall.value < 0) {
            showError(rainfall, 'Please enter a valid rainfall value');
            isValid = false;
        } else {
            removeError(rainfall);
        }
        
        // Pesticides validation
        if (!pesticides.value || pesticides.value < 0) {
            showError(pesticides, 'Please enter a valid pesticides amount');
            isValid = false;
        } else {
            removeError(pesticides);
        }
        
        // Average temperature validation
        if (!avgTemp.value) {
            showError(avgTemp, 'Please enter a valid temperature');
            isValid = false;
        } else {
            removeError(avgTemp);
        }
        
        // Area validation
        if (!area.value.trim()) {
            showError(area, 'Please enter an area or country');
            isValid = false;
        } else {
            removeError(area);
        }
        
        // Item (crop) validation
        if (!item.value.trim()) {
            showError(item, 'Please enter a crop type');
            isValid = false;
        } else {
            removeError(item);
        }
        
        return isValid;
    }
    
    // Show error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (!errorElement) {
            const error = document.createElement('div');
            error.className = 'error-message text-danger small mt-1';
            error.textContent = message;
            formGroup.appendChild(error);
        } else {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        input.classList.add('is-invalid');
    }
    
    // Remove error message
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.style.display = 'none';
        }
        
        input.classList.remove('is-invalid');
    }
    
    // Animation for result card (if present)
    if (resultSection) {
        resultSection.style.display = 'block';
        
        // Animate the number
        const resultValue = document.getElementById('result-value');
        if (resultValue) {
            const targetValue = parseFloat(resultValue.getAttribute('data-value'));
            animateValue(resultValue, 0, targetValue, 1500);
        }
    }
    
    // Number animation function
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        
        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = currentValue.toLocaleString();
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end.toLocaleString();
            }
        }
        
        window.requestAnimationFrame(step);
    }
}); 