---
sidebar_position: 3
toc_max_heading_level: 2
---

# Known issues

:::info About known issues

This section addresses known issues with the alt:V server and its modules. If you encounter an issue related to your
code, you will need to debug it accordingly.

:::

## alt:V

### Module outdated, module uses SDK v**X**, server requires SDK v**Y**

At times, especially when a new release is introduced, you may encounter this error.
However, there's a straightforward solution for it. To resolve the issue, you need to update your server by obtaining
the latest alt:V server files, which include the updated versions of the csharp-module.dll or js-module.dll.
By replacing the older files with the new ones, you can effectively address the error and ensure smooth operation of
your server.

:::tip Module still outdated after updating?

If you are utilizing the dev branch, it is possible that some modules may not be immediately available right after a
release.
In such cases, it is recommended to retry at a later time.

:::

### Error while reading server.toml on line **X**, column **Y**

This problem often occurs when there are mistakes or errors in your configuration file "server.toml".
For example, if you don't follow the right structure or forget to include necessary symbols, it can cause this issue.
To find and fix the problem in your configuration file, read the error message carefully.
It will tell you the exact line or part of the file where the issue is located.

### Master server connect failed. Invalid token

:::tip Development stage

If you're during the development stage, you usually don't need to announce your server to the master list.
You can set `announce` to false in your "server.toml" file.

:::

Inside your "server.toml" configuration file, there is a setting called `announce`.
If this setting is set to `true`, you will need a **valid** token for broadcasting to the master list.
If you don't have a token yet, you can find detailed instructions on how to obtain one by visiting
the [FAQ](/#how-can-i-get-a-token-for-masterlist).

## JavaScript module

### Failed to load "js-module.dll" Win32 error: 127 (7f)

1. Navigate to your alt:V server directory.
2. Delete the "libnode.dll" file from the directory.

### Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension

1. Open your package.json file
2. Look for the configuration section that specifies the "type"

- If the "type" configuration is set to a different value, change it to "module"
- If you don't have the "type" configuration add a new line with `"type": "module"` in your package.json file

## C# module

### Common warnings and errors

#### Outdated NuGets or module

If you receive one of the following errors, it's likely that your NuGet packages or the module are outdated:

- Found mismatching SDK methods. Please update ...
- XYZ SDK method is outdated. Please update your module nuget
- Event type enum size doesn't match. Please, update the nuget

To resolve this, simply update your NuGet packages to the latest version and rebuild your application.

### Unhandled Exception: Received an unhandled exception from: ...

If you're using C# on the server-side, you may sometimes come across this problem.
By updating the alt:V NuGet packages and rebuilding your resource, you can easily resolve the issue and continue without
any trouble.

