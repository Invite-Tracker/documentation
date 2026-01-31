# Join, Join DM, and Leave Messages

These plugins let you create highly customizable join, join DM and leave messages.

## Useful Information

<iframe width="560" height="315" src="https://www.youtube.com/embed/iUs6rr28tiY" frameborder="0" allowfullscreen></iframe>

A tutorial video on how to SETUP the Invite Tracker bot!

### Main Message Types

Join, join DM, and leave messages are very similar. The only differences are the triggers and the different variables you can use to configure them.

For our examples, we will be configuring a join message.

::: info
You can find an explanation of all the differences between the main message types [here](./types#main-message-types).
:::

### Variables

Usually, you want the message to display information that changes its value depending on who just joined or who invited the person that just joined, for example. The way to add this type of varying information is by using variables.

::: info
You can find the complete list of variables [here](./variables).
:::

## Configuration

### Enabled

First, you want to enable the plugin. Click the toggle to do so.

![Enable Join Messages](/assets/messages/enable.png)

### Channel

Next, select the channel you want your message to be sent in.

![Select Channel](/assets/messages/channel.png)

::: warning
Configuring a channel does not apply to join DM messages.
:::

### Emoji

You can also set Invite Tracker to react with an emoji reaction to every join/leave message by adding the emoji directly or using the emoji code.

![Emoji Reaction](/assets/messages/emoji.png)

To use a custom emoji, please send the following message in any Discord server: `\:emoji name:`, it will replace the message with something that looks like this: `<:invitetracker:744565894289555456>`. If you take that message and put it into the dashboard, Invite Tracker will display the emoji when sending a message.

### Configuring a Sub-Message Type

After you have chosen a channel, continue down to the **Messages** section of the page. You should see three boxes: one blue button, one small black box, and one large black text box. The first one is set to **Normal** by default, but you may change this if you are looking to edit another message type.

There is automatically a join/leave message set by default that can be used as shown below.

![Message Configuration](/assets/messages/config.png)

::: info
A list explaining all the different sub-message types and their use can be found [here](./types#sub-message-types).
:::

## The Message

### Creating the Message

When you have chosen the message type you want to configure, then you may pay attention to the large, black text box. This is where you write the message you want Invite Tracker to display when someone joins the server. The message may be anything you like.

::: info
If you'd like to customize your own message be sure to refer to the variables that can be found [here](./types#main-message-types).
:::

### Testing the Message

After you have created your message, simply click the blue box named **Test message**. This will make Invite Tracker send a copy of the current message to either the configured join/leave channel or as a direct message to you, depending on what message type you have chosen.

![Test Message Button](/assets/messages/test-button.png)

The message will appear as you configured it. This message is an example of the default message set, you can go as crazy as you want with your join message. Your mind is your only limit.

![Test Message in Discord](/assets/messages/test-discord.png)

::: danger
If your test message does not appear, you need to ensure the bot has the [correct permissions](/faq#what-are-the-required-permissions-for-invite-tracker).
:::

::: warning
Remember to turn on join messages after finishing configuring your message by clicking the upper-most switch.
:::

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Embed

Embeds are a cool way to make *join* and *leave messages*. Embeds bring a lot more customization to the table. You can configure anything from a 5-part story about a potato falling in love with a green rock, or you could configure the message to display all the variables, their function, and where to use them. Trust me, I have done it.

To enable and start configuring an embed, please click the switch right above the textbox at the right side of your screen labeled **Embed**.

![Embed Toggle](/assets/messages/embed-toggle.png)

After it has been enabled, you are prompted with a lot of text boxes. It might look like a lot, maybe even too much, but do not worry as everything will be explained.

![Embed Form](/assets/messages/embed-form.png)

An overview of where everything is placed in the embed can be found below.

![Embed Overview](/assets/messages/embed-overview.png)

Now that you have a general idea of how the embed looks and what goes where we can get to the explanation of every textbox.

#### Author

- **Author Icon URL** is where you can put either a picture link or an avatar variable. It will display the image as a small profile picture in the top left corner of the embed.
- **Author Name** is just a regular textbox where you can add whatever you want. Take to mind that bold, italic, strikethrough or code fields do not work here.
- **Author Name URL** is where you can put either a picture link or an avatar variable. It will create a hyperlink on the author name content.

#### Title

- **Title** is just a regular textbox where you can add whatever you want.
- **Title URL** is where you can put either a picture link or an avatar variable. It will create a hyperlink on the title content.

#### Content

- **Description** is just a regular textbox where you can add whatever you want.
- **Add Field** adds more title and description textboxes.

#### Pictures

- **Image URL** is where you can put either a picture link or an avatar variable. It will display the image as a large picture at the bottom of the embed.
- **Thumbnail URL** is where you can put either a picture link or an avatar variable. It will display the image as a medium-sized picture at the top right of the embed.

#### Footer

- **Footer Text** is just a regular textbox where you can add whatever you want. Take to mind that bold, italic, strikethrough or code fields do not work here.
- **Footer Icon URL** is where you can put either a picture link or an avatar variable. It will display the image as a small profile picture in the top left corner of the embed.

#### Extra

- **JSON Editor** allows you to copy/paste/edit the JSON of the embed.
- **Show current date and time** will show at what time the message was sent.
- **Random Color** will be a random embed color when the message is displayed.
- **Color Picker** will change the color of the embed line. Click the color bar to adjust.

Now, if we take everything we now know about embeds, we can make a simple embed message that looks like this:

![Embed Test](/assets/messages/embed-test.png)

Now if we click the **Test message** button, we get this message:

![Embed in Discord](/assets/messages/embed-discord.png)

::: info
There is really no right or wrong way to use all the embed boxes, just play around with it until you find something you like.
:::

::: warning
Pay attention to the small numbers under a few of the text boxes and buttons. They are the limits on how much can be fitted into that specific area.
:::

::: warning
You cannot use embeds for join DM messages.
:::
