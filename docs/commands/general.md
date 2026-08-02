# General Commands

The explanation for all the general commands available for Invite Tracker.

## Information

| Command | Description |
| --- | --- |
| `/about` | Displays information about Invite Tracker |
| `/help [command]` | Displays the help page with all commands or an in-depth explanation of the specified command |
| `/roleinfo <@role>` | Displays information about a specified role |
| `/serverinfo` | Displays information about the server |
| `/userinfo [@user]` | Displays information about yourself or a specified member |

## Invites

| Command | Description |
| --- | --- |
| `/findlink [mobile_mode: <True\|False>]` | Displays one of your invite links. If `mobile_mode` is enabled, it returns a plain copyable response instead of an embed. |
| `/invitecodes [@user]` | Displays all of your invite codes in descending order. Administrators can also view another member's invite codes. |
| `/invitedlist <@user\|invite_code\|invite_label\|filter_role>` | **Premium feature.** Displays a list of users who were invited via you, the specified member, or invite link. There is also a further option to filter that to users with a specific role. |
| `/inviter <@user>` | **Premium feature.** Displays who invited the specified member |
| `/invites [@user]` | Displays the number of invites you or the specified member has |

## Links

| Command | Description |
| --- | --- |
| `/add` | Displays a link used to invite Invite Tracker |
| `/bot-support` | Displays the Discord invite link used to join the support server for the Invite Tracker bot |
| `/dashboard` | Displays the link used to access Invite Tracker's dashboard |
| `/documentation` | Displays the link used to access this website |
| `/variables` | Displays the link used to view all variables |
| `/vote` | Displays the link used to vote for the bot |

## Messages

| Command | Description |
| --- | --- |
| `/messages [@user]` | Displays the number of messages you or the specified member has sent |

## Statistics

| Command | Description |
| --- | --- |
| `/leaderboard invites [type<all time\|daily\|weekly\|monthly>] [@role]` | Displays the server's invite leaderboard. You can also choose a type to display a leaderboard for all time, daily, weekly, and monthly. |
| `/leaderboard messages [type<all time\|daily\|weekly\|monthly>] [@role]` | Displays the server's message leaderboard. You can also choose a type to display a leaderboard for all time, daily, weekly, and monthly. |
| `/stats joins` | Displays the server's join statistics via a graph |
| `/stats leaves` | Displays the server's leave statistics via a graph |
| `/stats combined` | Displays the server's combined join and leave statistics via a graph |

::: info
The `[@role]` parameter allows you to filter the leaderboard to only show members with a specific role. This is useful for viewing leaderboards for specific teams, tiers, or groups in your server.

Role filtering on leaderboards and the monthly leaderboard type are **Premium features**.
:::
