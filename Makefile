dev: webpack-dev migrate start

build: webpack-build migrate start

start: manage.py
	@open http://localhost:8000
	@(source venv/bin/activate && python manage.py runserver)

webpack-dev:
	@$(MAKE) --always-make --directory=frontend dev

webpack-build:
	@$(MAKE) --always-make --directory=frontend build

migrate:
	@(echo "Migrating Django database")
	@(source venv/bin/activate && python manage.py makemigrations)
	@(source venv/bin/activate && python manage.py migrate)

test:
	@(source venv/bin/activate && coverage run manage.py test; \
	  coverage html --skip-empty --omit=manage.py,"*/migrations/*" \
	)
	@(open $(PWD)/htmlcov/index.html && echo "Opening report in your browser")

install: requirements.txt
	@echo "Ensuring that the virtual environment exists..."
	@test -d venv || python3 -m venv --copies venv
	@echo  "Installing the requirements using pip..."
	@(source venv/bin/activate && pip install --quiet -r requirements.txt)
	@$(MAKE) --directory=frontend install

gdal:
	brew install gdal
	@(source venv/bin/activate && pip install gdal)

.PHONY: webpack