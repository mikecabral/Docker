```yaml
version: '2'

services:

  mysql:
    ports:
      - 3306:3306
    image: mysql:5.6
    container_name: mysql
    hostname: mysql
    environment:
      MYSQL_RANDOM_ROOT_PASSWORD: 'yes'
      MYSQL_DATABASE: semaphore_db
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    volumes:
      - mysql_data:/var/lib/mysql

  semaphore:
    ports:
      - 3000:3000
    image: ansiblesemaphore/semaphore:latest
    container_name: semaphore
    environment:
      SEMAPHORE_DB_USER: ${SEMAPHORE_DB_USER}
      SEMAPHORE_DB_PASS: ${SEMAPHORE_DB_PASS}
      SEMAPHORE_DB_HOST: mysql
      SEMAPHORE_DB_PORT: 3306
      SEMAPHORE_DB: semaphore_db
      SEMAPHORE_PLAYBOOK_PATH: /tmp/semaphore/
      SEMAPHORE_ADMIN_PASSWORD: ${SEMAPHORE_ADMIN_PASSWORD}
      SEMAPHORE_ADMIN_NAME: admin
      SEMAPHORE_ADMIN_EMAIL: ${SEMAPHORE_ADMIN_EMAIL}
      SEMAPHORE_ADMIN: admin
      SEMAPHORE_ACCESS_KEY_ENCRYPTION: ${SEMAPHORE_ACCESS_KEY_ENCRYPTION}
    depends_on:
      - mysql

volumes:
  mysql_data:
```

##### FIREWALL /etc/ufw/applications.d/ufw-ansible
```
[Ansible]
title=Ansible Semaphore
description=Ansible Semaphore
ports=3007/tcp
```
