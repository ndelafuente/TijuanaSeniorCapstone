import unittest

import arcgis_client as agc
import config as cf

class TestArcGIS(unittest.TestCase):
    def test_get_token(self):
        # Test with bad client ID and secret
        with self.assertRaises(agc.ApiError):
            agc.get_token(cf.CLIENT_ID, 'bad_secret')
            agc.get_token('bad_id', 'bad_secret')
        
        # Ensure the configured credentials are valid
        token = agc.get_token(cf.CLIENT_ID, cf.CLIENT_SECRET)
        self.assertIsNotNone(token, msg = "Invalid credentials")
    
    def test_get_feature(self):
        pass

if __name__ == '__main__':
    try:
        unittest.main()
    except KeyboardInterrupt:
        print("Testing interrupted by user")