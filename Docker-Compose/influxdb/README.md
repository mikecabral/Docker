# Installation

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/influxdb#deployment)

## Deployment

Copy the `docker-compose.yml` template into your project folder and start the container.

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/influxdb#configuration)

## Configuration

The initial configuration can be done automatically through docker instructions, or post-installation via the InfluxDB UI or CLI setup.

_For more info visit:_ [Official InfluxDB Installation Documentation](https://docs.influxdata.com/influxdb/v2.1/install/)

# [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/influxdb#best-practices--post-installation)

# Best-Practices & Post-Installation

## [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/influxdb#disable-http)

## Disable HTTP

It's not secure to expose InfluxDB via the HTTP protocol. Follow these steps to enable HTTPS only.

### [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/influxdb#option-1-upload-custom-certificates)

### (Option 1): Upload custom certificates

TODO: #15 Test Docker-Compose for InfluxDB2

-    Run the container with tls parameters `influxd --tls-cert=/etc/ssl/cert.pem --tls-key=/etc/ssl/cert-key.pem`

### [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/influxdb#option-2-use-a-reverse-proxy)

### (Option 2): Use a Reverse Proxy

-    Use a Reverse Proxy to securely expose administrative services.

# [](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/influxdb#additional-referfences)

# Additional Referfences

[Official InfluxDB Documentation](https://docs.influxdata.com/influxdb/v2.1/)
