# Installation

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/nginxproxymanager#deployment)

## Deployment

Copy the `docker-compose.yml` template into your project folder and start the container.

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/nginxproxymanager#configuration)

## Configuration

Visit the Nginxproxymanager Web Interface `http://localhost:81`, and login with Nginxproxymanager's default username `admin@example.com` and password: `changeme`.

_For more info visit:_ [Official Nginxproxymanager Installation Documentation](https://nginxproxymanager.com/guide/)

# [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/nginxproxymanager#best-practices--post-installation)

# Best-Practices & Post-Installation

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/nginxproxymanager#disable-http)

## Disable HTTP

It's not secure to expose Nginxproxymanager via the HTTP protocol. Follow these steps to enable HTTPS only.

### [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/nginxproxymanager#dont-expose-nginxproxymanagers-ui-on-port-81)

### Don't expose Nginxproxymanager's UI on port 81

-    Add a Proxy Host for Nginxproxymanager's WebUI to target `127.0.0.1:81`
-    Remove port `:81` from the `docker-compose` file

# [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/nginxproxymanager#additional-referfences)

# Additional Referfences

[Official Nginxproxymanager Installation Documentation](https://nginxproxymanager.com/guide/)