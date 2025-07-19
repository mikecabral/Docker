```yaml
---
version: '2.1'

services:

  jellyfin:
    image: ghcr.io/linuxserver/jellyfin
    container_name: jellyfin
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Toronto
      - JELLYFIN_PublishedServerUrl=jellyfin.yourdomain.com #optional
    volumes:
      - /media/docker/jellyfin/config:/config
      - /media/Jellyfin2/TVSHOWS:/data/tvshows
      - /media/Jellyfin/4K UltraHD:/data/4k
      - /media/Jellyfin/Bluray:/data/bluray
      - /media/Jellyfin/DVD:/data/dvd
      - /media/Jellyfin2/DVD:/data/dvd
      - /media/Jellyfin2/MOVIES-HONG-KONG:/data/hongkong
      - /media/Jellyfin2/MUSIC:/data/music
      - /media/Jellyfin2/NEWMOVIES:/data/newmovies
    ports:
      - 8096:8096
#      - 8920:8920 #optional
#      - 7359:7359/udp #optional
#      - 1900:1900/udp #optional
    restart: always
```

##### FIREWALL /etc/ufw/applications.d/ufw-jellyfin
```
[Jellyfin]
title=Jellyfin Server
description=Jellyfin Movie Server
ports=8096/tcp
```
