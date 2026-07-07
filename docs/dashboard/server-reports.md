# Server Reports

The server reports plugin automatically posts a growth summary of your server in a channel of your choice — no need to open the dashboard to know how your server is doing.

## How It Works

When you enable server reports:

1. Invite Tracker sends the first report to your selected channel shortly after you enable the feature
2. After that, a new report is posted automatically every month (or every week for premium servers)
3. Each report summarizes the period since the previous one: joins, leaves, net growth and your top inviters

::: warning
The bot needs the permission to send messages (and embeds) in the selected channel. If it can no longer send the report — for example because the channel was deleted or the permission was removed — server reports are automatically disabled.
:::

## Report Channel

The channel the report is posted in. Pick a channel your staff reads, or a public channel if you like sharing your growth with your community.

## Frequency

How often the report is sent.

::: warning
Free servers receive a **monthly** report.

Premium servers can choose between **weekly** and **monthly** reports.
:::

## What's Inside

Every report includes:

- **Joins**, **Leaves** and **Net Growth** for the period
- The **top inviters** of the period

Premium reports additionally include:

- **Member retention**: how many of the members who joined during the period are still on the server
- The **top invite links** of the period, with their [invite labels](/dashboard/invite-tracking#invite-label)
- A **growth graph** visualizing joins and leaves over the period
- Five top inviters instead of three

::: tip
Reports pair well with the [Analytics](/dashboard/analytics) page: the report gives you the headline numbers in Discord, the dashboard lets you dig into the details.
:::
