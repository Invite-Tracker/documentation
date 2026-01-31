# Verification

The verification plugin affects new members of your server by requiring them to go through a security check before they can have access to the server.

## Verification Level

The *verification level* of your server is the type of verification in your server. It gradually gets more secure for each level.

There are 4 verification levels:

- **Disabled**: The verification plugin of your server is turned off and will not function.
- **Button**: Requires new members to click a button created by Invite Tracker to get their verification role. This is the simplest verification method.
- **Captcha**: Requires new members to solve an image-based captcha sent by Invite Tracker via DM to get their verification role. The captcha displays distorted text that users must type correctly.
- **Website**: Requires new members to complete verification on the Invite Tracker website. When a member joins, they receive a link that takes them to a secure verification page where they solve an hCaptcha challenge. This offers the best protection against bots and raids because:
  - hCaptcha provides advanced bot detection
  - The verification happens on a controlled environment
  - It's harder for automated tools to bypass
  - Users must have a valid browser session

![Verification Level](/assets/verification/verification-level.png)

::: info
Selecting the **Button** option will cause a new, blue bar to appear. Clicking this will cause Invite Tracker to attempt to send a verification button to your server's [verification channel](#verification-channel). If Invite Tracker fails, please grant it the required permissions for that channel.
:::

::: tip
We recommend using the **Website** option for this feature as it is the most secure way of protecting your server against bot accounts and raids.
:::

## Verification Timeout

The *verification timeout* of your server is the number of seconds that need to pass before an unverified user is automatically kicked/banned from the server.

![Verification Timeout](/assets/verification/verification-timeout.png)

::: tip
Users need time to verify, so remember to set the *verification timeout* accordingly. The default *verification timeout* of 180 seconds should be sufficient for most cases.
:::

::: warning
A server's *verification timeout* must be between 15 and 1800 seconds.
:::

## Verification Action

This feature decides the effect of the [verification timeout](#verification-timeout) feature.

There are two *verification actions*:

- **Kick**: If a user does not verify within the *verification timeout*, they will be kicked from the server.
- **Ban**: If a user does not verify within the *verification timeout*, they will be banned from the server.

![Verification Action](/assets/verification/verification-action.png)

::: info
Every server's default *verification action* is set to kick.
:::

::: danger
Be careful when using the **Ban** option for this feature. It is generally not recommended to use it.
:::

## Verification Role

The *verification role* of your server is the role that is granted to the user after they complete the verification. [Auto roles](/dashboard/administration#auto-roles) are added to a user alongside *verification roles*.

![Verification Role](/assets/verification/verification-role.png)

::: warning
When configuring the Verification Role in your server, make sure the Invite Tracker bot role is above the role you want to give.
:::

## Verification Channel

The *verification channel* of your server is the channel where the verification message will be sent if the new member has their DMs closed.

![Verification Channel](/assets/verification/verification-channel.png)

::: warning
Remember to give Invite Tracker the correct [permissions](/faq#what-are-the-required-permissions-for-invite-tracker) so it can post verification messages.
:::

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Verification Custom Embed

*Verification Custom Embed* allows you to customize the embed for the button [verification level](#verification-level) option.

![Verification Custom Embed](/assets/verification/verification-custom-embed.png)

Once enabled, you can customize what the embed looks like. The new embed is sent out when you click on the *Send Verification Panel* button.

## Verification Logs

*Verification logs* are messages sent by Invite Tracker to a specific channel that notify you whether new members managed to verify, failed the verification, or did not verify within the *verification timeout*.

![Verification Logs](/assets/verification/verification-logs.png)

## Verification Logs Channel

The *verification logs channel* of your server is where your server's *verification logs* are sent.

::: warning
You need to enable the [verification logs](#verification-logs) switch for this feature to work.
:::
