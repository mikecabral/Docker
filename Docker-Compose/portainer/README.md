# Installation

## [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/portainer/README.md#deployment)

## Deployment

1.  Copy the `docker-compose.yml` template into your project folder and start the container.

### [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/portainer/README.md#manage-local-environment)

### Manage local environment

Allows Portainer to manage the local Docker Environment

    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

### [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/portainer/README.md#data-persistence)

### Data Persistence

Storing Data in a `portainer-data` volume on docker

    volumes:
      - portainer-data:/data

## [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/portainer/README.md#configuration)

## Configuration

# [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/portainer/README.md#best-practices--post-installation)

# Best-Practices & Post-Installation

## [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/portainer/README.md#disable-http)

## Disable HTTP

It's not secure to expose Portainer via the HTTP protocol. Follow these steps to enable HTTPS only.

### [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/portainer/README.md#option-1-upload-custom-certificates)

### (Option 1): Upload custom certificates

-    Upload your custom certificates
-    Force HTTPS only
-    Expose Port `9443` [![Force HTTPS Only and Certificates](https://camo.githubusercontent.com/9a57ac62e3c1d7be1b5c691b78029d359e04587b2a6196eb137c0d4329958dc1/68747470733a2f2f696d61676564656c69766572792e6e65742f79473037436d516c61706a5a39357a657a30484a4d412f35636638666134362d643534382d346630622d353730652d3063616638656536643730302f6d656469756d)](https://camo.githubusercontent.com/9a57ac62e3c1d7be1b5c691b78029d359e04587b2a6196eb137c0d4329958dc1/68747470733a2f2f696d61676564656c69766572792e6e65742f79473037436d516c61706a5a39357a657a30484a4d412f35636638666134362d643534382d346630622d353730652d3063616638656536643730302f6d656469756d)

### [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/portainer/README.md#option-2-use-a-reverse-proxy)

### (Option 2): Use a Reverse Proxy

-    Use a Reverse Proxy to securely expose administrative services.

# [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/portainer/README.md#additional-referfences)

# Additional Referfences

[Official Portainer Documentation](https://docs.portainer.io/)