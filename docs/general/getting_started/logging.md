---
sidebar_position: 6
---

# Permission system

## What are permissions

Permissions are defined individually for each resource and must be accepted by users when joining the server.
Permissions determine the specific actions and capabilities that users are granted within a resource, such as accessing
certain features or performing restricted actions.

## Permission types

| Permission         | Description                                                                                      |
|--------------------|--------------------------------------------------------------------------------------------------|
| Screen Capture     | This allows a screenshot to be taken of the alt:V process (just GTA) and any webview             |
| WebRTC             | This allows peer-to-peer RTC inside JS                                                           |
| Clipboard Access   | This allows to copy content to users clipboard                                                   |
| Extended Voice API | This allows to manually control voice, like activating of microphone, muting, etc. by the server |

## Required and optional permissions

Permissions can be categorized as optional or required.
Optional permissions allow players to join the server even if they choose not to grant those permissions, but they will be limited in accessing the corresponding features.
On the other hand, required permissions are essential for server access, and if users decline them, they will be unable to connect to the server.

```toml showLineNumbers
required-permissions = [
    "Screen Capture",
    "WebRTC"
]

optional-permissions = [
    "Clipboard Access"
]
```