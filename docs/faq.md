# FAQ

Frequently asked questions regarding Invite Tracker.

## What is the default prefix for Invite Tracker?

Invite Tracker's prefix is `/`.

Due to Discord changing the prefixes, the forward slash will be the prefix used. This cannot be changed due to Discord's newer system.

## Why is Invite Tracker not responding to my commands?

Firstly, make sure the bot is not offline and that there are no current outages by checking Invite Tracker's support server's [outage channel](https://discord.gg/8RwBGuf).

If there are no obvious outages, please mention the bot to check if Invite Tracker has enough permissions to view the channel. (You can not add any text other than the actual mention for this to work)

Lastly, if Invite Tracker is not responding to a mention, please make sure Invite Tracker has the right permissions. All of Invite Tracker's required permissions are listed [here](#what-are-the-required-permissions-for-invite-tracker).

## How do I set up invite roles?

This feature has been disabled due to it being against Discord's Developer Terms of Service. Having any features that include rewarding invites just enables server advertisement in servers and direct messages. This is something Discord views as unsolicited advertisement, which is exactly what breaks the Discord Developer Policy. 

You can view this policy [here](https://discord.com/safety/platform-manipulation-policy-explainer)

::: info
Invite requirements for giveaways is also disabled due to being against Discord's Developer Terms of Service for the same reason as invite roles.
:::

## How do I setup Invite Tracker?

<iframe width="560" height="315" src="https://www.youtube.com/embed/iUs6rr28tiY" frameborder="0" allowfullscreen></iframe>

A tutorial video on how to SETUP the Invite Tracker bot!

## How do giveaways work?

<iframe width="560" height="315" src="https://www.youtube.com/embed/JSxU-0oPmaE" frameborder="0" allowfullscreen></iframe>

A tutorial video on how giveaways work and how to set them up.

## How do giveaway "extra entries" work?

On free servers, there is an option to vote for the bot to gain **1 extra entry** for a giveaway.

It is important to note that this extra vote is not reflected in the "Participants" count. However, the bot will check if you have voted when the giveaway ends, so make sure to keep voting [here!](https://top.gg/bot/720351927581278219/vote)

::: info
Giveaways on Premium servers do not show the vote button, and no extra vote entry is applied to them.
:::

## How do I manage my premium subscription?

Users can manage their dashboard subscriptions from the new My Account page. Click [here](/dashboard/my-account) to see how it works.

## What is the required permission to access the dashboard?

In order for your administrators or moderators to access Invite Tracker's dashboard they will need the *Administrator* permission enabled on their role.

## What are the required permissions for Invite Tracker?

All of Invite Tracker's required permissions are required for a reason, so please be careful about what permissions you remove. If you do start to remove permissions, you have a high likelihood of rendering some of Invite Tracker's features useless.

Keep in mind that just giving the permissions to its role sometimes may not work as a specific channel has overridden its permissions. So, to fix that you either need to add the Invite Tracker role in the specific channel and regrant the permissions needed or add *Administrator* to the Invite Tracker role.

If you want to give Invite Tracker all permissions without any more hassle, you may grant *Administrator* to the Invite Tracker role. By default when adding the bot, *Administrator* is already applied.

To quickly check whether something is missing, run `/check-permissions` in the channel you are having trouble with, or `/setup` for an overall health check of the bot in your server.

| Permission | Usage |
| --- | --- |
| `Administrator` | Grants all permissions |
| `Manage Server` | Needed to view the server's active invites so it can track them |
| `Manage Roles` | Needed to manage tickets and grant roles such as reward roles, auto roles, winner roles, and verification roles |
| `Manage Channels` | Needed to create and manage ticket channels and to see invites created in a channel for tracking invites |
| `Kick Members` | Needed to kick members for verification action |
| `Ban Members` | Needed to ban members for verification action or for mass bans |
| `Moderate Members` | Needed to time out members, such as for honeypot actions |
| `View Channel` | Needed to view messages so it can either respond to or track them |
| `Send Messages` | Needed to respond to commands, edit messages, and send join/leave/test messages |
| `Pin Messages` | Needed to pin leaderboards and pin ticket messages |
| `Embed Links` | Needed to send embeds such as leaderboards, embedded join/leave messages, and giveaways |
| `Attach Files` | Needed to send statistical graphs and exports of the leaderboard |
| `Read Message History` | Needed to view older messages to edit them (such as pinned leaderboards and giveaways) and to save ticket transcripts |
| `Add Reactions` | Needed to react to join/leave messages |
| `Use External Emojis` | Needed to use server emojis in your join/leave messages |

## Why are invites not counting?

### Verification system in place

If you have a verification system in place, users being invited need to verify for your invites to be counted. You can check your plugin by going to the Dashboard -> Verification -> Verification Level to see if it is enabled. If you are using the plugin, make sure the level is set to *Disabled*.

### User is blacklisted from invites being counted

It may be that this user is blacklisted, meaning their invites are not being counted. You can check this by going to the Dashboard -> Invite Tracking -> User Invites Blacklist.

### The bot is missing some permissions, check that it has:

- Permission to **Manage Server**.
- Permission to **View Channel** and **Manage Channel** in every channel a member can create an invite for.

Alternatively you can provide the bot with **Administrator** permissions by adding it to the Invite Tracker role. This will override any conflicting channel permissions you may have.

### The user has not created this link

They may be using another user's link. You can check if you own a link by running `/findlink`. Vanity URLs also do not count as invites. 

### The link being used did not register

If you have checked all of the above, creating a new invite link should register and count.

### I've checked all of these, and it still doesn't work!

Please make sure you have double checked all of these possible reasons. If you have, we are always happy to assist you further with your inquiry in our [support discord](https://discord.gg/8RwBGuf).

## Why are some roles missing from the role selector?

If there are some roles missing in the role selector on your dashboard, it means Invite Tracker's role is not set high enough in the role hierarchy.

To change this, head to your Server Settings -> Roles and drag the Invite Tracker role up above the roles you want to be able to select.

## Why is Invite Tracker inviting me to servers?

Did you receive DMs from Invite Tracker or were you added to servers without your knowing?

Invite Tracker **does not** add you to servers **nor** does it randomly DM you messages.

You are receiving a "Join DM" because the server your account joined setup the bot to send the message.

If you would like to delete the messages you can follow the instructions below 
- **PC:**  Right click the Message -> Hover over **Apps** and click **Delete Message**.
- **Mobile:** Tap and hold the message -> Tap **Apps** and tap **Delete Message**.

If you did not join the server, you need to secure your account. Go to your **User Settings** -> **Authorized Apps**. You will want to look for any applications that contain "Join servers for you" and **Deauthorize** them.

Please read through the following Discord article if your account was [hacked or compromised](https://support.discord.com/hc/en-us/articles/24160905919511-My-Discord-Account-was-Hacked-or-Compromised). It also contains tips on how to secure your account.

## Why is Invite Tracker asking me to login when verifying?
Malicious actors are running bots and websites that are impersonating Invite Tracker to steal Discord accounts. 

Please make sure you are only trusting the official **Invite Tracker** bot.
- **Bot ID:** `720351927581278219`  
- **Bot Tag:** `Invite Tracker#0478`

Invite Tracker will **never** ask you to do the following to verify into a server. 
- Scan a QR code
- Drag anything into a bookmark
- Sign in with your Crypto/NFT Wallet
- Ask you to download a file
- Or any other unofficial verification method

Only verify through the **official** Invite Tracker website: <https://invite-tracker.com>

Do **not** trust any other websites or bots claiming to be Invite Tracker. If you're on a different website or being asked to authorize by a different bot, do not log in and do not authorize anything.

If you encounter a fake bot, report it:
- Directly to Discord: https://dis.gd/report
- In our support channel with the **User ID** and **Server Link**
## Why are some channels missing from the channel selector?

Invite Tracker only lists channels it can view. If a channel is missing from a channel selector on your dashboard, grant the Invite Tracker role the **View Channel** permission in that channel and it will appear again.

If a channel you previously selected shows as *Hidden channel* with a warning, Invite Tracker can no longer view that channel. Your selection is kept, but the feature will not work until you restore the **View Channel** permission or pick another channel.
