---
sidebar_position: 4
---

# Resources

## What are resources

Resources are a fundamental part of the alt:V server.
They consist of various files, data, and game scripts that are used by the server on both the server-side and
client-side.
These resources provide different features and content within the alt:V multiplayer environment.

In simpler terms, resources are like building blocks that make the server work.
They include things like game modes, custom scripts, models, textures, and other elements that contribute to the
server's functionality.
Resources are organized in subfolders within the "resources/" directory located at the root of the alt:V server.
Each resource folder contains specific files and scripts that contribute to the server's overall operation and gameplay
experience.

## Structure

The "resources/" directory contains all the resources that are currently installed on the server.
Each resource is contained within its own subfolder and requires a "resource.toml" file to be present.

```
├───altv-server.exe
└───resources
    ├───freeroam
    │   ├───client
    │   │   └───index.js
    │   ├───server
    │   │   └───index.js
    │   ├───package.json   
    │   └───resource.toml
    └───chat
```

Within the provided example, the "freeroam" directory represents a resource on the server, having the following
components:

- **client**: Contains all the client-side files
- **server**: Contains all the server-side files
- **package.json**: Used for managing dependencies and script configuration, used with the js-module
- **resource.toml**: Configuration settings and metadata for the resource. See [here](configuration_files/resource_configuration) for more information

## Resource types

| Type       | Usage                              | Required module |
|------------|------------------------------------|-----------------|
| js         | Scripting resource                 | js-module       |
| jsv2       | Scripting resource                 | js-module-v2    |
| csharp     | Scripting resource                 | csharp-module   |
| asset-pack | Provide content to other resources | -               |
| dlc        | Modding                            | -               |
| rpf        | Modding                            | -               |

:::tip Get more information

For more information on a specific resource type, click on the corresponding type in the table above.

:::
