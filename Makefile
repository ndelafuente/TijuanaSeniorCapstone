all: compile start

start: manage.py
	@open http://localhost:8000
	python manage.py runserver

compile: migrate webpack

webpack:
	@$(MAKE) --always-make --directory=frontend

migrate:
	@(echo "Migrating Django database")
	@(source venv/bin/activate && python manage.py makemigrations)
	@(source venv/bin/activate && python manage.py migrate)

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