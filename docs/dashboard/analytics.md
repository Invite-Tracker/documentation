# Analytics

The analytics plugin gives you a growth dashboard for your server: how many members joined and left, how many of them stayed, where they came from, and which invites and inviters bring the most members.

## How It Works

Invite Tracker records every join and leave as it happens. The analytics page turns that data into:

1. A **growth chart** showing joins and leaves over time
2. **Overview stats**: net growth, joins, leaves and member retention
3. A **join sources** breakdown (invite links, vanity URL, bots, unknown)
4. Your **top invites**, with their [invite labels](/dashboard/invite-tracking#invite-label) when configured
5. Your **top inviters**, with how many of their invited members actually stayed

::: info
Detailed analytics are collected from the moment the feature was released. The page shows a "collecting data since" date — metrics like retention, sources and top inviters only cover activity after that date.
:::

::: tip
Charts refresh every few minutes. If you just had a wave of joins, give the page a moment before expecting it to show up.
:::

## Time Ranges

You can view your analytics over different time ranges using the selector at the top of the page.

::: warning
Free servers can view the last **7 days** and **30 days**. Data older than 30 days is deleted for free servers.

Premium servers keep their analytics history **forever** and unlock the **90 days**, **1 year** and **all time** ranges.
:::

::: tip
Analytics history accumulates silently: if you upgrade to premium later, the growth chart immediately shows everything that was recorded while your server was on the free plan and has not been deleted yet.
:::

## Overview Stats

At the top of the page you can find your server's key numbers for the selected period:

- **Net growth**: joins minus leaves
- **Joins** and **Leaves**: total member movements
- **Retention**: the percentage of members who joined during the period (excluding fake joins) and are still on the server

## Join Sources

This section shows how members joined your server:

- **Invite links**: joins through regular invite links, including how many were flagged as fake
- **Vanity URL**: joins through your server's vanity invite
- **Bot / OAuth**: bots added to the server
- **Unknown**: joins that could not be attributed, for example when the bot briefly lacked the required permissions

::: info
The explanation of how fake invites are detected can be found [here](/dashboard/invite-tracking#how-fake-invite-detection-works).
:::

## Top Invites

This section lists the invite links that brought the most members during the selected period. If an invite has an [invite label](/dashboard/invite-tracking#invite-label), the label is shown under the invite code — perfect for tracking campaigns like a YouTube description link or a partner server.

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Top Inviters

This section ranks your inviters for the selected period and shows the quality of their invites:

- **Invited**: members they brought during the period
- **Left**: how many of those members left again
- **Fake**: how many joins were flagged as fake
- **Retention**: the percentage of their real invites that are still on the server

::: warning
Top inviters are a premium feature. Free servers see a locked preview of this section.
:::

::: info
Inviters who left your server a long time ago may occasionally be shown by their user ID instead of their name.
:::

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Export CSV

Premium servers can export the raw join and leave events of the selected period as a `.csv` file for external analysis. Each row contains the timestamp, event type, member, inviter, invite code, join type and fake flag.

::: warning
Exports contain up to the 50,000 most recent events of the selected range and can be requested once per minute.
:::
