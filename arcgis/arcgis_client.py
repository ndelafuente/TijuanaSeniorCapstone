from click import pass_context
import config as cf

from arcgis.gis import GIS


class Blank:
    """
    This class will serve as a way to interface the ArcGIS REST API
    """
    def __init__(self, portal:str, credentials, id:str):
        """
        Initializes an instance of the ArcgisClient

        @param portal The portal url to access
        @param api_key An API key
        @param app_credentials A tuple containing the client ID and client secret
        @param user_credentials A tuple containing a username and password
        """
        # Login and authenticate
        self.gis = self._login(portal, credentials)

        # Connect to feature layer
        self.feature_layer = self._connect_to_layer(id)

    def _login(self, portal:str, credentials):
        """
        @param credentials api_key=None, app_credentials=None, user_credentials=None
        """
        return GIS(url=portal)

    def _connect_to_layer(self, id):
        item = self.gis.content.get(id)
        return item.layers[0]

    def add_features(self):
        pass

    def update_features(self):
        pass

