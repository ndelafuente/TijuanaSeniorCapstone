import config as cf


class ArcgisClient:
    """
    This class will serve as a way to interface the ArcGIS REST API
    """
    pass

def sandbox():
    from arcgis.gis import GIS
    gis = GIS(cf.AGOL_URL, username=cf.USER, password=cf.PASS)
    print(gis.users.me)
    # tmp = gis.content.search(query="owner:NDELAFUENTE@sandiego.edu_usandiego")
    # print(tmp, file = open('tmp.json', 'w'))
