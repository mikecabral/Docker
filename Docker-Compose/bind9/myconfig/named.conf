```bash
acl internal {
    172.16.16.0/24;
    172.16.0.0/24;
};

options {
    forwarders {
#Windows Server 2019 Active Directory
        172.16.16.x;
#AdGuard/AdBlocking
        172.16.16.x;
#https://dns.quad9.net/dns-query
       9.9.9.9;
#https://dns.cloudflare.com/dns-query
       104.16.132.229;
#https://dns.google/dns-query
       8.8.4.4;
    };
    allow-query { internal; };
};

zone "orangefarm.ca" IN {
    type master;
    file "/etc/bind/yourdomain.ca.zone";
};
zone "orangefarm.local" IN {
    type master;
    file "/etc/bind/yourdomain.local";
};
```
