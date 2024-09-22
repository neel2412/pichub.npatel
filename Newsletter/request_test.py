import requests

# Replace with your actual ngrok URL
ngrok_url = 'https://tick-full-lobster.ngrok-free.app/'

headers = {
    'ngrok-skip-browser-warning': 'true'
}

response = requests.get(ngrok_url, headers=headers)
print(response.text)
