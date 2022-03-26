# This is the Tijuana River Watershed Monitoring Project

[This](https://www.valentinog.com/blog/drf/#django-and-react-together) is the tutorial by Valentino that I used to initialize the project.

### Requirements

1. **Node.js**
    
    (On mac, you can use homebrew to install it from the command line)

        brew install npm

2. **Python 3.10** ([install here](https://www.python.org/downloads/))

### Setup
1. Run the following commands to set up your python virtual environment and install dependencies

        python3 -m pip install --user --upgrade pip
        python3 -m venv --copies --clear venv
        source venv/bin/activate
        python3 -m pip install -r requirements.txt

2. From the main folder run the following to set up JavaScript libraries

        cd ./frontend && npm init -y
        npm i webpack webpack-cli --save-dev
        npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
        npm i react react-dom --save-dev


### Additional Documentation

1. [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
2. [Arc GIS API](https://github.com/Esri/react-arcgis)
