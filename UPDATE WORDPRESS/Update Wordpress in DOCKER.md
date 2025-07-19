https://gist.github.com/dianjuar/1b2c43d38d76e68cf21971fc86eaac8e

##### ADD this the end of wp.config.php

```bash
define('FS_METHOD', 'direct');
```

##### LOGIN to docker container via terminal
```bash
docker exec -u root -it {CONTAINER_ID} /bin/bash
```
OR
USE PORTAINER AND JUST LOGIN TO THE CONTAINER AS ROOT

##### Change the permissions for a few different folders

```bash
chown -R www-data wp-content
```

```bash
chmod -R 755 wp-content
```

```bash
chown -R www-data wp-includes
```

```bash
chmod -R 755 wp-includes
```

```bash
chown -R www-data wp-admin
```

```bash
chmod -R 755 wp-admin
```
