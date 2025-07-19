```yaml
version: '3.7'
services:
  openldap:
    image: osixia/openldap:latest
    container_name: openldap
    hostname: openldap
    ports:
      - "389:389"
      - "636:636"
    volumes:
      - /media/docker/.openldap/data/certificates:/container/service/slapd/assets/certs
      - /media/docker/.openldap/data/slapd/database:/var/lib/ldap
      - /media/docker/.openldap/data/slapd/config:/etc/ldap/slapd.d
    environment:
      - LDAP_ORGANISATION=organization_name
      - LDAP_DOMAIN=domain.com
      - LDAP_ADMIN_USERNAME=admin
      - LDAP_ADMIN_PASSWORD=${LDAP_ADMIN_PASSWORD}
      - LDAP_CONFIG_PASSWORD=${LDAP_CONFIG_PASSWORD}
      - LDAP_BASE_DN=dc=domain,dc=com/ca
      - LDAP_TLS_CRT_FILENAME=domain.com.crt
      - LDAP_TLS_KEY_FILENAME=domain.com.key
      - LDAP_TLS_CA_CRT_FILENAME=orangefarm.ca.ca.crt
      - LDAP_READONLY_USER=true
      - LDAP_READONLY_USER_USERNAME=user-ro
      - LDAP_READONLY_USER_PASSWORD=${LDAP_READONLY_USER_PASSWORD}
    networks:
      - openldap

  phpldapadmin:
    image: osixia/phpldapadmin:latest
    container_name: phpldapadmin
    hostname: phpldapadmin
    ports:
      - "8077:80"
    environment:
      - PHPLDAPADMIN_LDAP_HOSTS=openldap
      - PHPLDAPADMIN_HTTPS=false
    depends_on:
      - openldap
    networks:
      - openldap

networks:
  openldap:
    driver: bridge
```

##### FIREWALL /etc/ufw/applications.d/ufw-ldap
```
[OpenLDAP]
title=OpenLDAP Server
description=LDAP Server
ports=389/tcp|636/tcp
```
