#### Find the name of the container and give it a backup.tar name also at the end where it lives in the container ie: /var/www/html

##### Make an archive (TAR) of the wordpress docker container
```bash
docker run --rm --volumes-from wordpress-orange -v $(pwd):/backup busybox tar cvfz /backup/wordpress-orange.tar /var/www/html
```

##### Make an archive (TAR) of the database docker container
```bash
docker run --rm --volumes-from wordpress-orange-db-1 -v $(pwd):/backup busybox tar cvfz /backup/wordpress-orange-db-1.tar /var/lib/mysql
```

##### Extract Wordpress into the Current Working Directory
```bash
tar -xvf wordpress-orange.tar --strip-components=3
```
##### Extract Database into Current Working Directory
```bash
tar -xvf wordpress-orange-db-1.tar --strip-components=3
```
