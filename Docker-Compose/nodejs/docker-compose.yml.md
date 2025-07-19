```yaml
version: '3'

services:
  nodejs:
    image: dockette/nodejs:latest
    volumes:
      - .:/app
    working_dir: /app
    command: npm start
    ports:
      - "3000:3000"
    depends_on:
      - mongodb

  mongodb:
    image: mongo
    volumes:
      - ./mongodb_data:/data/db
    environment:
      - MONGO_INITDB_DATABASE=$MONGO_INITDB_DATABASE
      - MONGO_INITDB_ROOT_USERNAME=$ME_CONFIG_BASICAUTH_USERNAME
      - MONGO_INITDB_ROOT_PASSWORD=$ME_CONFIG_BASICAUTH_PASSWORD
    ports:
      - "27017:27017"

```
