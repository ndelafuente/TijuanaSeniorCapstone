# This is the Tijuana River Watershed Monitoring Project

I used [this tutorial by Valentino](https://www.valentinog.com/blog/drf/#django-and-react-together) to initialize the project.

### Requirements

1. **Node.js**
    
    (On mac, you can use [homebrew](https://brew.sh) to install it from the command line)

        brew install npm

2. **Python 3.10** ([install here](https://www.python.org/downloads/))

    Or with homebrew

        brew install python@3.10

### Setting up the environment
1. Clone this repository into your desired folder and cd into it

        git clone https://github.com/ndelafuente/TijuanaSeniorCapstone.git
        cd TijuanaSeniorCapstone

    **Are you now in `TijuanaRiverWatershed`? Okay, let's begin**

1. If you have Anaconda installed, you should run the following to deactivate the conda virtual environment: `(base)`
    
        conda deactivate
    
    And to stop Anaconda from automatically activating on startup:
    
        conda config --set auto_activate_base false

1. Ensure you are using Python 3.10.x
    
        python3 --version
    
    If `Python 3.10.x` is not printed:
    
    a) If you just downloaded Python from python.org, you will need to restart your terminal/IDE
    
    b) If you still do not have the correct version, ensure you are in the base directory of this folder, and run one of the following:
    
        ./find_cmd python3 3.10 ~/.zprofile # for zsh
        
    [//]: <> (invisible comment to break code block)
    
        ./find_cmd python3 3.10 ~/.bash_profile # for bash
    
    This script will attempt to find all instances of python 3.10. You will then select a version and it will add its path to your shell profile. 
    
    *Restart your terminal, you should now hopefully be using Python 3.10*

1. Run the following commands to set up your python virtual environment and install the required dependencies

        python3 -m pip install --user --upgrade pip
        make install

1. You will also need to install [GDAL](https://gdal.org/download.html) (this may take a while)

        make gdal

### Running the server
1. All you have to do is:

        make

### Additional Documentation

1. [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
2. [ArcGIS ReactJS API](https://github.com/Esri/react-arcgis)
