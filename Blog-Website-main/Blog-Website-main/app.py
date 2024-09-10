from flask import Flask
from routes import app  # Import the app instance from routes.py

if __name__ == '__main__':
    app.app_context().push()  # Ensure an app context is available
    app.run(debug=True,host='0.0.0.0')
