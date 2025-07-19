```yaml
version: '3'

services:
  openfire:
    image: nasqueron/openfire:4.7.5
    container_name: openfire
    restart: always
    ports:
      - 9090:9090
      - 5222:5222
      - 7777:7777
    volumes:
      - /home/user/docker/openfire:/var/lib/openfire
```

##### FIREWALL /etc/ufw/applications.d/ufw-openfire
```bash
[Openfire]
title=Openfire Server
description=Simple XMPP Server
ports=5222/tcp|5223/tcp|7443/tcp|7070/tcp|7777/tcp|7000/tcp|5275/tcp|5276/tcp|5269/tcp|5270/tcp|3478|10000:20000/udp|26001:27000/udp
```

sudo ufw allow Openfire