# Tickets Commands

The explanation for all ticket commands available for Invite Tracker.

::: info
Ticket commands only work in ticket channels created by the new tickets plugin.
:::

| Command | Description |
| --- | --- |
| `/ticket-close` | Closes the current ticket channel. |
| `/ticket-rename <name>` | Renames the current ticket channel. |
| `/ticket-add-user <user>` | Adds a user to the current ticket channel. |
| `/ticket-remove-user <user>` | Removes a user's explicit ticket permissions from the current ticket channel. |
| `/ticket-add-role <role>` | Adds a role to the current ticket channel. |
| `/ticket-remove-role <role>` | Removes a role's explicit ticket permissions from the current ticket channel. |
| `/ticket-claim` | Claims the current ticket channel. |
| `/ticket-unclaim` | Unclaims the current ticket channel. |
| `/ticket-escalate <target> [reason]` | Escalates the current ticket to an allowed target panel. The target can be the target panel name or ID. |
| `/ticket-automation <start\|stop>` | Starts or stops automations for the current ticket channel. |

<img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Ticket escalation is a Premium feature, so `/ticket-escalate` can only be used on Premium servers.

::: info
The **Two Step Close** template setting only applies to the close button. `/ticket-close` closes the ticket immediately.
:::

::: warning
Support members can manage tickets when they have one of the template's support roles. Administrators can always manage tickets.
:::

::: warning
Claim, unclaim, escalation, and automation commands require those features to be enabled in the ticket's template.
:::
