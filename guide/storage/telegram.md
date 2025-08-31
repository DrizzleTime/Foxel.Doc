# Telegram

Telegram 适配器允许您将 Telegram 的一个频道 (Channel) 或群组 (Group) 挂载为只读的文件存储。它通过读取频道中的消息来虚拟化文件列表，并将消息中附加的媒体文件（视频、文档等）作为文件内容。

::: warning 只读适配器
由于 Telegram 的消息流本质上没有传统文件系统的“目录”概念。您无法通过此适配器重命名或移动文件。所有文件操作都基于读取和操作已有消息。
:::

## 工作原理

-   **文件列表**: 适配器会获取指定 Chat ID 中的最新消息，并将包含媒体文件的消息解析为文件条目。
-   **文件名**: 文件名由 `消息ID` 和原始文件名（如果可用）组合而成，格式为 `message.id_filename`。例如 `123_document.pdf`。
-   **文件内容**: 读取文件时，适配器会根据文件名中的 `消息ID` 找到对应的消息，并下载该消息附加的媒体文件。

## 获取凭证

### API ID 和 API Hash

1.  打开官方网站 [my.telegram.org](https://my.telegram.org/) 并输入您的 Telegram 手机号码（需要包含国家代码，例如 `+86...`），然后点击 “Next”。
2.  您的 Telegram APP 将会收到一个验证码，复制该验证码并填写到网页中，点击 “Sign In”。
3.  登录成功后，点击 “API development tools”。
4.  在 “Create new application” 表格中：
    -   **App title**: 随意填写，例如 `MyFoxel`。
    -   **Short name**: 随意填写，例如 `MyFoxel`。
    -   **URL**: 可选，可以不填。
    -   **Platform**: 建议选择 `Desktop`。
    -   **Description**: 可选，可以不填。
5.  点击 “Create application” 后，您将获得 `api_id` 和 `api_hash`。

### Session String

获取 `api_id` 和 `api_hash` 后, 访问 [Foxel Tools](https://tools.foxel.cc) ，填写您的 `api_id` 和 `api_hash` 并登录 Telegram 即可获取 `session_string`。

## 配置参数

| 字段 | 标签 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| `api_id` | API ID | String | 是 | 从 [my.telegram.org](https://my.telegram.org) 获取的 `api_id`。 |
| `api_hash` | API Hash | Password | 是 | 从 [my.telegram.org](https://my.telegram.org) 获取的 `api_hash`。 |
| `session_string` | Session String | Password | 是 | 通过上述步骤生成的会话字符串。 |
| `chat_id` | Chat ID | String | 是 | 频道或群组的 ID 或用户名。例如 `-100123456789` 或 `channel_username`。 |
| `proxy_protocol` | 代理协议 | String | 否 | 支持 `socks5` 或 `http`。 |
| `proxy_host` | 代理主机 | String | 否 | 代理服务器的主机地址，例如 `127.0.0.1`。 |
| `proxy_port` | 代理端口 | Number | 否 | 代理服务器的端口，例如 `1080`。 |

::: danger 安全提示
请妥善保管您的 `api_id`, `api_hash` 和 `session_string`，不要泄露给他人，因为它们授予了对您 Telegram 账户的完全访问权限。
:::