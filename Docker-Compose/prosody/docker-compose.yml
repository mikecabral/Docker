```yaml
version: '3.7'

services:
  server:
    image: sarasmiseth/prosody:latest
    restart: unless-stopped
    ports:
      - "5000:5000"
      - "5222:5222"
      - "5223:5223"
      - "5269:5269"
      - "5281:5281"
    environment:
      DOMAIN: "yourdomain.com"
      ALLOW_REGISTRATION: true
      DOMAIN_HTTP_UPLOAD: "upload.yourdomain.com"
      DOMAIN_MUC: "xmpp.yourdomain.com"
      DOMAIN_PROXY: "proxy.yourdomain.com"
      DOMAIN_PUBSUB: "pubsub.yourdomain.com"
      E2E_POLICY_CHAT: "required"
      E2E_POLICY_MUC: "optional"
      E2E_POLICY_WHITELIST: ""
      DB_DRIVER: SQLite3
      DB_DATABASE: prosody.sqlite
#      LOG_LEVEL: INFO
      C2S_REQUIRE_ENCRYPTION: true
      S2S_REQUIRE_ENCRYPTION: true
      S2S_SECURE_AUTH: true
      SERVER_CONTACT_INFO_ABUSE: "xmpp:mike@yourdomain.com, xmpp:james@yourdomain.com"
      SERVER_CONTACT_INFO_ADMIN: "xmpp:mike@yourdomain.com, xmpp:james@yourdomain.com"
      SERVER_CONTACT_INFO_FEEDBACK: "xmpp:mike@yourdomain.com, xmpp:james@yourdomain.com"
      SERVER_CONTACT_INFO_SALES: "xmpp:mike@yourdomain.com, xmpp:james@yourdomain.com"
      SERVER_CONTACT_INFO_SECURITY: "xmpp:mike@yourdomain.com, xmpp:james@yourdomain.com"
      SERVER_CONTACT_INFO_SUPPORT: "xmpp:mike@yourdomain.com, xmpp:james@yourdomain.com"
      PROSODY_ADMINS: "xmpp:mike@yourdomain.com, xmpp:james@yourdomain.com"

    volumes:
      - /home/user/docker/prosody/certs:/usr/local/etc/prosody/certs
      - /home/user/docker/prosody/data:/usr/local/var/lib/prosody
```
