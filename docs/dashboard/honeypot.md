# Honeypot

A honeypot is a visible trap channel — one no real member would ever post in. Spam bots that join and flood every channel they can see post straight into it, and Invite Tracker punishes them **within seconds** of their first message. The trap itself is free for every server; punishment tuning and custom warnings are part of Premium.

The honeypot is **disabled by default**: add at least one trap channel on the dashboard's **Honeypot** page and enable it to get started.

## Trap Channels

A trap channel must be an ordinary text channel that **everyone can see and post in** — that's what makes it irresistible to spam bots. Use a dedicated channel, never one used for real conversation.

The **Create #honeypot** button sets one up in a single click: visible to everyone, posting allowed, threads disabled and the warning pinned (the button needs the **Manage Channels** permission). You can also pick any existing text channel from the selector.

If a trap channel gets deleted on Discord, it is removed from the honeypot automatically and a notice is posted to your log channel.

![Trap Channels](/assets/honeypot/trap-channels.png)

::: info
Free servers run **1 trap channel**; Premium servers can run up to **5**.
:::

## The Pinned Warning

So no honest member walks into the trap, the bot keeps a pinned warning in every trap channel explaining exactly what it is. The warning is posted and pinned automatically when you save — edits update the pinned message in place, and disabling the warning or removing the channel deletes it again.

Free servers post the stock warning. Premium servers can write their own warning text, use a fully custom embed, or turn the warning off entirely.

![Pinned Warning](/assets/honeypot/pinned-warning.png)

::: warning
The bot needs the **Send Messages** and **Manage Messages** permissions in the trap channel to post and pin the warning — the dashboard shows a notice if it couldn't.
:::

## When the Trap Springs

Any message from a non-exempt member in a trap channel triggers the punishment:

- **Kick & purge** (the default) — the member is kicked and their messages from the last **24 hours** are deleted from every channel. It's a kick, not a ban: a wrongly caught human can simply rejoin.
- Premium servers can switch to **log only** (a safe way to test the trap), **ban** or **timeout** — and tune the message-deletion window (0–168 hours) and the timeout duration (1–672 hours).

![Punishment](/assets/honeypot/punishment.png)

Every trigger is reported to your **log channel**: who was caught, their account age and join date, the message that gave them away, and whether the punishment succeeded. Premium servers can also **ping a role** with every report.

::: warning
Invite Tracker needs the **Ban Members** permission (with a role above the spammer's) for kick & purge and ban, **Moderate Members** for timeouts, and **Manage Messages** to clean up trigger messages. The dashboard shows a notice while any of these are missing.
:::

## Exemptions

The people who could have configured the trap can never be caught by it: the **server owner**, **administrators** and members with **Manage Server** are always exempt. Messages from other bots are ignored by default too, so your integrations are safe.

On top of that you can exempt specific **roles** and **members** of your own — free servers get 3 of each; Premium unlocks unlimited exempt roles and up to 100 exempt members.

## Misfire Protection

If several members who have been in your server for over a month post in the trap within a few minutes, the trap is almost certainly pointed at a channel your community actually uses — not catching spam bots. The honeypot then **pauses itself**, posts a notice to your log channel, and waits for you to review the trap channel before you re-enable it.

## Trigger History

Every catch is recorded with the offending message kept as evidence — review them on the dashboard's **Honeypot** page, along with a running total of everyone the trap has caught.

![Trigger History](/assets/honeypot/trigger-history.png)

::: info
Free servers keep the **last 5 catches from the past 3 days**; Premium servers keep the **last 20 from the past 30 days**.
:::
