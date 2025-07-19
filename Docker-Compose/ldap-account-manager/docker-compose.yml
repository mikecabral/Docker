```yaml
version: '3'
services:
  openldap:
    image: osixia/openldap:latest
    container_name: openldap
    restart: unless-stopped
    environment:
      - LDAP_ORGANISATION=oraganization_name
      - LDAP_DOMAIN=yourdomain.com
      - LDAP_ADMIN_PASSWORD=admin
      - LDAP_RFC2307BIS_SCHEMA=true
      - LDAP_REMOVE_CONFIG_AFTER_SETUP=true
      - LDAP_TLS_VERIFY_CLIENT=never
    ports:
      - 389:389
      - 636:636
    volumes:
      - /opt/docker/openldap/var_lib_ldap:/var/lib/ldap
      - /opt/docker/openldap/etc_ldap_slapd.d:/etc/ldap/slapd.d

  lam:
    image: ghcr.io/ldapaccountmanager/lam:stable
    container_name: lam
    ports:
      - 18080:80
    environment:
      - SERVER_HOSTNAME=192.168.x.x
      - LDAP_URI=ldap://openldap
      - LDAP_BASE_DN=dc=domain,dc=com/ca
      - LDAP_ADMINS_GROUP=admins
      - LDAP_ADMIN_BIND_DN=cn=admin,dc=domain,dc=com/ca
      - LDAP_ADMIN_BIND_PWD=admin
      - LDAP_IGNORE_CERT_ERRORS=true
    restart: always
    depends_on:
      - openldap

```

LAM/LAM

THIS ONE FUCKING WORKS!!! FINALLY!
https://www.youtube.com/watch?v=zpTYqH7GYpo
https://www.youtube.com/@HappyGhost/search?query=ldap
