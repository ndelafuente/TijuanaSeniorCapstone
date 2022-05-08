all: frontend backend

frontend:
	$(MAKE) --always-make --directory=frontend

backend: manage.py
	python manage.py runserver

migrate:
	python manage.py makemigrations
	python manage.py migrate

install: requirements.txt
	pip install -r requirements.txt

virtualenv: venv/bin/activate
	test -d venv || python3 -m venv venv

.PHONY: frontend