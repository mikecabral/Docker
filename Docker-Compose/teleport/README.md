#### Create users once Teleport is running
##### run this from your shell to the docker container shell

```bash
docker exec -it teleport tctl users add mike --roles=editor --logins=root,mike,eugene,zerocool,kate,emmanuel,joey,rhel,kubert
```

# Teleport Boilerplates

//TODO Add Description

Tested with teleport 10

## [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/teleport/README..md#deployment)

## Deployment

Copy the `docker-compose.yml`, and `config/teleport.yml` files into your project folder and start the container.

## [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/teleport/README..md#configuration)

## Configuration

### [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/teleport/README..md#create-a-new-user)

### Create a new user

## [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/teleport/README..md#best-practices--post-installation)

## Best-Practices & Post-Installation

### [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/teleport/README..md#enable-passwordless)

### Enable passwordless

To enable passwordless feature remove the **(Optional) Passwordless Authentication** statements from the `config/teleport.yml` file and re-start the container.

### [](https://github.com/ChristianLempa/boilerplates/blob/main/docker-compose/teleport/README..md#get-a-trusted-ssl-cert-from-letsencrypt)

### Get a trusted SSL cert from Letsencrypt

To get a trusted SSL cert from Letsnecrypt remove the **(Optional) ACME** statements from the `config/teleport.yml` file and re-start the container.

_Note, you need a public DNS Record that points to your-server-url._