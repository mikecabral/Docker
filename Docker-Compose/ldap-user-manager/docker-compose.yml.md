```yaml
version: '3'
services:
  openldap:
    image: osixia/openldap:latest
    container_name: openldap
    restart: unless-stopped
    environment:
      - LDAP_ORGANISATION=organization_name
      - LDAP_DOMAIN=yourdomain.com
      - LDAP_ADMIN_PASSWORD=YOUR_PASSWORD
      - LDAP_RFC2307BIS_SCHEMA=true
      - LDAP_REMOVE_CONFIG_AFTER_SETUP=true
      - LDAP_TLS_VERIFY_CLIENT=never
    ports:
      - 389:389
    volumes:
      - /opt/docker/openldap/var_lib_ldap:/var/lib/ldap
      - /opt/docker/openldap/etc_ldap_slapd.d:/etc/ldap/slapd.d

  lum:
    image: wheelybird/ldap-user-manager:latest
    container_name: lum
    ports:
      - 80:80
    environment:
      - SERVER_HOSTNAME=192.168.x.x
      - LDAP_URI=ldap://openldap
      - LDAP_BASE_DN=dc=domain,dc=com/ca
      - LDAP_ADMINS_GROUP=admins
      - LDAP_ADMIN_BIND_DN=cn=admin,dc=domain,dc=com/ca
      - LDAP_ADMIN_BIND_PWD=ADMIN_PASSWORD
      - LDAP_IGNORE_CERT_ERRORS=true
    restart: always
    depends_on:
      - openldap

```
