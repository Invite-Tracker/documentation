# <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Ticket Analytics

The **Analytics** page turns your ticket history into a performance dashboard for your support team: how many tickets you handle, how fast members get help, who does the work, and how satisfied members are with the support they received.

## How It Works

Invite Tracker computes the metrics from the tickets you already have, plus post-close satisfaction ratings:

1. A **ticket volume chart** showing tickets opened and closed over time
2. **Overview stats**: opened, closed, currently open, first reply time, resolution time and CSAT score
3. **Satisfaction (CSAT)**: the average 1–5 rating members give after their ticket closes
4. **Response times**: median and average first reply and resolution times, plus escalations
5. A **staff performance** leaderboard
6. A breakdown **by template and panel**

::: info
First reply times are measured from the moment the feature was released — older tickets have no first reply data. Satisfaction ratings start coming in once you enable the survey in a template.
:::

::: tip
Metrics refresh every few minutes. If you just closed a wave of tickets, give the page a moment before expecting it to show up.
:::

## Time Ranges

You can view the metrics over different time ranges using the selector at the top of the page.

::: warning
Free servers see the total counts (opened, closed and currently open) for the last **7 days** and **30 days**. The detailed metrics — charts, response times, satisfaction, staff performance and breakdowns — are a premium feature and show a locked preview on free servers.

Premium servers also unlock the **90 days**, **1 year** and **all time** ranges.
:::

::: tip
Ticket history is never deleted, so if you upgrade to premium later, the analytics immediately cover everything that happened while your server was on the free plan.
:::

## Satisfaction (CSAT)

Satisfaction ratings are collected with a small survey that the bot sends to the ticket opener via DM when their ticket is closed:

1. Open [Ticket Templates](/dashboard/tickets/templates) and select a template
2. In the **Messages** tab, enable the **Satisfaction survey**
3. From then on, the opener receives a DM with 1–5 star buttons after each ticket closes

Each ticket can be rated once, only by the member who opened it. The Analytics page shows the average score, the rating distribution and the response rate.

::: warning
The satisfaction survey is a premium feature. Members who have server DMs disabled cannot receive the survey.
:::

## Response Times

- **First reply**: the time between the ticket being opened and the first message from a staff member. Messages from the opener never count, even if the opener has a support role.
- **Resolution**: the time between the ticket being opened and it being closed.
- **Escalations**: how many tickets were escalated to another template during the period.

Both response metrics show the **median** as the headline number — a single ticket that stayed open over a weekend won't distort it — with the average next to it.

## Staff Performance

The leaderboard shows who handles your tickets. A ticket is credited to the staff member who **claimed** it; tickets that were never claimed are credited to whoever **closed** them.

For each staff member you can see:

- **Tickets**: tickets they handled during the period
- **Claimed**: how many of those they claimed
- **Avg time**: the average resolution time of their tickets
- **CSAT**: the average rating members gave their tickets

::: info
Staff members who left your server may occasionally be shown by their user ID instead of their name.
:::

## By Template & By Panel

The breakdown cards show tickets opened and closed, plus the average resolution time, per ticket template and per panel. Use them to spot which categories generate the most work — and which ones are slower than the rest.
