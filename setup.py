import os

venv = 'venv'
node = 'yungas_tasks_frontend/node_modules'

if os.path.exists(node) and os.path.exists(venv):
    os.system('cd yungas_tasks_frontend/ && npm start &> /dev/null')
    os.system('nohup python3 yungas_tasks_backend/manage.py runserver localhost:8000')
else:
    os.system('python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt')
    os.system('source venv/bin/activate && python3 yungas_tasks_backend/manage.py migrate')
    os.system('cd yungas_tasks_frontend/ && npm install && npm start &> /dev/null')
    os.system('nohup python3 yungas_tasks_backend/manage.py runserver localhost:8000')
