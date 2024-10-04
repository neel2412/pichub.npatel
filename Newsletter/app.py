from flask import Flask, request
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://pichub.npatel.co.uk"}})

@app.route('/', methods=['POST'])
def subscribe():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        privacy_policy = data.get('privacyPolicy')

        # Load existing spreadsheet or create a new one
        filename = 'subscriptions.xlsx'
        if os.path.exists(filename):
            df = pd.read_excel(filename)
        else:
            df = pd.DataFrame(columns=['Name', 'Email', 'Privacy Policy'])

        # Create a new DataFrame with the new row
        new_row = pd.DataFrame({
            'Name': [name],
            'Email': [email],
            'Privacy Policy': [privacy_policy]
        })

        # Use pd.concat to append the new row to the existing DataFrame
        df = pd.concat([df, new_row], ignore_index=True)

        # Save the DataFrame to an Excel file
        df.to_excel(filename, index=False)

        return f"Thank you, {name}! You've successfully subscribed."
    except Exception as e:
        print(f"Error: {e}")
        return "An error occurred", 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
