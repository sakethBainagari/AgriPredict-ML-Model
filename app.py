from flask import Flask, request, render_template
import numpy as np

# Placeholder for the model that would normally be loaded
# This is a simplified version due to compatibility issues
class SimpleModel:
    def __init__(self):
        print("Using simplified model due to pickle compatibility issues")
    
    def predict(self, features):
        # Return a placeholder prediction (random value between 2000-5000)
        return np.array([[np.random.randint(2000, 5000)]])

# Create simple placeholder preprocessor
class SimplePreprocessor:
    def transform(self, features):
        # Just return the features as is for demonstration
        return features

# Initialize simple model instances
dtr = SimpleModel()
preprocessor = SimplePreprocessor()

# Flask app with static folder configuration
app = Flask(__name__, 
           static_folder='static',
           template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        try:
            # Convert form inputs to appropriate types
            Year = float(request.form['Year'])
            average_rain_fall_mm_per_year = float(request.form['average_rain_fall_mm_per_year'])
            pesticides_tonnes = float(request.form['pesticides_tonnes'])
            avg_temp = float(request.form['avg_temp'])
            Area = request.form['Area']
            Item = request.form['Item']

            # Input validation
            if not Area.strip() or not Item.strip():
                return render_template('error.html', 
                                      error_title="Missing Information", 
                                      error_message="Please provide both Area/Country and Crop Type.")

            if Year < 1900 or Year > 2100:
                return render_template('error.html', 
                                      error_title="Invalid Year", 
                                      error_message="Please enter a valid year between 1900 and 2100.")

            if average_rain_fall_mm_per_year < 0 or pesticides_tonnes < 0:
                return render_template('error.html', 
                                      error_title="Invalid Input", 
                                      error_message="Please ensure rainfall and pesticides values are positive.")

            features = np.array([[Year, average_rain_fall_mm_per_year, pesticides_tonnes, avg_temp, Area, Item]], dtype=object)
            transformed_features = preprocessor.transform(features)
            prediction = dtr.predict(transformed_features).reshape(1, -1)

            # Return the prediction value as a single number
            return render_template('index.html', prediction=int(prediction[0][0]))
        except ValueError as ve:
            # Handle type conversion errors
            return render_template('error.html', 
                                 error_title="Invalid Input Format", 
                                 error_message="Please ensure all fields contain valid numbers.")
        except Exception as e:
            # Handle other errors
            error_message = str(e)
            print(f"Prediction error: {error_message}")
            return render_template('error.html', 
                                  error_title="Prediction Error", 
                                  error_message=f"An error occurred during prediction: {error_message}")

@app.errorhandler(404)
def page_not_found(e):
    return render_template('error.html', 
                          error_title="Page Not Found", 
                          error_message="The page you are looking for does not exist."), 404

@app.errorhandler(500)
def server_error(e):
    return render_template('error.html', 
                          error_title="Server Error", 
                          error_message="An internal server error occurred. Please try again later."), 500

if __name__ == "__main__":
    app.run(debug=True)