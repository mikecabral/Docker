```bash
# Example eggdrop.conf
# Basic settings
set botnick "ReadyBot"
set botnet "irc.libera.chat"
set owner "Readycade"
set password "Blink182."

# Server settings
set server "irc.libera.chat"
set port 6697
set ssl 1

# Channels to join
set chanlist "#readycade"

# Path to data directory
set userfile "/home/eggdrop/eggdrop/data/userfile"
set logfile "/home/eggdrop/eggdrop/data/eggdrop.log"

# Modules to load (if any)
loadmodule "channels"

# Startup commands (if any)
# This can include any tcl commands you want the bot to execute on startup
# For example, to set the bot's mode on join
bind pub -|- *join* {mode #readycade +o $nick} "channel"

# Auto PrvMsg on Join
#bind pub -|- *join* {
#    putquick "PRIVMSG $nick :Welcome to #readycade, $nick!"
#} "channel"

# Auto-op specific users
bind pub -|- *join* {
    if {[lsearch -exact {Readycade} $nick] != -1} {
        mode #readycade +o $nick
    }
} "channel"

# Auto-voice every user that joins
bind pub -|- *join* {
    mode #readycade +v $nick
} "channel"
```
