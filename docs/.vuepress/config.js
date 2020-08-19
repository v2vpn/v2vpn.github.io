module.exports = {
    themeConfig: {
        sidebar: 'auto',
        smoothScroll: true,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                // nav: [
                //     { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
                // ],
                sidebar: {
                    '/': [
                        {
                            title: 'v2rayN',
                            collapsable: false,
                            children: [
                                'v2rayn',
                            ],
                        },
                        {
                            title: 'v2rayNG',
                            collapsable: false,
                            children: [
                                'v2rayng',
                            ],
                        },
                        {
                            title: 'Qv2ray',
                            collapsable: false,
                            children: [
                                'qv2ray',
                            ],
                        },
                        {
                            title: 'Kitsunebi',
                            collapsable: false,
                            children: [
                                'kitsunebi',
                            ],
                        },
                        {
                            title: 'Netch',
                            collapsable: false,
                            children: [
                                'netch',
                            ],
                        },
                    ],
                },
            },
            '/zh/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                // nav: [
                //     { text: '嵌套', link: '/zh/nested/' }
                // ],
                sidebar: {
                    '/zh/': [
                        {
                            title: 'v2rayN',
                            collapsable: false,
                            children: [
                                'v2rayn',
                            ],
                        },
                        {
                            title: 'v2rayNG',
                            collapsable: false,
                            children: [
                                'v2rayng',
                            ],
                        },
                        {
                            title: 'Qv2ray',
                            collapsable: false,
                            children: [
                                'qv2ray',
                            ],
                        },
                        {
                            title: 'Kitsunebi',
                            collapsable: false,
                            children: [
                                'kitsunebi',
                            ],
                        },
                        {
                            title: 'Netch',
                            collapsable: false,
                            children: [
                                'netch',
                            ],
                        },
                    ],
                },
            }
        }
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'V2vpn Guide',
            description: ''
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'V2vpn 教程',
            description: ''
        }
    }
}