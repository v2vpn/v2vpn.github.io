# 配置 Netch

[下载地址](https://github.com/NetchX/Netch/releases)

## 简介

Netch 是一款 Windows 平台的开源游戏加速工具，Netch 可以实现类似 SocksCap64 那样的进程代理，也可以实现 SSTap 那样的全局 TUN/TAP 代理，和 Shadowsocks-Windows 那样的本地 Socks5，HTTP 和系统代理。至于连接至远程服务器的代理协议，目前 Netch 支持以下代理协议：Shadowsocks，VMess，Socks5，ShadowsocksR

与此同时 Netch 避免了 SSTap 的 NAT 问题 ，检查 NAT 类型即可知道是否有 NAT 问题。使用 SSTap 加速部分 P2P 联机，对 NAT 类型有要求的游戏时，可能会因为 NAT 类型严格遇到无法加入联机，或者其他影响游戏体验的情况。


## 主界面

![主界面](/netch_cn_step_2.PNG)

## 添加服务器

> Netch 目前仅支持以下代理协议：Shadowsocks，V2ray(Vmess)，Socks5，ShadowsockR，Trojan。

首先，点击`服务器`增加所需服务器.您可手动添加单个服务器，或者通过剪贴板链接添加单个服务器。也可通过订阅链接批量添加。

![服务器](/netch_cn_step_0.PNG)

## 选择模式

> 此处需要会一点英语，比如你应该知道 `吃鸡` 的英文名称是 `PlayerUnknown's Battlegrounds`

选择您所需的代理模式后单击选择，启用模式，相对应的游戏即可被加速。

若没有所需的模式，请选择 `[3] Bypass LAN and China (TUN/TAP)` 的模式。此模式需要安装 [TAP-Windows](https://github.com/OpenVPN/tap-windows) 适配器，如果 Netch 提示没有该适配器，可以直接安装 [TAP-Windows](https://build.openvpn.net/downloads/releases/latest/tap-windows-latest-stable.exe) 来获得该适配器。

![代理模式](/netch_cn_step_1.PNG)

关于更多的模式说明，详见 [进阶用法](https://github.com/NormanBB/NetchMode/blob/master/docs/README.zh-CN.md)。

选择完模式后，点击启用，游戏已被代理。这一步需在开启游戏前完成。

## 配置说明

目前，Netch 支持自定义四个配置，填入配置名，选择相应的服务器和游戏模式，按下 `Ctrl` 与鼠标左键，即可保存当前配置。下次使用时，点击配置名即可快速启用。


