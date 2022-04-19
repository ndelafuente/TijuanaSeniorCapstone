import requests  # pip install requests
import config as cfg
from os import system

def get_token():
    params = {
        'client_id': cfg.CLIENT_ID,
        'client_secret': cfg.CLIENT_SECRET,
        'grant_type': "client_credentials"
    }
    request = requests.get('https://www.arcgis.com/sharing/rest/oauth2/token',
                          params=params)
    response = request.json()
    token = response["access_token"]
    return token

def authorize():
    parameters = {
        'client_id': cfg.CLIENT_ID,
        'response_type': 'code',
        'expiration': 60,
        'redirect_uri': 'urn:ietf:wg:oauth:2.0:oob'
    }
 
    # Ask the portal to authorize us
    url = 'https://' + cfg.PORTAL_NAME + '.maps.arcgis.com/sharing/rest/oauth2/authorize'
    
    response = requests.get(url, params=parameters)
    system(f"open {response.url}")
    content = response.text

    outfile = "response.html"
    file = open(outfile, 'w')

    print(content, file=file)
    # system(f"open {outfile}")

authorize()

# token = get_token()
# print(token)
