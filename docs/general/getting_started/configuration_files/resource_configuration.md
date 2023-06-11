---
sidebar_position: 3
---

# Resource configuration

## Explanation

The resource.toml file is an essential configuration file required for each resource.
It should be placed in the main directory of your resource.

This file contains various configuration options specific to your resource, including
its [type](/general/getting_started/resources#resource-types) and any dependencies it may have.

## Configuration options

| Key                  | Type     | Description                                                                                                 |
|----------------------|----------|-------------------------------------------------------------------------------------------------------------|
| type                 | string   | The serverside type of your resource (the correct module for that type has to be loaded)                    |
| client-type          | string   | The clientside type of your resource (the correct module for that type has to be loaded)                    |
| main                 | string   | The main serverside file that will get loaded when the server starts                                        |
| client-main          | string   | The main clientside file that will get loaded when the client starts                                        |
| client-files         | string[] | The files that the client has access to (The client-main file does not have to be included here)            |
| required-permissions | string[] | The required permissions to play on the server (these have to be accepted, otherwise the player can't join) |
| optional-permissions | string[] | The optional permissions to play on the server (these permissions can be declined by the user)              |
| deps                 | string[] | The dependencies of this resource (All dependencies get loaded before the resource)                         |

:::tip Client or server only resources

If you want to create a resource that is only loaded on the client or server, you can set the type of the other side
to `none`.

:::

## Example resource.toml file

```toml
type = "js"
client-type = "js"
main = "server.js"
client-main = "client.js"
client-files = [
    "myFile.js",
    # You can also use glob patterns to give access to a whole directory
    "client/*"
]
required-permissions = [
    "Screen Capture"
]
optional-permissions = [
    "WebRTC"
]
deps = [
    "myOtherResource"
]
```