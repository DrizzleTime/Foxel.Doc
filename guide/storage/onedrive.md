# OneDrive

OneDrive 适配器通过 Microsoft Graph API 连接到 Microsoft OneDrive 个人版或商业版账户。

::: tip 官方集成
此适配器使用 Microsoft 官方的 Graph API，稳定可靠，能够充分利用 OneDrive 的性能和特性。
:::

## 配置参数

::: tip
手动获取配置参数的方法请参考 [OList 文档](https://doc.oplist.org.cn/guide/drivers/onedrive#_2-%E6%89%8B%E5%8A%A8%E5%88%9B%E5%BB%BA%E5%BA%94%E7%94%A8%E6%8C%82%E8%BD%BD)。
:::

| 字段 | 标签 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| `client_id` | Client ID | String | 是 | Microsoft Azure 应用的客户端 ID。 |
| `client_secret` | Client Secret | Password | 是 | Microsoft Azure 应用的客户端密钥。 |
| `refresh_token` | Refresh Token | Password | 是 | 用于获取访问权限的刷新令牌。 |
| `root` | 根目录 | String | 否 | 在 OneDrive 中的路径前缀，默认为根目录 `/`。例如 `Documents/Foxel`。 |
