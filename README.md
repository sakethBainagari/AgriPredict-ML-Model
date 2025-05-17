# AgriPredict: Crop Yield Prediction using Machine Learning

AgriPredict is a web application that uses machine learning to predict crop yields based on environmental factors and agricultural inputs. Farmers and agricultural professionals can use this tool to make data-driven decisions about their crops.

![AgriPredict Screenshot](https://img.shields.io/badge/AgriPredict-Crop%20Yield%20Prediction-brightgreen)

## Features

- **Intelligent Crop Yield Prediction**: Predict crop yields based on data like rainfall, temperature, pesticide usage, and more
- **Interactive Data Visualization**: Visual comparison of predicted yield with regional averages
- **Personalized Recommendations**: Receive customized agricultural recommendations based on prediction results
- **Multi-crop Comparison**: Compare potential yields between different crops
- **Multilingual Support**: Available in English, Hindi, Telugu, Malayalam, Kannada, and Gujarati
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Backend**: Python, Flask
- **Machine Learning**: Scikit-learn, Pandas, NumPy
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Data Visualization**: Custom JavaScript charting

## Getting Started

### Prerequisites

- Python 3.8 or higher
- Git

### Local Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/AgriPredict-ML-Model.git
   cd AgriPredict-ML-Model
   ```

2. Create and activate a virtual environment (optional but recommended):
   ```
   python -m venv agri_env
   # On Windows
   agri_env\Scripts\activate
   # On macOS/Linux
   source agri_env/bin/activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python app.py
   ```

5. Open your browser and navigate to:
   ```
   http://127.0.0.1:5000
   ```

## Deployment

This application can be deployed for free on Render.com. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

Quick deployment steps:
1. Push your code to GitHub
2. Create a free Render.com account
3. Create a new Web Service pointing to your GitHub repository
4. Configure with Python environment
5. Deploy and access via the provided URL

## Usage

1. Enter the required agricultural data in the prediction form
2. Select your crop type and region
3. Click "Predict Yield" to generate a prediction
4. View the predicted yield, comparison charts, and personalized recommendations
5. Use the language selector to switch between supported languages

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [Scikit-learn](https://scikit-learn.org/) for machine learning tools
- [Flask](https://flask.palletsprojects.com/) for the web framework
- [Bootstrap](https://getbootstrap.com/) for the frontend design
