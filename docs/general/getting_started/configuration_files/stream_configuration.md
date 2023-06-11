---
sidebar_position: 4
---

# Stream configuration

## Explanation

The stream.toml configuration file is required for each DLC resource, such as a new vehicle. It contains configuration
options for GXT values and meta files associated with the resource.

## Configuration options

:::note View the sample file

To explore the comprehensive list of configuration options, refer to the sample configuration file.
As there are numerous options with nested structures, make sure to carefully review the file and refer to the comments
for detailed explanations.

:::

## Example resource.toml file

```toml
# An array containing all files that should be loaded for this dlc
files = [
    # You can also use glob patterns to give access to a whole directory
    "stream/assets/*"
]
# The meta files your dlc uses
[meta]
"stream/carcols.meta" = "CARCOLS_FILE"
"stream/vehicles.meta" = "VEHICLE_METADATA_FILE"
"stream/handling.meta" = "HANDLING_FILE"

# The GXT entries for your dlc
[gxt]
"myveh" = "My vehicle"
```