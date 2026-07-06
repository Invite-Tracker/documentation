# Ticket History

The **History** page shows tickets opened in your server. Use it to find open tickets, review closed tickets, and open saved transcripts.

![Ticket history](/assets/tickets/history.png)

## Searching Tickets

You can search by ticket number, channel, member, reason, or Discord ID.

You can also filter by:

- Status
- Template
- Panel
- Transcript availability
- Opened date
- Closed date
- Transcript saved date
- Opener ID
- Closer ID

Dates can be entered as `YYYY-MM-DD` or `DD/MM/YYYY`.

## History Table

The history table shows:

- Ticket ID and channel
- Opener
- Closer
- Template and panel
- Opened and closed dates
- Duration
- Transcript links when a transcript exists

## Transcripts

If a ticket has a saved transcript, the History page shows a transcript link. Opening a transcript requires Discord login, and access depends on the template's transcript access settings.

See [Ticket Templates](/dashboard/tickets/templates#transcripts) for transcript setup.

::: warning
Transcripts on free servers are stored for 30 days after they are saved.

Premium servers keep transcripts with no time limit.
:::

::: warning
Deleting a ticket channel manually marks the ticket as closed, but it does not run the normal close flow. Use the close button or `/ticket-close` when you want close roles, close DMs, close logs, and transcripts to run.
:::
