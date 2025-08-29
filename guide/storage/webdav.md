# WebDAV

WebDAV 适配器允许您连接到任何兼容 WebDAV 协议的服务器，例如 Nextcloud, ownCloud 或其他独立的 WebDAV 服务。

::: tip 广泛兼容
WebDAV 是一种成熟的标准协议，许多网盘和NAS系统都提供支持，具有良好的通用性。
:::

## 配置参数

| 字段 | 标签 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| `base_url` | 基础地址 | String | 是 | WebDAV 服务器的完整 URL。例如：`https://example.com/remote.php/dav/files/username/` |
| `username` | 用户名 | String | 否 | 登录 WebDAV 服务器的用户名。 |
| `password` | 密码 | Password | 否 | 登录 WebDAV 服务器的密码。 |
| `timeout` | 超时(秒) | Number | 否 | 连接超时时间，默认为 15 秒。 |

::: info `base_url` 提示
`base_url` 通常需要指向您在 WebDAV 服务器上的一个特定目录。请确保此 URL 是您希望 Foxel 读写文件的根路径。
:::