# This is the Tijuana River Watershed Monitoring Project

I used [this tutorial by Valentino](https://www.valentinog.com/blog/drf/#django-and-react-together) to initialize the project.

### Requirements

1. **Node.js**
    
    (On mac, you can use homebrew to install it from the command line)

        brew install npm

2. **Python 3.10** ([install here](https://www.python.org/downloads/))

### Setup
1. Clone this repository into your desired folder and cd into it
    **Are you now in `TijuanaRiverWatershed`? Okay, let's begin**

1. If you have Anaconda installed, you should run the following to deactivate the conda virtual environment: `(base)`
    
        conda deactivate
    
    And to stop Anaconda from automatically activating on startup:
    
        conda config --set auto_activate_base false

1. Ensure you are using Python 3.10.x
    
        python3 --version
    
    If `Python 3.10.x` is not printed:
    
    a) If you just downloaded Python, quit the application you are using, and reopen it
    
    b) If you still do not have the correct version, ensure you are in the base directory of this folder, and run one of the following:
    
        ./find_cmd python3 3.10 ~/.zprofile # for zsh
    [//]: <> (invisible comment to break code block)
        ./find_cmd python3 3.10 ~/.bash_profile # for bash
    
    Then restart your application.
    
    *You should now hopefully be using Python 3.10*

1. Run the following commands to set up your python virtual environment and install the required dependencies

        python3 -m pip install --user --upgrade pip
        python3 -m venv --clear venv
        source venv/bin/activate
        python3 -m pip install -r requirements.txt

1. Still in the main folder run the following to set up JavaScript libraries

        cd ./frontend && npm install --no-fund && cd ..


### Running the server
1. Move into the frontend folder, run webpack, then move back up to the home folder

        cd ./frontend && npm run dev && cd ..

1. Migrate the database

        python manage.py migrate

1. Start the development server

        python manage.py runserver

### Additional Documentation

1. [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
2. [Arc GIS API](https://github.com/Esri/react-arcgis)
