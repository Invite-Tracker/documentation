# Leaderboard

::: info Premium feature
The leaderboard page and the public web leaderboard require [Invite Tracker Premium](/premium).
:::

The leaderboard page gives premium servers a live view of their top inviters and top messengers — richer than the `/leaderboard` command — and lets you publish it as a public web page with your own custom link.

## Dashboard Leaderboard

The dashboard leaderboard ranks the top 50 members by **invites** or **messages**, over **all time**, the **last 30 days**, the **last 7 days** or the **last 24 hours**.

For the invite leaderboard, every entry also shows:

- **Invites**: the member's total, with the regular, bonus, left and fake breakdown
- **Latest invite**: the newest member they invited and when that member joined
- **Retention**: the percentage of their real invited members who are still on the server

Members hidden from the invite leaderboard in [Invite Tracking](/dashboard/invite-tracking) are excluded here too.

::: info
Latest invite and retention come from live join tracking, so they only cover joins recorded after the feature was released. The page shows the date data collection started.
:::

::: tip
The leaderboard refreshes every few minutes. If someone just invited a member, give the page a moment before expecting it to move.
:::

## Public Leaderboard

You can publish a live, read-only version of your leaderboard that anyone can open in a browser — no Discord login needed. Perfect for invite events, partner pages, or just letting members check their rank without opening Discord.

To publish it:

1. Choose a **custom link** for your server, for example `invite-tracker.com/leaderboard/your-server`. Links are unique across all servers, 3-32 characters long, and can contain lowercase letters, numbers and hyphens.
2. Turn on **Publish to the web** and save your changes.
3. Share the link!

The public page shows your server's name, icon and member count, the invite and message leaderboards, and the same time ranges as the dashboard.

### Invite Details on the Public Page

By default, the public page only shows ranks, names, avatars and counts. Each member's **latest invite**, **join time** and **retention** stay private — they are only visible to you in the dashboard.

If you want to show them publicly too, turn on **Show invite details publicly**.

::: warning
The public leaderboard is a premium feature. The page stops being available if the server's premium expires or if you turn **Publish to the web** off — the link simply shows "This leaderboard isn't public".
:::

::: info
Members who left your server a long time ago may occasionally be shown by their user ID instead of their name.
:::
