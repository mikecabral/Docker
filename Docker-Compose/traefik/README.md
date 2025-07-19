# Installation

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/traefik#data-persistence)

## Data Persistence

... Storing Data in the `/etc/traefik` directory on the host, passing through...

    volumes:
      - /etc/traefik:/etc/traefik

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/traefik#self-signed-certificates)

## Self-Signed Certificates

According to traefik's documentation it will automatically generate self-signed Certificates if no Default Certificate is provided. If you'd like to overwrite the self-signed Certificate with your own, uncomment the section for

# (Optional) Overwrite Default Certificates
tls:
  stores:
    default:
      defaultCertificate:
        certFile: /etc/traefik/certs/cert.pem
        keyFile: /etc/traefik/certs/cert-key.pem

Replace the `/etc/traefik/certs/cert.pem` with your certificate file, and the `/etc/traefik/certs/cert-key.pem` with your certificate key.

# [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/traefik#best-practices--post-installation)

# Best-Practices & Post-Installation

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/traefik#mintls-version)

## MinTLS Version

TLS 1.0 and 1.1 are not longer secure! Consider disabling it in the Traefik Configuration.

providers:
  docker:
    exposedByDefault: false  # Default is true
  file:
    # watch for dynamic configuration changes
    directory: /etc/traefik
    watch: true