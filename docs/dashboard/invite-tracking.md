# Invite Tracking

The invite tracking plugin lets you choose a fake delay for your server, blacklist/hide users, and manage your Invite Labels.

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Fake Delay

The *fake delay* of your server is the number of days old an account has to be when joining to not be counted as a fake invite. For example, if you set your server's *fake delay* to 5 days and an account that is 4 days old joins your server, the person who invited that account will gain a regular invite and a fake invite. The explanation of every invite type can be found [here](/dashboard/messages/types#invite-types).

![Fake Delay](/assets/invite-tracking/fake-delay.png)

::: info
Every server's default *fake delay* is 3 days.
:::

::: tip
A good *fake delay* is 5 days.
:::

::: warning
A server's *fake delay* must be between 0 and 300 days.
:::

## User Invites Blacklist

This is where you invite blacklist members using their user IDs. Invite-blacklisted users' invites are not tracked by Invite Tracker and they do not gain any invites. Welcome/leave messages are not affected by this.

![User Invites Blacklist](/assets/invite-tracking/user-blacklist.png)

::: info
Information regarding how to get a user's ID can be found [here](/information#copying-a-user-id).
:::

::: warning
Free servers can only have a maximum of 3 invite-blacklisted users.

Premium servers can have a maximum amount of 100 invite-blacklisted users.
:::

::: danger
Be careful not to blacklist the wrong users.
:::

## Invites Leaderboard Hidden Users

This is where you can hide users from the invites leaderboard using their user IDs. Invite leaderboard hidden users' invites are still tracked but not shown on the leaderboard.

![Invites Leaderboard Hidden Users](/assets/invite-tracking/hidden-users.png)

::: info
Information regarding how to get a user's ID can be found [here](/information#copying-a-user-id).
:::

## Invite Label

Invite Labels allow you to label specific invite codes to track where members are joining from. You may also assign a role upon them joining.

![Invite Label](/assets/invite-tracking/invite-label.png)

You can setup an invite label by pasting in your invite link or code (e.g discord.gg/someinvite or someinvite), and assign any text label you'd like.

::: tip
You can use the `%invite_label%` variable for your join, join DM, and leave messages so it will show the label name (or its invite code).

<img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> You can also search who joined from a specific label by using the `/invitedlist` command
:::

::: warning
Free servers can only have a maximum of 1 invite label.

Premium servers can have an unlimited amount of invite labels.
:::

::: danger
Invite Labels do not support custom invite links (vanity).
:::
