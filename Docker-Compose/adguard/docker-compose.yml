```yaml
version: "2"
services:
   adguardhome:
     image: adguard/adguardhome
     container_name: adguardhome
     environment:
      - PUID=1000 # whatever user
      - PGID=1000 # whatever group
     ports:
       - 53:53/tcp
       - 53:53/udp
       - 784:784/udp
       - 853:853/tcp
       - 3000:3000/tcp #this is the admin page
       - 80:80/tcp
     volumes:
       - /media/docker/adguard/work:/opt/adguardhome/work
       - /media/docker/adguard/conf:/opt/adguardhome/conf
```

