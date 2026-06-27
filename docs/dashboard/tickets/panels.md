# Ticket Panels

Ticket panels are the Discord messages members use to open tickets. Create panels from your server's dashboard by opening **Tickets** -> **Panels**.

Before creating a panel, create at least one [ticket template](/dashboard/tickets/templates).

![Ticket panel placeholder](/assets/tickets/placeholder.svg)

## Creating a Panel

Click **Create Panel** to create a new panel. A panel must be saved before it can be sent to Discord.

## Panel Management

The **Panel Management** section controls where the panel message is sent and how members choose a ticket type.

- **Panel Name** is the internal dashboard name.
- **Panel Channel** is where **Send Panel** posts the panel message.
- **Component Type** can be **Buttons** or **Select**.
- **Ticket Count** is the current counter used by ticket naming.
- **Select Placeholder** is the placeholder text shown when using a select menu.

Click **Save** before sending a panel. After the panel is saved, click **Send Panel** to post it in Discord. If you change the panel later, click **Edit Sent Panel** to update the existing Discord message.

## Panel Limits

Panel limits control how many open tickets can exist from the panel.

- **Open Limit Per User** limits how many open tickets one member can have from this panel.
- **Open Limit All Users** limits how many open tickets the whole server can have from this panel.
- **Limit Bypass Roles** allows selected roles to ignore panel and template ticket limits.

Set a panel limit to `0` to disable that limit.

## Template Bindings

Template bindings decide which ticket options appear on the panel.

Each binding connects one template to one panel option. The binding label is what members see on the button or select menu option. You can also configure a description, emoji, and button style.

![Ticket panel bindings placeholder](/assets/tickets/placeholder.svg)

::: warning
A panel must have at least one template binding, and each template can only be bound once per panel.
:::

## Panel Message

The **Panel Message** section controls the message Invite Tracker sends for the panel. You can use plain text or an embed.

Supported panel variables include `{panel.name}`, `{schedule.timezone}`, `{bot.avatar}`, and `{specialchars}`.

## Schedule

Panel schedules let you control when regular members can open tickets from a panel.

When scheduling is enabled, choose a timezone and add opening-hour entries. Each entry has a day, start time, and end time. If the start time is later than the end time, the schedule continues past midnight into the next day.

Use **Schedule Bypass Roles** for staff or trusted roles that should still be able to open tickets outside the schedule.

::: info
If scheduling is enabled and no schedule entries are configured, the panel is treated as closed.

If a schedule entry has the same start and end time, that day is treated as open for the full day.
:::
