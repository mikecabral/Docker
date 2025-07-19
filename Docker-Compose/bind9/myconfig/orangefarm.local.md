```bash
; base zone file for example.com

$TTL 300    ; default TTL for zone

$ORIGIN orangefarm.local. ; base domain-name

; Start of Authority RR defining the key characteristics of the zone (domain)

@         IN      SOA   ns1.yourdomain.local. yourdomain.email.com. (

                                2023031600 ; serial number

                                12h        ; refresh

                                15m        ; update retry

                                3w         ; expiry

                                2h         ; minimum

                                )

; name server RR for the domain

           IN      NS      ns1.yourdomain.local.

; the second name server is external to this zone (domain)

;           IN      NS      ns2.example.net.

; mail server RRs for the zone (domain)

;        3w IN      MX  10  mail.example.com.

; the second  mail servers is  external to the zone (domain)

;           IN      MX  20  mail.example.net.

; domain hosts includes NS and MX records defined above

; plus any others required


ns1        IN      A       172.16.16.102
@        IN      A       172.16.16.88
www        IN      A       172.16.16.88

; networking devices

modem        IN      A       10.0.0.1
router        IN      A       172.16.16.1
switch        IN      A       172.16.16.2
firewall        IN      A       172.16.16.16

; veeam backup server

backup        IN      A       172.16.16.208

; vmware esxi hosts

gibson        IN      A       172.16.16.34
crashoverride        IN      A       172.16.16.253
acidburn        IN      A       172.16.16.80

; windows hosts

ryzen        IN      A       172.16.16.69

; linux hosts

rhel        IN      A       172.16.16.175

; nfs shares

nfs        IN      A       172.16.16.148

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