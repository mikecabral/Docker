```yaml
version: '3.1'

services:

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```

##### FIREWALL /etc/ufw/applications.d/ufw-adminer
If we need a clean way to add it to ufw

```
[Adminer]
title=Adminer
description=Adminer
ports=8055/tcp
```
