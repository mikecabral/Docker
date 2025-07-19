```yaml
version: '3.1'
#
services:

  db:
    image: fametec/bacula-catalog:11.0.5
    restart: unless-stopped
    environment:
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_DB: ${POSTGRES_DB}
    volumes:
       - /portainer/Files/AppData/Config/Bacula/pgdata:/var/lib/postgresql/data:rw
    ports:
      - 5432:5432
#
  bacula-dir:
    image: fametec/bacula-director:11.0.5
    restart: unless-stopped
    volumes:
      - /portainer/Files/AppData/Config/Bacula/etc:/opt/bacula/etc:ro
    depends_on: 
      - db      
    ports:
      - 9101:9101
#
  bacula-sd:
    image: fametec/bacula-storage:11.0.5
    restart: unless-stopped
    depends_on:
      - bacula-dir
      - db
    volumes:
      - /portainer/Files/AppData/Config/Bacula/etc:/opt/bacula/etc:ro
    ports:
      - 9103:9103
#
  bacula-fd:
    image: fametec/bacula-client:11.0.5
    restart: unless-stopped
    depends_on:
      - bacula-sd
      - bacula-dir
      - db
    volumes:
      - /portainer/Files/AppData/Config/Bacula/etc:/opt/bacula/etc:ro
    ports:
      - 9102:9102
#
  baculum-api:
    image: fametec/baculum-api:11.0.5
    restart: unless-stopped
    depends_on: 
      - db
      - bacula-dir
    volumes:
      - "/portainer/Files/AppData/Config/Bacula/etc/bconsole.conf:/opt/bacula/etc/bconsole.conf:ro"
      - /portainer/Files/AppData/Config/Bacula/etc/baculum:/etc/baculum:rw
    ports:
      - 9096:9096

#
  baculum-web:
    image: fametec/baculum-web:11.0.5
    restart: unless-stopped
    depends_on: 
      - baculum-api
    volumes:
      - "/portainer/Files/AppData/Config/Bacula/etc/bconsole.conf:/opt/bacula/etc/bconsole.conf:ro"
      - /portainer/Files/AppData/Config/Bacula/etc/baculum:/etc/baculum:rw
    ports:
      - 9095:9095

# 
#volumes: 
#  pgdata:
#
#  gmail:
#    image: fametec/postfix:gmail
#    restart: unless-stopped
#    depends_on:
#      - bacula-dir
#    # ports:
#    #  - 30025:25
#    environment:
#      GMAIL_USER: xxxxxxxx
#      GMAIL_PASS: xxxxxxxx
#
#  smtp2tg:
#    image: b3vis/docker-smtp2tg
#    restart: unless-stopped
#    volumes:
#      - ./etc/smtp2tg.toml:/config/smtp2tg.toml:ro
#    #    ports:
#    #  - "31025:25"
#    depends_on:
#      - bacula-dir
#
# 
#volumes: 
#  pgdata:
```
