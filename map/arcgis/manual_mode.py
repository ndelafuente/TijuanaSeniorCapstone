import json
import requests
import config as cf


class ApiError(BaseException):
    def __init__(self, error_response):
        self.message = error_response

    def __repr__(self):
        return str(self.message)

## API Tools
def parse_response(response: dict, key: str):
    if key in response:
        return response[key]
    elif 'error' in response:
        raise ApiError(response['error'])
    else:
        raise ApiError("Unsopported response type:" + str(response))

## Methods to consume the ArcGIS REST API
def get_token(client_id: str, client_secret: str) -> str:
    """
    Uses application credentials to generate a temporary access token

    @note Only provides read-only access
    """
    params = {
        'client_id': client_id,
        'client_secret': client_secret,
        'grant_type': "client_credentials"
    }
    request = requests.post('https://www.arcgis.com/sharing/rest/oauth2/token',
                        params=params)

    response = request.json()
    return parse_response(response, "access_token")

def authorize():
    parameters = {
        'client_id': cf.CLIENT_ID,
        'response_type': 'code',
        'expiration': 60,
        'redirect_uri': 'urn:ietf:wg:oauth:2.0:oob'
    }

    # Ask the portal to authorize us
    url = 'https://' + cf.PORTAL_NAME + '.maps.arcgis.com/sharing/rest/oauth2/authorize'
    
    response = requests.get(url, params=parameters)
    # system(f"open {response.url}")
    content = response.text

    outfile = "response.html"
    file = open(outfile, 'w')

    print(content, file=file)
    # system(f"open {outfile}")



class AppLogin:
    def get_feature_layer_fields():
        params = {
            'f': 'json',
            'token': get_token(cf.CLIENT_ID, cf.CLIENT_SECRET),
        }
        url = cf.FEATURE_LAYER_URL
        
        data = requests.post(url, params=params).json()
        fields = data["fields"]
        print(fields)

    def add_feature():
        features = [
            {
                'attributes': {
                    'NAME': 'Joe Smith',
                    'APPROVED': True,
                },
                'geometry': {
                    'x': -118.15,
                    'y' : 33.80
                }
            },
            {
                'attributes': {
                    'NAME': 'John Doe',
                    'APPROVED': False,
                },
                'geometry': {
                    'x': -118.37,
                    'y': 34.086
                }
            }
        ]
        params = {
            'f': 'json',
            'token': get_token(cf.CLIENT_ID, cf.CLIENT_SECRET),
            'features': json.dumps(features)
        }
        url = cf.FEATURE_LAYER_URL + '/addFeatures'

        response = requests.post(url, params=params).json()
        print(response)
    



if __name__ == "__main__":
    AppLogin.add_feature()

