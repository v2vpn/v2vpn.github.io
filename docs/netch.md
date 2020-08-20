# Config Netch

[Download](https://github.com/NetchX/Netch/releases)


## Description

Netch is an open source game accelerator. Unlike SSTap, which needs to add rules to function as a blacklist proxy, Netch is more similar to SocksCap64, which can scan the game directory to get their process names specifically and forward their network traffic through the proxy server. Now supports Socks5, Shadowsocks, ShadowsocksR, VMess.

As well, Netch avoid the restricted NAT problem caused by SSTap. You can use an NATTypeTester to test out what your NAT type is. When using SSTap to speed up some P2P gaming connections or the game is required for that kind of open NAT type, you may experience some bad situations such as unable to join the game.

## User Interface

![GUI](/netch_step_2.PNG)

## Add servers

> Netch supports the following protocol：Shadowsocks, V2ray(Vmess), Socks5, ShadowsockR, Trojan.

First，Click `Server` to add server. You can add server yourself, or add server from an URL。

![Server](/netch_step_0.PNG)

## Select proxy mode

Select the proxy mode you need and enable the mode, and the corresponding game can be accelerated.

If there is no desired mode, please select `[3] Bypass LAN and China (TUN/TAP)`. This mode needs [TAP-Windows](https://github.com/OpenVPN/tap-windows) adapter. If Netch warns that there is no adapter，you can install the adapter from [TAP-Windows](https://build.openvpn.net/downloads/releases/latest/tap-windows-latest-stable.exe).

![Proxy mode](/netch_step_1.PNG)

After selecting the mode, click Enable, and the game has been proxied. This step needs to be completed before starting the game.

## Save configuration

Currently Netch supports custom four configurations. Fill in the configuration name, select the corresponding server and game mode, press `Ctrl` and the left mouse button to save the current configuration. Next time you use it, click the configuration name to quickly enable it.