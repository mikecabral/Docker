```yaml
version: '3.1'

services:

  wordpress:
    image: wordpress
    container_name: wordpress-orange
    restart: unless-stopped
    ports:
      - ${WEB_SERVER_PORT}:80
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: ${MYSQL_DATABASE_USER_NAME}
      WORDPRESS_DB_PASSWORD: ${MYSQL_DATABASE_PASSWORD}
      WORDPRESS_DB_NAME: wordpress
    networks:
      - wordpress
    volumes:
      - ./wordpress:/var/www/html
  db:
    image: jc21/mariadb-aria:latest
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: ${MYSQL_DATABASE_USER_NAME}
      MYSQL_PASSWORD: ${MYSQL_DATABASE_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${MYSQL_DATABASE_ROOT_PASSWORD}
    networks:
      - wordpress
    volumes:
      - ./db:/var/lib/mysql
  phpmyadmin:
    image: lscr.io/linuxserver/phpmyadmin:latest
    container_name: phpmyadmin
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Toronto
      - PMA_ARBITRARY=1 #optional
      - FILE__PASSWORD=/data/config/keys/.pass
      - PMA_ABSOLUTE_URI=https://phpmyadmin.yourdomain.com
    volumes:
      - ./phpmyadmin/data/config:/config
    ports:
      - 80:80
    restart: unless-stopped
volumes:
  wordpress:
  db:
networks:
  wordpress:
```
