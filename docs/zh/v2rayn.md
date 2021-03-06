# 配置 v2rayN

## 下载安装v2rayN

1.前往[https://github.com/2dust/v2rayN/releases](https://github.com/2dust/v2rayN/releases)下载最新Release版应用压缩包，注意要下载`v2ranyN-Core.zip`，不要下载`v2rayN.zip`，否则将由于缺少v2ray-core核心组件而无法运行。

2.将下载下来的压缩包解压到任意目录，双击打开目录里的`v2rayN.exe`，开始运行软件。

## 通过配置链接添加节点

**在开始之前，请确保您已经拥有一台v2ray服务器，并生成了对应的配置分享链接。**

首先在您的PC中复制分享链接到剪贴板，然后打开v2rayN应用，在菜单栏中依次点击`服务器-从剪贴板导入批量URL`，导入成功后，您将会在应用的主界面看到您新导入的节点信息；

![导入配置链接](/v2rayn_cn_step_0.PNG)

![导入成功](/v2rayn_cn_step_1.PNG)



## 设置系统代理

1.在v2rayN应用主界面菜单栏中点击`参数设置`，进入参数设置页面；

![进入参数设置页面](/v2rayn_cn_step_2.PNG)

2.在参数设置页面中，您首先进入的是`Core：基础设置`页面，在这里，您将可以设置您的代理模式、本地代理监听端口等功能。请您按照下图所示设置您的v2rayN应用。**您应格外注意`Http代理`设置，如果您未正确设置该项，则有可能导致您的PC应用程序无法使用v2ray代理服务**；

![参数设置页面](/v2rayn_cn_step_3.PNG)

完成设置后，点击`确定`按钮以使配置生效。

至此，您已配置好了v2rayN的代理功能，快在浏览器中访问[Google](https://google.com)试试吧！

## 设置开机自启动

在v2rayN应用主界面菜单栏中点击`参数设置`进入参数设置页面后，进入`v2rayN设置`标签页，勾选上`开机自动启动`复选框，然后点击`确定`按钮以使配置生效。

![设置开机自启动](/v2rayn_cn_step_4.PNG)