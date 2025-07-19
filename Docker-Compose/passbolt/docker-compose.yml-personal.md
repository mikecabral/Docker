```yaml
version: '3.9'

volumes:
  passbolt-db:
  passbolt-data-gpg:
  passbolt-data-jwt:

services:
  passbolt-db:
    container_name: passbolt-db
    image: mariadb:10.3
    restart: unless-stopped
    environment:
      - MYSQL_RANDOM_ROOT_PASSWORD=true
      - MYSQL_DATABASE=$PASSBOLT_DB_NAME
      - MYSQL_USER=$PASSBOLT_DB_USER
      - MYSQL_PASSWORD=$PASSBOLT_DB_PASS
    volumes:
      - passbolt-db:/var/lib/mysql

  passbolt:
    container_name: passbolt-app
    image: passbolt/passbolt:latest-ce
    restart: unless-stopped
    depends_on:
      - passbolt-db
    environment:
      - APP_FULL_BASE_URL=https://pass.yourdomain.com
      - DATASOURCES_DEFAULT_HOST=passbolt-db
      - DATASOURCES_DEFAULT_USERNAME=$PASSBOLT_DB_USER
      - DATASOURCES_DEFAULT_PASSWORD=$PASSBOLT_DB_PASS
      - DATASOURCES_DEFAULT_DATABASE=$PASSBOLT_DB_NAME
      - EMAIL_TRANSPORT_DEFAULT_HOST=email.com host smtp
      - EMAIL_TRANSPORT_DEFAULT_PORT=587
      - EMAIL_TRANSPORT_DEFAULT_USERNAME=$EMAIL_TRANSPORT_DEFAULT_USERNAME
      - EMAIL_TRANSPORT_DEFAULT_PASSWORD=$EMAIL_TRANSPORT_DEFAULT_PASSWORD
      - EMAIL_TRANSPORT_DEFAULT_TLS=true
      - EMAIL_DEFAULT_FROM=YOUREMAIL.com
    volumes:
      - /home/user/docker/passbolt/passbolt-data-gpg:/etc/passbolt/gpg
      - /home/user/docker/passbolt/passbolt-data-jwt:/etc/passbolt/jwt
    command: ["/usr/bin/wait-for.sh", "-t", "0", "passbolt-db:3306", "--", "/docker-entrypoint.sh"]
```

