https://docs.mailcow.email/getstarted/install/#install-mailcow

## Install mailcow[¶](https://docs.mailcow.email/getstarted/install/#install-mailcow "Permanent link")

Clone the master branch of the repository, make sure your umask equals 0022. Please clone the repository as root user and also control the stack as root. We will modify attributes - if necessary - while bootstrapping the containers automatically and make sure everything is secured. The update.sh script must therefore also be run as root. It might be necessary to change ownership and other attributes of files you will otherwise not have access to. **We drop permissions for every exposed application** and will not run an exposed service as root! Controlling the Docker daemon as non-root user does not give you additional security. The unprivileged user will spawn the containers as root likewise. The behaviour of the stack is identical.

```bash
su
umask
0022 # <- Verify it is 0022
cd /opt
git clone https://github.com/mailcow/mailcow-dockerized
cd mailcow-dockerized
```
## Initialize mailcow[¶](https://docs.mailcow.email/getstarted/install/#initialize-mailcow "Permanent link")

Generate a configuration file. Use a FQDN (`host.domain.tld`) as hostname when asked.
```bash
./generate_config.sh
```

Change configuration if you want or need to.
```bash
nano mailcow.conf
```

If you plan to use a reverse proxy, you can, for example, bind HTTPS to 127.0.0.1 on port 8443 and HTTP to 127.0.0.1 on port 8080.

You may need to stop an existing pre-installed MTA which blocks port 25/tcp. See [this chapter](https://docs.mailcow.email/post_installation/firststeps-local_mta/) to learn how to reconfigure Postfix to run besides mailcow after a successful installation.

Some updates modify mailcow.conf and add new parameters. It is hard to keep track of them in the documentation. Please check their description and, if unsure, ask at the known channels for advise.

Run the docker compose
```bash
docker compose pull
```

```
docker compose up -d
```

Done!

You can now access **https://${MAILCOW_HOSTNAME}** with the default credentials `admin` + password `moohoo`.


If you are not using mailcow behind a reverse proxy, you should [redirect all HTTP requests to HTTPS](https://docs.mailcow.email/manual-guides/u_e-80_to_443/).

The database will be initialized right after a connection to MySQL can be established.

Your data will persist in multiple Docker volumes, that are not deleted when you recreate or delete containers. Run `docker volume ls` to see a list of all volumes. You can safely run `docker compose down` without removing persistent data.

https://www.youtube.com/watch?v=4rzc0hWRSPg

https://www.youtube.com/watch?v=o66UFsodUYo

https://docs.mailcow.email/getstarted/prerequisite-system/#firewall-ports

https://github.com/mailcow/mailcow-dockerized/issues/77
```
mail IN A 1.2.3.4  
dav IN A 1.2.3.4  
autodiscover IN A 1.2.3.4  
autoconfig IN A 1.2.3.4

@ IN MX 10 mail

_imap._tcp IN SRV 0 1 143 mail.example.org.  
_imaps._tcp IN SRV 0 1 993 mail.example.org.  
_pop3._tcp IN SRV 0 1 110 mail.example.org.  
_pop3s._tcp IN SRV 0 1 995 mail.example.org.  
_submission._tcp IN SRV 0 1 587 mail.example.org.  
_caldavs._tcp IN SRV 0 1 443 dav.example.org.  
_carddavs._tcp IN SRV 0 1 443 dav.example.org.  
_autodiscover._tcp IN SRV 0 1 443 autodiscover.example.org.
```