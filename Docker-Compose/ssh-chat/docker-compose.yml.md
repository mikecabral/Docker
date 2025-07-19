```yaml
version: '3.1'
services:
  ssh-chat:
    image: byreqz/ssh-chat:latest
    restart: always
    ports:
      - "2022:2022"
    volumes:
      - ./ssh-chat-key:/ssh_key
      - ./ssh-chat/admin_keys:/admin_keys
      - ./motd:/motd
    container_name: ssh-chat
```

make an ssh key for ssh-chat
```bash
ssh-keygen -t rsa -b 4096 -N '' -f ./ssh-chat-key
```

login to chat.orangefarm.ca
ssh -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedKeyTypes=+ssh-rsa mynameischris@chat.orangefarm.ca -p 2022
