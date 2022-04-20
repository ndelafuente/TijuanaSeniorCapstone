from asyncio.log import logger
import json
import arcgis
import requests
import config as cfg
from os import system

class ApiError(BaseException):
    def __init__(self, error_response):
        self.message = error_response

    def __repr__(self):
        return str(self.message)

def get_token(client_id, client_secret):
    params = {
        'client_id': client_id,
        'client_secret': client_secret,
        'grant_type': "client_credentials"
    }
    request = requests.get('https://www.arcgis.com/sharing/rest/oauth2/token',
                        params=params)

    response = request.json()
    return parse_response(response, "access_token")

def parse_response(response: dict, key: str):
    if key in response:
        return response[key]
    elif 'error' in response:
        raise ApiError(response['error'])
    else:
        raise ApiError("Unsopported response type:" + str(response))

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

