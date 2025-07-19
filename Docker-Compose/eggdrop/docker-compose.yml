```yaml
version: '3.1'

services:
  eggdrop:
    image: eggdrop
    environment:
      - SERVER=irc.libera.chat:6697
      - NICK=FooBot
      - CHANNELS=#rfoochannel
    ports:
      - "3333:3333"
    volumes:
      - /home/user/docker/eggdrop-bot/data:/home/eggdrop/eggdrop/data
      - /home/user/docker/eggdrop-bot/scripts:/home/eggdrop/eggdrop/scripts2
### Enter config name, if not eggdrop.conf
#    command: LeafBlower.conf    
    stdin_open: true
    tty: true
    restart: always
```
