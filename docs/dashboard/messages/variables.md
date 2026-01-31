# Variables

You can use variables when making a join, joinDM or Leave message. Variables are replaced with the correct information in join messages. Take to mind where all the different variables are usable.

## Member Variables

| Variable | Description | Where to use |
| --- | --- | --- |
| `%member%` | Member's display name if applicable. Otherwise defaults to Username#Discriminator | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_name%` | Member's username | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_discriminator%` | Member's discriminator | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_mention%` | Mention the member | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_id%` | Member's Discord ID | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_avatar%` | Member's Discord profile picture | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_created%` | When the member made their account | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_created_ago%` | How long ago the member made their account | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_joined%` | When the member joined the server | `LEAVE` |
| `%member_joined_ago%` | How long ago the member joined the server | `LEAVE` |
| `%member_join_count%` | How many times the member joined the server | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_leave_count%` | How many times the member left the server | `JOIN`, `LEAVE`, `JOIN DM` |

## Member Timestamp Variables

### Member Joined

| Variable | Description | Where to use |
| --- | --- | --- |
| `%member_joined_at_t%` | Member's shortened join time. Ex: `22:22` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_joined_at_T%` | Member's complete join time. Ex: `22:22:58` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_joined_at_d%` | Member's shortened join date. Ex: `17/05/2016` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_joined_at_D%` | Member's complete join date. Ex: `17 May 2016` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_joined_at_f%` | Member's shortened join date and time. Ex: `17 May 2016 22:57` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_joined_at_F%` | Member's complete join date and time. Ex: `Tuesday, 17 May 2016 at 22:57` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_joined_at_R%` | Member's relative join time. Ex: `5 years ago` | `JOIN`, `LEAVE`, `JOIN DM` |

### Member Created

| Variable | Description | Where to use |
| --- | --- | --- |
| `%member_created_at_t%` | Member's shortened creation time of day. Ex: `22:22` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_created_at_T%` | Member's complete creation time of day. Ex: `22:22:58` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_created_at_d%` | Member's shortened creation date. Ex: `17/05/2016` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_created_at_D%` | Member's complete creation date. Ex: `17 May 2016` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_created_at_f%` | Member's shortened creation date and time. Ex: `17 May 2016 22:57` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_created_at_F%` | Member's complete creation date and time. Ex: `Tuesday, 17 May 2016 at 22:57` | `JOIN`, `LEAVE`, `JOIN DM` |
| `%member_created_at_R%` | Member's relative creation time. Ex: `5 years ago` | `JOIN`, `LEAVE`, `JOIN DM` |

## Inviter Variables

| Variable | Description | Where to use |
| --- | --- | --- |
| `%inviter%` | Inviter's display name if applicable. Otherwise defaults to Username#Discriminator | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_name%` | Inviter's username | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_discriminator%` | Inviter's discriminator | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_mention%` | Inviter's mention | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_id%` | Inviter's Discord ID | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_avatar%` | Inviter's Discord profile picture | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_invites%` | Inviter's number of total invites | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_reg_invites%` | Inviter's number of regular invites | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_leave_invites%` | Inviter's number of leave invites | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_fake_invites%` | Inviter's number of fake invites | `JOIN`, `LEAVE`, `JOIN DM` |
| `%inviter_bonus_invites%` | Inviter's number of bonus invites | `JOIN`, `LEAVE`, `JOIN DM` |

## Invite Variables

| Variable | Description | Where to use |
| --- | --- | --- |
| `%invite_code%` | The invite code the user used | `JOIN` |
| `%invite_uses%` | The number of uses the invite code has | `JOIN` |
| `%invite_url%` | The invite url | `JOIN` |
| `%invite_label%` | The invite label. Otherwise, defaults to the invite code. What are Invite Labels? Click [here](/dashboard/invite-tracking#invite-label) for more info. | `JOIN`, `LEAVE`, `JOIN DM` |
| `%random_color%` | Random color for embeds | `JOIN`, `LEAVE` |

## Server Variables

| Variable | Description | Where to use |
| --- | --- | --- |
| `%guild_name%` | Server's name | `JOIN`, `LEAVE`, `JOIN DM` |
| `%guild_avatar%` | Server's icon URL | `JOIN`, `LEAVE`, `JOIN DM` |
| `%guild_icon%` | Server's icon URL (alias for guild_avatar) | `JOIN`, `LEAVE`, `JOIN DM` |
| `%guild_count%` | Number of members in the server | `JOIN`, `LEAVE`, `JOIN DM` |
| `%guild_count_ordinal%` | Number of members in the server as an ordinal number (1st / 2nd / 3rd) | `JOIN`, `LEAVE`, `JOIN DM` |

## Embed-Specific Variables

| Variable | Description | Where to use |
| --- | --- | --- |
| `%random_color%` | Generates a random color for embed borders | `JOIN`, `LEAVE` (embeds only) |

::: tip
The `%random_color%` variable is useful when you want each welcome message to have a unique, randomized embed color. Use it in the embed color field.
:::
