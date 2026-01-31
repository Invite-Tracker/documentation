# Administration Commands

The explanation for all the administration commands available for Invite Tracker.

## Invite Administration

| Command | Description |
| --- | --- |
| `/deleteinvite <code>` | Deletes the specified invite code |
| `/syncinvites [@user]` | Synchronizes the server's invites with everyone or a specific user |
| `/purge-invite-codes [purge-amount] [maximum-uses] [include-users \| exclude-users] [include-channels \| exclude-channels]` | Purge invite codes from your server, either every invite code or only ones that fall into the conditions you input. |

::: danger
`/syncinvites` adds the uses of active invites in your server to the invite count of the bot. You should only run this command once (such as when adding the bot to your server), otherwise you will double the invites if run again.
:::

## Server Settings

| Command | Description |
| --- | --- |
| :star: `/massban <@user\|invite_code>` | Allows you to ban everyone invited by a specific user or you can choose to mass ban everyone invited by a specific invite code. |
| :star: `/exportleaderboard <leaderboard_type>` | Allows you to export the invites or messages leaderboard type. This gives you raw data that can be downloaded from a .csv file format. |
| :star: `/exportinvitedlist <@user\|invite_code\|invite_label\|filter_role>` | Allows you to export a list of the specified type to a downloadable .csv file format. What are Invite Labels? Click [here](/dashboard/invite-tracking#invite-label) for more info. |

::: info
The export commands have a cooldown of 5 minutes to prevent abuse.
:::

## CSV Export Formats

### Leaderboard Export

The `/exportleaderboard` command exports a CSV file with the following columns:

| Column | Description |
| --- | --- |
| `user_id` | The Discord user ID |
| `username` | The user's Discord username |
| `regular_invites` | Number of regular/confirmed invites |
| `left_invites` | Number of invites where the invited user left |
| `fake_invites` | Number of invites flagged as fake |
| `bonus_invites` | Number of manually added bonus invites |
| `total_invites` | Calculated total (regular - left - fake + bonus) |

For message leaderboards, the export includes:

| Column | Description |
| --- | --- |
| `user_id` | The Discord user ID |
| `username` | The user's Discord username |
| `message_count` | Total number of counted messages |

### Invited List Export

The `/exportinvitedlist` command exports a CSV file with the following columns:

| Column | Description |
| --- | --- |
| `user_id` | The Discord user ID of the invited member |
| `username` | The invited member's Discord username |
| `joined_at` | When the member joined the server |
| `invite_code` | The invite code used (if known) |
| `inviter_id` | The Discord user ID of the inviter |
| `inviter_username` | The inviter's Discord username |
| `is_fake` | Whether the invite was flagged as fake |
