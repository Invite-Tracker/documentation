# <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Pin Leaderboard

The pin leaderboard plugin lets you create self-updating leaderboards which are automatically sent and pinned in the selected channel. The pinned leaderboards automatically update every 15 minutes.

## How It Works

When you enable a pinned leaderboard:

1. Invite Tracker sends a leaderboard message to your selected channel
2. The message is automatically pinned
3. Every 15 minutes, the bot updates the message with current rankings
4. The leaderboard always shows the latest data without you needing to do anything

::: info
The 15-minute update interval helps ensure accurate data while being respectful of Discord's rate limits.
:::

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Invite Leaderboard

This feature sends an automatically updating invite leaderboard to the selected channel.

![Invite Leaderboard](/assets/pin-leaderboard/invite-leaderboard.png)

After we press save, Invite Tracker will instantly create and pin an invite leaderboard in the specified channel.

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Message Leaderboard

This feature sends an automatic updating message leaderboard to the selected channel.

![Message Leaderboard](/assets/pin-leaderboard/message-leaderboard.png)

After we press save, Invite Tracker will instantly create and pin a message leaderboard in the specified channel.

::: tip
Daily/Weekly leaderboards show the previous 24 hours/week from the last 15 minute update.
:::

## Leaderboard Types

You can create separate pinned leaderboards for different time ranges:

| Type | Description |
| --- | --- |
| **All Time** | Shows cumulative totals since the bot started tracking |
| **Daily** | Shows activity from the last 24 hours, resetting each day |
| **Weekly** | Shows activity from the last 7 days, resetting each week |

::: tip
You can have multiple leaderboards pinned in different channels - for example, an all-time leaderboard in your stats channel and a weekly leaderboard in your announcements channel.
:::
