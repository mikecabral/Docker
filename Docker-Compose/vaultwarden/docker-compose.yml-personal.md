```yaml
version: '3'

services:
  vaultwarden:
    restart: always
    container_name: vaultwarden
    image: vaultwarden/server:latest
    volumes:
      - /home/user/docker/.vaultwarden/data:/data/
    ports:
      - 9062:80
#      - 443:443
    environment:
      - SMTP_HOST=${SMTP_HOST}
      - SMTP_FROM=${SMTP_FROM}
      - SMTP_FROM_NAME=VaultWarden
      - SMTP_SECURITY=starttls
      - SMTP_PORT=587
      - SMTP_USERNAME=${SMTP_USERNAME}
      - SMTP_PASSWORD=${SMTP_PASSWORD}
      - SMTP_TIMEOUT=30
      - SMTP_AUTH_MECHANISM="Plain"
      - LOGIN_RATELIMIT_MAX_BURST=10
      - LOGIN_RATELIMIT_SECONDS=60
      - DOMAIN=${DOMAIN}
      - INVITATION_ORG_NAME=${INVITATION_ORG_NAME}
      - INVITATIONS_ALLOWED=true
      - ADMIN_TOKEN=${ADMIN_TOKEN}
      - SIGNUPS_ALLOWED=false
      - SIGNUPS_DOMAINS_WHITELIST=
      - SIGNUPS_VERIFY=true
      - SIGNUPS_VERIFY_RESEND_TIME=3600
      - SIGNUPS_VERIFY_RESEND_LIMIT=6
      - EMERGENCY_ACCESS_ALLOWED=true
      - SENDS_ALLOWED=true
      - WEB_VAULT_ENABLED=true
```
