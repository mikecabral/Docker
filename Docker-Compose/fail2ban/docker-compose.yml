```yaml
version: "3.7"
services:
  fail2ban:
    image: crazymax/fail2ban:latest
    container_name: fail2ban_docker
    network_mode: "host"
    cap_add:
      - NET_ADMIN
      - NET_RAW
    volumes:
      - "/home/user/fail2ban/data:/data"
      - "/var/log/auth.log:/var/log/auth.log:ro"
      - "/home/user/docker/nginx/nginxproxymanager-data/logs/:/log/npm/:ro"
    restart: always
    environment:
          - TZ=America/Toronto
          - F2B_LOG_TARGET=STDOUT
          - F2B_LOG_LEVEL=INFO
          - F2B_DB_PURGE_AGE=1d
          - SSMTP_HOST=youremail.com
          - SSMTP_PORT=587
          - SSMTP_HOSTNAME=npm.gibson.domain
          - SSMTP_USER=youremail.com
          - SSMTP_PASSWORD=${SMTP_PASSWORD}
          - SSMTP_TLS=YES
```
