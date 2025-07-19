```yaml
version: '3'
services:
  rancher-server:
    image: rancher/rancher
    container_name: rancher-server
    restart: unless-stopped
    privileged: true
    ports:
      - 80:80
      - 443:443
    volumes:
      - /home/user/docker/.rancher/rancher-data:/var/lib/rancher

  db:
    image: mysql:5.7
    container_name: rancher-db
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    volumes:
      - /home/user/docker/.rancher/db-data:/var/lib/mysql

volumes:
  rancher-data:
  db-data:
```

##### encode your passphrase with base64
```bash
echo -n "your_password" | base64
```
MINE
```bash
echo -n "your_password" | base64
```

#### with persistence
```yaml

```