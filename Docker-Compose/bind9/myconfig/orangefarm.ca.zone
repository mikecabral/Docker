```bash
; base zone file for example.com

$TTL 300    ; default TTL for zone

$ORIGIN yourdomain.ca. ; base domain-name

; Start of Authority RR defining the key characteristics of the zone (domain)

@         IN      SOA   ns1.yourdomain.ca. yourdomain.email.com. (

                                2023031600 ; serial number

                                12h        ; refresh

                                15m        ; update retry

                                3w         ; expiry

                                2h         ; minimum

                                )

; name server RR for the domain

           IN      NS      ns1.yourdomain.ca.

; the second name server is external to this zone (domain)

;           IN      NS      ns2.example.net.

; mail server RRs for the zone (domain)

;        3w IN      MX  10  mail.example.com.

; the second  mail servers is  external to the zone (domain)

;           IN      MX  20  mail.example.net.

; domain hosts includes NS and MX records defined above

; plus any others required


ns1        IN      A       172.16.16.102
@        IN      A       172.16.16.24
www        IN      A       172.16.16.24

; i5-Red Gibson

ansible        IN      A       172.16.16.72
auth        IN      A       172.16.16.72
gibson        IN      A       172.16.16.72
vault           IN      A       172.16.16.72

; i7-Green ZeroCool

adguard        IN      A       172.16.16.247
adminer        IN      A       172.16.16.247
dashboard        IN      A       172.16.16.247
guacamole        IN      A       172.16.16.247
homer        IN      A       172.16.16.247
influxdb        IN      A       172.16.16.247
jelly        IN      A       172.16.16.247
jenkins        IN      A       172.16.16.247
ldap        IN      A       172.16.16.247
music        IN      A       172.16.16.247
phpmyadmin        IN      A       172.16.16.247
vs        IN      A       172.16.16.247

; i7-Blue AcidBurn

nextcloud        IN      A       172.16.16.24
office        IN      A       172.16.16.24

; Rhel Chia Farm

hdd        IN      A       172.16.16.102
paperless        IN      A       172.16.16.102


;mail       IN      A       192.168.254.4

;joe        IN      A       192.168.254.6

;www        IN      A       192.168.254.7

; aliases ftp (ftp server) to an external domain

; auth        IN      CNAME   auth.yourdomain.ca
; ftp        IN      CNAME   ftp.example.net.
; ftp        IN      CNAME   ftp.example.net.
; ftp        IN      CNAME   ftp.example.net.
; ftp        IN      CNAME   ftp.example.net.
```