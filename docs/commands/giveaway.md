# Giveaway Commands

The explanation for the giveaway command for Invite Tracker.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JSxU-0oPmaE" frameborder="0" allowfullscreen></iframe>

A tutorial video on how giveaways work and how to set them up.

## Commands

::: tip
You can now create giveaways inside a thread with the `/giveaway create` command!
:::

| Command | Description |
| --- | --- |
| `/giveaway create <prize name> <duration> <winner amount> <#channel>` | Creates a giveaway using the specified information. See the tip below on how to format the duration. |
| `/giveaway delete <message id>` | Deletes a specified giveaway |
| `/giveaway end <message id>` | Ends a specified giveaway |
| `/giveaway list` | Lists all of the server's currently active giveaways and their message id's |
| `/giveaway reroll <message id>` | Chooses new winners for the specified giveaway |
| `/giveaway scheduled` | Lists all of the server's scheduled giveaways |
| `/giveaway templates` | Lists all of the server's giveaway templates |

::: info
The format for giveaways is a number followed by the time variable. For example `5d` = 5 days, `3w2h30m` = 3 weeks, 2 hours, and 30 minutes. The supported variables are `s` = seconds, `m` = minutes, `h` = hours, `d` = days, and `w` = weeks.
:::

::: info
When ending a giveaway, Invite Tracker will choose winners.

When deleting a giveaway, Invite Tracker just permanently removes it without choosing any winners.
:::

## Optional Arguments

### /giveaway create

| Argument | Description |
| --- | --- |
| `[messages_required: <number>]` | Requires members to have at least the specified amount of messages in order to be able to join the giveaway |
| `[roles_bonus_entries: <@role> <number>]` | Assigns bonus entries to members with the specified roles |
| `[roles_required: <@role>]` | The roles required to enter the giveaway. |
| `[roles_required_config: <all\|one of>]` | Whether to require all roles or one of the roles selected in roles_required. |
| `[winners_roles: <@role>]` | **Premium feature.** Winner roles will be automatically assigned to the winners of the giveaway |

::: info
For `winners_roles` and `roles_required`, mention multiple roles in the same option value, for example `@role1 @role2 @role3`.
For `roles_bonus_entries`, use role-entry pairs in the same option value, for example `@role1 10 @role2 20`.
:::

### /giveaway reroll

| Argument | Description |
| --- | --- |
| `[winner_amount: <number>]` | Chooses the specified amount of new winners when re-rolling the giveaway |
