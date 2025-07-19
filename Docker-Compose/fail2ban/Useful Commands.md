##### Unban an ip address
```bash
docker exec -it fail2ban_docker fail2ban-client set npm-docker unbanip 192.168.x.x
```


##### UNBAN ALL IPS from a JAIL
```bash
docker exec -it fail2ban_docker fail2ban-client reload --unban npm-docker
```
