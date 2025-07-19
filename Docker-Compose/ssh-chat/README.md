[byreqz/ssh-chat - Docker Image](https://hub.docker.com/r/byreqz/ssh-chat)
[Environment Variables · shazow/ssh-chat Wiki · GitHub](https://github.com/shazow/ssh-chat/wiki/Environment-Variables)



Generate keys outside of Docker to keep persistence, and not get warnings:
```bash
ssh-keygen -t rsa -b 4096 -N '' -f /home/mike/docker/ssh-chat/ssh-chat-key
```

Make admin keys dir
```
mkdir admin_keys
```


## `SSHCHAT_THEME`

The simplest variable is the `SSHCHAT_THEME` variable which allows you to define what theme you would like for your session. This can be defined to match any theme defined within `ssh-chat`, so for example to connect using the `solarized` theme, which is normally activated by running `/theme solarized`, you can instead do the following:
```bash
ssh -o SetEnv "SSHCHAT_THEME=solarized" username@ssh.chat
```

## [](https://github.com/shazow/ssh-chat/wiki/Environment-Variables#sshchat_timestamp)`SSHCHAT_TIMESTAMP`

`ssh-chat` supports the ability to log messages with a datetime stamp next to each received message. This behavior is enabled by running a `/timestamp` command within the chat. It can be turned on before connecting by doing the following:
```bash
ssh -o SetEnv "SSHCHAT_TIMESTAMP=1" username@ssh.chat
```
It also supports the ability to pre-load a datetime format as well.

## `TERM`

The `TERM` variable is meant to enable specific modes of `ssh-chat` which changes how messages are displayed when received. Currently, only a `bot` mode is supported [right now](https://github.com/shazow/ssh-chat/pull/341), which makes it easier for programs to be created to read messages from `ssh-chat` without having to interpret ANSI codes.

To turn on a specific mode, you can run the following:
```bash
TERM=bot ssh.chat
# Or if you're not requesting a pty,
ssh -o SetEnv "TERM=bot" ssh.chat
```

When people are using a different Host Algo by default
```bash
ssh -o HostkeyAlgorithms=+ssh-rsa yourusername@sshchat.yourdomain.com -p 2022

```
