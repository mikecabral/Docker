```yaml
---
version: "2.1"
services:
  openvscode-server:
    image: lscr.io/linuxserver/openvscode-server:latest
    container_name: openvscode-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - CONNECTION_TOKEN= #optional
      - CONNECTION_SECRET= #optional
      - SUDO_PASSWORD=password #optional
      - SUDO_PASSWORD_HASH= #optional #WHATEVER ONE
    volumes:
      - /path/to/appdata/config:/config
    ports:
      - 3000:3000
    restart: unless-stopped
```
