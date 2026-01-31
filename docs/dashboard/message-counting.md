# Message Counting

The message counting plugin can decide where messages can be counted, how often they can be counted, and even assign roles to users who send enough messages.

## Message Count Delay

The *message count delay* of your server is the number of seconds that need to pass between each counted message before Invite Tracker counts another message.

For example, if a user sends a message which Invite Tracker counts and the *message count delay* in that server is 10 seconds, Invite Tracker will not count any other messages sent by that same user before 10 seconds have passed. This is to stop people from spamming messages to be at the top of the message count leaderboard.

![Message Count Delay](/assets/message-counting/message-delay.png)

::: info
Every server's default *message count delay* is 0 seconds.
:::

::: tip
A good *message count delay* is 10 seconds.
:::

::: warning
A server's *message count delay* must be between 0 and 300 seconds.
:::

## Messages Channels Blacklist

This is where you can blacklist a channel from having messages counted. Messages sent by users in a blacklisted channel will not be counted towards their total amount of messages sent.

![Messages Channels Blacklist](/assets/message-counting/channel-blacklist.png)

::: tip
A good idea would be to blacklist any bot-designated channels. This is because usually, you do not want people to gain messages for spamming lots of commands.
:::

::: warning
Free servers can only have a maximum of 5 blacklisted channels.

Premium servers can have an unlimited amount of blacklisted channels.
:::

## Role Messages Blacklist

This is where you can blacklist a role from having messages counted. Users with the selected role will not have their messages counted.

![Role Messages Blacklist](/assets/message-counting/role-blacklist.png)

::: warning
Free servers can only have a maximum of 3 blacklisted roles.

Premium servers can have an unlimited amount of blacklisted roles.
:::

## User Messages Blacklist

This is where you can blacklist members from having their messages counted by using their user IDs. Messages sent by message-blacklisted users are not tracked by Invite Tracker and will not count towards their total amount of messages sent.

![User Messages Blacklist](/assets/message-counting/user-blacklist.png)

::: info
Information regarding how to get a user's ID can be found [here](/information#copying-a-user-id).
:::

::: warning
Free servers can only have a maximum of 3 blacklisted users.

Premium servers can have an unlimited amount of blacklisted users.
:::

::: danger
Be careful not to blacklist the wrong users.
:::

## Highest Mode

This switch decides the effect of the [reward roles](#reward-roles) feature for the message counting plugin.

*The Highest Mode* decides whether users keep all of the reward roles they have managed to acquire or only the role that requires the most amount of messages. To keep the highest role, enable the Highest Mode setting. To keep all the roles added keep the Highest Mode setting disabled.

![Highest Mode](/assets/message-counting/highest-mode.png)

## Reward Role Announcements

*Reward Role Announcements* allows the bot to send a message when the user reaches a reward role to the same channel or the selected channel.

![Reward Role Announcements](/assets/message-counting/reward-announcements.png)

## Reward Roles

A *reward role* is a role that is assigned to a user when they have sent a certain amount of messages.

![Reward Roles](/assets/message-counting/reward-roles.png)

::: warning
Free servers can only have a maximum of 5 *reward roles*.

Premium servers can have an unlimited amount of *reward roles*.
:::
