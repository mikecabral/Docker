```yaml
debug: false
uuid: 716deb8f-7047-42ad-9323-4a25ae49118b
token_id: 7PoSfql3hdKjbMKn
token: apEo1esCKe5sEWkpfnRB5xakj3mc0aM6jglacgBcsIsgglBtOm0oV1W3efTbwarN
api:
  host: 0.0.0.0
  port: 443
  ssl:
    enabled: false
    cert: /etc/letsencrypt/live/node-01.example.com/fullchain.pem
    key: /etc/letsencrypt/live/node-01.example.com/privkey.pem
  upload_limit: 100
system:
  data: /var/lib/pterodactyl/volumes
  sftp:
    bind_port: 2022
allowed_mounts: []
remote: 'https://pterodactyl.example.com'
```

```bash
docker-compose up -d --force-recreate
```

## Troubleshooting[](https://docs.technotim.live/posts/pterodactyl-game-server/#troubleshooting)

### Missing Metrics[](https://docs.technotim.live/posts/pterodactyl-game-server/#missing-metrics)

If you aren’t seeing your stats in the console

```bash
sudo nano /etc/default/grub|
```


add additional parameters to `GRUB_CMDLINE_LINUX_DEFAULT`

```bash
GRUB_CMDLINE_LINUX_DEFAULT="swapaccount=1 systemd.unified_cgroup_hierarchy=1"
```

```bash
sudo update-grub
sudo reboot
```


