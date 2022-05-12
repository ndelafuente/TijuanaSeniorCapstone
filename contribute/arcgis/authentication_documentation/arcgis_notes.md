## Introduction
**Purpose:** to create a web application that collects and displays locational data on a map.

**Target end users:** anonymous users that are unknown to the ArcGIS platform

**Requirements:**
1. The data should be visible as location pins on [this WebMap](https://usandiego.maps.arcgis.com/home/item.html?id=1195ccfc8c674620a0c2377f04a9c9d6)

1. The user should be able to filter and search through the datapoints

1. This application should log in to the ArcGIS platform to expose privately hosted data layers

1. Should be automated, so it can scale


Options:
* 1 ArcGIS database (with an column to indicate whether it is approved)
* 1 Django database (not sure if this is possible)
** Django database which updates ArcGIS database after approval


## Resarch
## ArcGIS REST APIs App login Authentication ([docs](https://developers.arcgis.com/rest/users-groups-and-items/authentication.htm))

Applications that target end users who are unknown to the ArcGIS platform use app logins to connect to the platform. In this case, the application must use both an APPID (OAuth 2 client\_id) and an APPSECRET (OAuth 2 client\_secret). You are responsible for building the application in a way that keeps the APPSECRET secret, including from malicious users who download and inspect the iOS or Android application or view the source of the JavaScript application using developer tools. A malicious application that has access to the application's credentials (APPID and APPSECRET) can access billable services on ArcGIS, which will be billed to the application. For most JavaScript, iOS, and Android applications, this implies that the app must have a server side application component that keeps the application credentials secure and performs work on behalf of the app.

The server side application component that has access to the application's credentials can obtain a token using a single request. The OAuth 2 grant type is set to client\_credentials. The actual POST request is made to the portal's OAuth 2 token endpoint.

Successful authentication directly returns a JSON response containing the access token that allows the application to work with resources that are accessible to the application (that is, have been shared with the application). Use of the client\_secret as previously described is mandatory.

The server side application component that makes this call can be a custom component that has its own API that wraps the ArcGIS platform API and exposes only those functions needed by the app.

The server side application component can also be a proxy that preserves the ArcGIS REST signatures while forwarding calls to the ArcGIS platform API. This is the option that needs to be implemented if the application is built using the ArcGIS client APIs that target the REST signatures.

In both cases, the calls made by the server side application component to the ArcGIS platform need to include access tokens obtained by the component in exchange for application credentials using the client\_credentials grant previously described.

In both cases, the server side application component also needs to be secured so that only the application can access it.

The following are some of the possible solutions for securing the server side component to the application:

*   For applications that have their own authenticated users who remain unknown to the ArcGIS platform, the application can restrict access to the server side application component to authenticated application user sessions.
    
    This assumes that app users who are developers are not malicious. If they are, and misuse the server side application component, they can be audited and tracked.
    
*   Applications whose users are anonymous even to the application can restrict access to the server side application component to human end users using CAPTCHA technology. This requires the application to incorporate CAPTCHA into its user experience.
*   Applications can also restrict the functionality exposed by the server side component, place IP restrictions on the server side app components, and build rate limits into the component as appropriate. Rate limits are effective in preventing misuse of the server side application component by malicious server side code.

The techniques described here apply to JavaScript, iOS, Android, and similar client devices.

---


# Obtaining access to the ArcGIS application ([docs](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/oauth-2.0/))

Authorize Endpoint ([docs](https://developers.arcgis.com/rest/users-groups-and-items/authorize.htm))
https://www.arcgis.com/sharing/rest/oauth2/authorize?client_id=CLIENT_ID&response_type=code&expiration=N_SECONDS&redirect_uri=REDIRECT_URI

Token Endpoint ([docs](https://developers.arcgis.com/rest/users-groups-and-items/token.htm))
https://www.arcgis.com/sharing/rest/oauth2/token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&grant_type=client_credentials

Microsoft OAuth 2.0 ([docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow))
https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize?
client_id=6731de76-14a6-49ae-97bc-6eba6914391e
&response_type=code
&redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F
&response_mode=query
&scope=https%3A%2F%2Fgraph.microsoft.com%2Fmail.read%20api%3A%2F%2F
&state=12345


    CLIENT_ID: R8Euu5jhtUJw4ZdA
    CLIENT_SECRET: b8ce6fcc9b9446f39260752ba109e8a9
    N_SECONDS: 30
    REDIRECT_URI: WebMap

https://www.arcgis.com/sharing/rest/oauth2/token?client_id=R8Euu5jhtUJw4ZdA&client_secret=b8ce6fcc9b9446f39260752ba109e8a9&grant_type=client_credentials

https://www.arcgis.com/sharing/rest/oauth2/authorize?client_id=R8Euu5jhtUJw4ZdA&response_type=token&redirect_uri=https://usandiego.maps.arcgis.com/home/item.html?id=1195ccfc8c674620a0c2377f04a9c9d6

### USD ADFS Authentication
https://adfs.sandiego.edu/adfs/ls/idpinitiatedsignon

ADFS: Active Directory Federation Services ([Microsoft docs](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services))

Potential implementation methods:

1. WSFederationAuthenticationModule ([docs](https://docs.microsoft.com/en-us/dotnet/api/system.identitymodel.services.wsfederationauthenticationmodule?view=netframework-4.8))

    *May require [pythonnet](https://github.com/pythonnet/pythonnet) a .NET library for python*

1. 

### Options to implement dynamically updated location droppers:

1. Feature service
https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/services/feature-service/

2. Hosted Feature layer
https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/hosted-feature-layers/

3. Dynamic layers (Enterprise)
https://enterprise.arcgis.com/en/server/latest/publish-services/windows/about-dynamic-layers.htm

Query a feature layer (SQL)
https://developers.arcgis.com/javascript/latest/query-a-feature-layer-sql/


### APIs

JS API
https://github.com/Esri/jsapi-resources

Python API
https://developers.arcgis.com/python/

ARCGis Arcade
https://developers.arcgis.com/arcade/


---

### Updating Features

1. Need to pick a coordinate system
https://developers.arcgis.com/rest/services-reference/enterprise/using-spatial-references.htm

1. Create a Point Geometry object
https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm

1. Create a Feature object from the Geometry object and a list of attributes
https://developers.arcgis.com/documentation/common-data-types/feature-object.htm

    { // example feature JSON object
        "geometry": {
            "x": -17568824.553,
            "y": 2428377.352700006,
            "spatialReference": {
                "wkid": 102100, // from step 1
                "latestWkid": 3857
            }
        }, 
        "attributes" : {
            // populate with fields from the project model, e.g.
            "objectid": 1, // unique identifier for project
            "name": "example project",
            "longitude": -157.8234362,
            "latitude": 21.30578163,
            "is_active": true,
            "start_date": 1227663551096, // dates should be represented in epoch time
            "end_date": 1227663551096,
            // and so on ...

            // is this necessary?
            "SHAPE": {
                "x": -17568824.553,
                "y": 2428377.352700006,
                "spatialReference": {
                    "wkid": 102100,
                    "latestWkid": 3857
                }
            }
        }
    }



1. Create an array list of Features to be updated ([docs](https://developers.arcgis.com/rest/services-reference/enterprise/update-features.htm))



---

## Notes

* Create a script to automate converting data from [SDSU's archive](https://trw.sdsu.edu/English/Data/Data/TRW/trwdata.html) *May be used for realtime data as well*


---

## Saved for later
https://developers.arcgis.com/python/guide/working-with-different-authentication-schemes/
https://www.prowestgis.com/there-and-back-again/
https://developers.arcgis.com/rest/users-groups-and-items/authorize.htm
https://docs.microsoft.com/en-us/answers/questions/657067/about-error-at-the-time-of-saml-authentication-coo.html
https://www.samltool.com/url.php
https://www.samltool.com/decode.php
https://www.samltool.com/prettyprint.php
https://github.com/onelogin/python3-saml
