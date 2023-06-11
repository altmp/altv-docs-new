---
sidebar_position: 1
---

# Grand Theft Auto V

## Entities

### Peds

The term "ped" is short for "pedestrian," which refers to characters within the game world.
Peds can be non-playable characters (NPCs) or controlled by players.
The character controlled by the player is also commonly referred to as a ped.

One aspect of customization in GTA 5 involves the appearance of peds.
Peds can be customized in different ways, such as choosing clothing options to suit their style or adjusting the facial
appearance (only possible for the models "mp_m_freemode_01" and "mp_f_freemode_01").

### Vehicles

Vehicles in GTA 5 are diverse and serve as essential elements within the game world. They include cars, trucks, boats,
helicopters, planes, and more.
To customize vehicles there are various approaches, each offering unique options for personalization. Here are three
common approaches:

| Approach      | Description                                                                                                                                                                                                                                                                                                    |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Extras        | 	By enabling or disabling extras, players can apply specific changes to a vehicle's 3D model. Extras include spoilers, roof racks, bull bars, or other unique components.                                                                                                                                      |
| Livery        | 	Livery refers to the paint job or design applied to a vehicle. It often features logos, decals, or colors that give the vehicle a distinct appearance. Livery options can be selected to customize the visual style of the vehicle.                                                                           |
| Mods & Tuning | 	Each vehicle in GTA 5 comes with one or multiple mod kits. These mod kits allow players to apply various modifications and tuning parts to their vehicles. Modifications can include changes to the engine, suspension, brakes, exhaust, and more, enhancing the vehicle's performance and visual aesthetics. |

### Weapons

#### Categories

Weapons can be divided into different categories:

| Category        | Description                                                                                                                                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Melee           | Melee weapons are close-quarters combat tools that enable players to engage in hand-to-hand combat. Examples of melee weapons in GTA 5 include knives, baseball bats, crowbars, and brass knuckles.         |
| Firearms        | These include weapons such as pistols, shotguns, assault rifles, and sniper rifles.                                                                                                                         |
| Throwables      | Throwables consist of various explosive devices and grenades that can be thrown at enemies or strategic locations. These include grenades, sticky bombs, tear gas, and Molotov cocktails.                   |
| Projectiles     | Projectiles encompass weapons that launch projectiles, typically with explosive capabilities. This category includes rocket launchers, grenade launchers, and other heavy-duty weapons.                     |
| Vehicle weapons | Certain vehicles in GTA 5 are equipped with built-in weapons, allowing players to engage in combat while operating these vehicles. These can include machine guns, missiles, or other specialized weaponry. |

#### Ammunition

Ammunition is essential for operating most of the weapons and is consumed each time a weapon is fired.

Different weapon categories often share the same ammunition type.
For example, multiple submachine guns may utilize the same ammunition.

Apart from the standard ammunition there are also special types of ammunition that offer unique capabilities.
These special ammunition types include penetrating rounds and explosive rounds.
To enable the usage of special ammunition those have to be enabled using [natives](#natives).

#### Customization

The customization of weapons is primarily used for melee & firearms.
The other categories (throwables, projectiles, vehicle weapons) do not offer any customization options.

Provided by GTA 5 there are 2 different ways to customize and modify weapons:

- **Components**: Components provide the ability to modify weapons, enhancing their performance, accuracy, and
  versatility.
  Examples of weapon components include scopes, suppressors, extended magazines, grips, and other attachments.
  Modifying weapons with components allows to tailor the arsenal to suit different combat situations and personal
  preferences.
- **Tints**: Tints are color schemes or finishes that can be applied to weapons, giving them a unique appearance.
  From classic black to vibrant and unique options, weapon tints enable players to add a touch of individuality to their
  arsenal.

### Objects

Objects refer to various in-game entities that entities can interact with and manipulate within the game world.

Mainly there are 2 different types of objects:

- **Static objects**: These are immovable and maintain a fixed position within the game world.
  They are typically used to create the environment, scenery, and structures, such as buildings, street furniture, and
  landmarks.
- **Dynamic objects**: These possess physical properties and are subject to the game's physics simulation.
  These objects can be moved, affected by external forces, and interact with the player and other objects.

:::caution Positions

Object positions are not stored.
If you move or interact with an object and then leave the area, returning later will result in the object being
recreated at its original position.

:::hint

### Pickups

Pickups are special objects that provide immediate benefits when collected.
By simply walking over them, players automatically acquire ammunition, health, armor, or even additional weapons.
Ammunition pickups replenish weapon ammo, health pickups restore the player's vitality, armor pickups provide protective
gear, and weapon pickups grant access to new firepower.

### Blips

Blips are visual markers that provide information and are displayed on the minimap, pause menu map, or both.
Each blip is associated with a specific entity or point of interest in the game world and is represented by a color and
name.

There are different types of blips:

- **Point blips**: Point blips indicate the position of entities or locations on the map.
  They are accompanied by an icon that represents the type of entity or the nature of the location, providing visual
  cues to the player.
- **Area blips**: Area blips are rectangular markers used to demarcate specific areas of interest, such as mission
  boundaries, restricted zones, or important locations.
  These blips help players identify and navigate within designated areas.
- **Radius blips**: Radius blips are circular markers that indicate the range or proximity of an entity or an location.
  They are often used to represent areas of influence, such as the radius of a mission objective or the range of a
  signal.

### Markers

Markers are visible indicators that can be seen within the game world.
They can have various appearances and colors, allowing for differentiation and visual recognition.
It's important to note that the GTA engine imposes a limit on the number of markers that can be displayed
simultaneously.
To avoid potential issues, it is recommended to use a streamer, a tool that dynamically manages and displays markers
based on player proximity and other factors.

### Colshapes & Checkpoints

Colshapes, short for collision shapes, are invisible areas within the game world that trigger specific events when
entities enter or leave them.
They are used to define regions associated with particular actions or events.
As colshapes don't have any visual appearance and are purely conceptual, they're allowing developers to designate
trigger zones without affecting the player's visual experience.
When an entity, such as a player, vehicle, or object, enters or exits a colshape, predetermined events or actions can be
activated.

Checkpoints are similar to colshapes as they serve as trigger areas, but with the added benefit of a visual
representation through markers.
They can be chained together, allowing each checkpoint to have a preceding and succeeding checkpoint, creating a
sequential path or track for players to follow within the game world.

## Modding

### Pools

Pools are predefined limits set at the engine level, determining the maximum number of players, vehicles, objects, or
other entities that can be created and active in the game simultaneously.
When a pool reaches its maximum capacity and attempts are made to create additional entities of that type, it can lead
to instability and potential crashes in the game.
The engine is unable to allocate resources for additional entities when the pool is already full, causing the game to
experience issues.

:::info Pool limits

Certain pools are already increased by alt:V to enhance the gaming experience.
It also includes error handling mechanisms to prevent crashes when a pool limit is reached, displaying an error message
instead.

:::

### RPF files

RPF (RAGE Package File) files are the primary archival format used in GTA 5 modding.
They act as containers for game data, including models, textures, scripts, audio files, and more.

Developers can extract, modify, and replace files within RPF archives to introduce custom content into the game.

### IPL

### MLO

## Meta files

Meta files in GTA 5 modding are essential files that define and control various aspects of the game.
They contain structured data in XML format and provide information and settings for entities like vehicles, weapons,
pedestrians, and more.

Developers can modify these files to customize and alter the behavior, characteristics, and attributes of these in-game
elements.
By working with meta files, developers have the power to introduce new entities, tweak existing ones, and create unique
gameplay experiences.

Meta files are a key component of GTA 5 modding, enabling customization and enhancements to the game world.

## Natives

Natives are pre-defined functions within the game's scripting engine.
They allow developers to interact with the game world and modify its behavior.
Natives can perform various tasks, such as spawning entities, manipulating player attributes, controlling game
mechanics, and more.
To access natives, a scripting module like C# or the JavaScript module is required.

:::info Usage of natives

Natives are only accessible on the clientside of GTA 5.

:::