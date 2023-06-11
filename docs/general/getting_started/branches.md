---
sidebar_position: 3
---

# Branches

## What are branches

A branch is a separate line of development within a project.
It allows you to work on specific changes or features without affecting the main project.
Think of it as a different timeline where you can make modifications independently.
Once the changes are complete, they can be merged back into the main project.

## Overview

| Name                   | Description                                                                                                                                                                                                                                                                                                    | Icon color | Configuration entry |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|---------------------|
| Release                | This branch is for stable production releases. It is considered the most reliable and is the only branch where the masterlist is available. If you run a public server, it should use this branch.                                                                                                             | Green      | `release`           |
| Release Candidate (rc) | The release candidate branch is used for upcoming updates. Changes that will be included in the release branch are tested here first. It is mostly stable, and any remaining bugs are addressed before merging to the release branch. Public servers should test their script on this branch prior to updates. | Orange     | `rc`                |
| Development (dev)      | The development branch contains the latest features, sometimes still under development. Not all features from this branch will be moved to the other branches. It may contain bugs and unfinished features, and the feature set is subject to change.                                                          | Blue       | `dev`               |
| Internal & QA          | These branches are reserved for internal use by developers and Alt:V team members. They are not publicly accessible.                                                                                                                                                                                           | Purple     | Not available       |

## How to change the branch

### Server

To change the branch of your server, follow these steps:

1. Visit the [alt:V download page](https://altv.mp/#/downloads)
2. Select the appropriate branch from the available options
3. Make sure you checked the "Data files" and the module checkboxes
4. Download the files and extract them into your server directory, overwriting the existing files

:::caution Dev branch

If you are utilizing the dev branch, it is possible that some modules are outdated.
In such cases, it is recommended to retry at a later time.

:::

### Client

To change the branch of your client, follow the instructions below:

1. Navigate to your alt:V directory
2. Open the altv.toml file
3. Look for the key "branch"
4. Update the value of the "branch" key with the corresponding branch name from the table above
5. Save the alt.toml file
6. Start alt:V