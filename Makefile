all: frontend backend

frontend:
	$(MAKE) --always-make --directory=frontend

backend: manage.py
	python manage.py runserver

migrate:
	python manage.py makemigrations
	python manage.py migrate

setup: setup_back setup_front

setup_back: 
	$(MAKE) --directory=frontend setup

setup_front: requirements.txt
	test -d venv || python3 -m venv venv
	(source venv/bin/activate && pip install -r requirements.txt)

.PHONY: frontend