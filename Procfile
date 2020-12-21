worker: celery -A app2.celery worker --loglevel=info
web: gunicorn -b 0.0.0.0:$PORT app:app2 --timeout 120