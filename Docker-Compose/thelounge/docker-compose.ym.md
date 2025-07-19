```yaml
---
services:
  thelounge:
    image: lscr.io/linuxserver/thelounge:latest
    container_name: thelounge
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - ./config:/config
    ports:
      - 9000:9000
    restart: always
```


`docker exec -it thelounge s6-setuidgid abc thelounge add <user>`

