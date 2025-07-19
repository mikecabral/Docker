```yaml
---
version: "2.1"
services:
  transmission:
    image: lscr.io/linuxserver/transmission:latest
    container_name: transmission
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Toronto
      - TRANSMISSION_WEB_HOME= transmission.yourdomain #optional
      - USER= ${USER} #optional
      - PASS= ${PASSWORD} #optional
      - WHITELIST= 172.16.16.0 #optional
      - PEERPORT= #optional
      - HOST_WHITELIST= #optional
    volumes:
      - /path/to/data:/config
      - /path/to/downloads:/downloads
      - /path/to/watch/folder:/watch
    ports:
      - 9090:9091
      - 51413:51413
      - 51413:51413/udp
    restart: unless-stopped
```
