# Installation

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/prometheus#deployment)

## Deployment

1.  Copy the configuration template into the `/etc/prometheus/prometheus.yml` location.
2.  Copy the `docker-compose.yml` template into your project folder and start the container.

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/prometheus#configuration)

## Configuration

Configure your settings in the `/etc/prometheus/prometheus.yml` file.

_For more info visit:_ [Official Prometheus Installation Documentation](https://prometheus.io/docs/prometheus/latest/installation/)

# [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/prometheus#exporters)

# Exporters

TODO: WIP

-   cadvisor
-   nodeexporter
-   nvidiadgcm
-   nvidiasmi

# [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/prometheus#best-practices--post-installation)

# Best-Practices & Post-Installation

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/prometheus#disable-http)

## Disable HTTP

It's not secure to expose Prometheus via the HTTP protocol.

### [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/prometheus#use-a-reverse-proxy)

### Use a Reverse Proxy

-    Use a Reverse Proxy to securely expose administrative services.

# [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/prometheus#additional-referfences)

# Additional Referfences

[Official Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)