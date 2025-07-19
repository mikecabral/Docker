```yaml
version: '3'

volumes:
  nextcloud-data:
  nextcloud-db:

services:

  nextcloud-app:
    image: nextcloud:latest
    restart: unless-stopped
    volumes:
      - nextcloud-data:/var/www/html
    environment:
      - MYSQL_PASSWORD=$MYSQL_PASSWORD
      - MYSQL_DATABASE=$MYSQL_DATABASE
      - MYSQL_USER=$MYSQL_USER
      - MYSQL_HOST=nextcloud-db
    ports:
      - 80:80

  nextcloud-db:
    image: mariadb:latest
    restart: unless-stopped
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    volumes:
      - nextcloud-db:/var/lib/mysql
    environment:
      - MYSQL_RANDOM_ROOT_PASSWORD=true
      - MYSQL_PASSWORD=$MYSQL_PASSWORD
      - MYSQL_DATABASE=$MYSQL_DATABASE
      - MYSQL_USER=$MYSQL_USER
```


```yaml
version: '3'

volumes:
  nextcloud-data:
  nextcloud-db:

services:

  nextcloud-app:
    image: nextcloud:latest
    restart: unless-stopped
    volumes:
      - /media/Nextcloud/html:/var/www/html
    environment:
      - POSTGRES_DB=${POSTGRES_DB}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_HOST=${POSTGRES_HOST}
    ports:
      - ${WEBPORT}:80

  nextcloud-db:
    image: postgres:latest
    restart: unless-stopped
    volumes:
      - ./nextcloud-db:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=${POSTGRES_DB}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
```

.env
```bash
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_HOST=nextcloud-db
WEBPORT=8888
```
