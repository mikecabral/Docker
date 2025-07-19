```yaml
---
version: "2.1"
services:
  emulatorjs:
    image: lscr.io/linuxserver/emulatorjs:latest
    container_name: emulatorjs
    environment:
      - PUID=3001 # your user
      - PGID=3000 # your group
      - TZ=America/Toronto
      - SUBFOLDER=/ #optional
    volumes:
      - /home/user/docker/emulatorjs/config:/config
      - /media/ROMS/Organized/emulatorjs/data:/data
      - /media/ROMS/Organized/3do:/data/3do/roms:ro
      - /media/ROMS/Organized/mame:/data/arcade/roms:ro
      - /media/ROMS/Organized/atari2600:/data/atari2600/roms:ro
      - /media/ROMS/Organized/atari5200:/data/atari5200/roms:ro
      - /media/ROMS/Organized/atari7800:/data/atari7800/roms:ro
      - /media/ROMS/Organized/c64:/data/c64/roms:ro
      - /media/ROMS/Organized/colecovision:/data/colecovision/roms:ro
      - /media/ROMS/DOOM_WADS:/data/doom/roms:ro
      - /media/ROMS/Organized/gb:/data/gb/roms:ro
      - /media/ROMS/Organized/gba:/data/gba/roms:ro
      - /media/ROMS/Organized/gbc:/data/gbc/roms:ro
      - /media/ROMS/Organized/jaguar:/data/jaguar/roms:ro
      - /media/ROMS/Organized/lynx:/data/lynx/roms:ro
      - /media/ROMS/Organized/msx1:/data/msx/roms:ro
      - /media/ROMS/Organized/n64:/data/n64/roms:ro
      - /media/ROMS/Organized/nds:/data/nds/roms:ro
      - /media/ROMS/Organized/nes:/data/nes/roms:ro
      - /media/ROMS/Organized/ngpc:/data/ngp/roms:ro
      - /media/ROMS/Organized/o2em:/data/odyssey2/roms:ro
      - /media/ROMS/Organized/pcengine:/data/pce/roms:ro
      - /media/ROMS/Organized/psx:/data/psx/roms:ro
      - /media/ROMS/Organized/sega32x:/data/sega32x/roms:ro
      - /media/ROMS/Organized/segacd:/data/segaCD/roms:ro
      - /media/ROMS/Organized/gamegear:/data/segaGG/roms:ro
      - /media/ROMS/Organized/megadrive:/data/segaMD/roms:ro
      - /media/ROMS/Organized/mastersystem:/data/segaMS/roms:ro
      - /media/ROMS/Organized/saturn:/data/segaSaturn/roms:ro
      - /media/ROMS/Organized/sg1000:/data/segaSG/roms:ro
      - /media/ROMS/Organized/snes:/data/snes/roms:ro
      - /media/ROMS/Organized/virtualboy:/data/vb/roms:ro
      - /media/ROMS/Organized/vectrex:/data/vectrex/roms:ro
      - /media/ROMS/Organized/wswanc:/data/ws/roms:ro
    ports:
      - 3000:3000
      - 80:80
#      - 4001:4001 #optional
    restart: unless-stopped
```


to copy from NETWORK to LOCAL
```bash
cp /media/ROMS/Organized/colecvision/* /home/mike/docker/emulatorjs/data/colecovision/roms/
```

to symbolically LINK from NETWORK to LOCAL (DOESN'T WORK)
```bash
ln -s /media/ROMS/Organized/gba/* /home/mike/docker/emulatorjs/data/gba/roms/
```
