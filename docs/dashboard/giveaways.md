# Giveaways

The giveaway plugin lets you create and administrate giveaways in a very intuitive way which gives you a full overview of everything.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JSxU-0oPmaE" frameborder="0" allowfullscreen></iframe>

A tutorial video on how giveaways work and how to set them up.

::: warning
Free servers can only have a maximum of 5 running giveaways at the same time.

Premium servers can have up to 50 running giveaways at the same time.
:::

## Creating a Giveaway

To start creating a giveaway, simply click the big blue button that says **New**. This will make another menu pop up.

![New Giveaway](/assets/giveaways/new-giveaway.png)

At first glance, it might look like a lot of very complicated stuff but do not worry. We will go through everything.

### Base Template

You can select a giveaway template to auto fill in the prize name, number of winners, required roles, messages required, bonus entry roles and roles granted to winners. When using a template however you must input the **End Date and Time** and also select the giveaway channel before creating the giveaway.

![Base Template](/assets/giveaways/base-template.png)

### Prize Name, Number of Winners, and Channel

- **Prize Name** is what you want to call your giveaway. We recommend you include the prize of the giveaway in the name.
- **Number of Winners** is where you insert how many winners you want for your giveaway. Invite Tracker will select the specified amount of winners when the giveaway ends.
- **Channel** is where you configure which channel you want the giveaway to be sent in. Simply click the box and choose the channel.

![Prize, Winners, and Channel](/assets/giveaways/prize-winners-channel.png)

::: warning
The maximum length of your prize name is only 190 characters.

The maximum amount of winners you can have without premium is 20 and with premium is 100.
:::

### End Date

The first box under **End Date** is where you configure what day you want the giveaway to end. The format, as shown in the box, is `yyyy/mm/dd`. You can also click the little calendar icon on the right side of the box to display an interactive calendar which you can use to choose the day you want the giveaway to end.

The second box is where you configure at what time you want the giveaway to end. It uses a 24-hour clock format. You can also click the little clock icon on the right side of the box to display an interactive time selector which you can use to choose the time you want the giveaway to end.

![End Date](/assets/giveaways/end-date.png)

::: info
The giveaway ends at the configured time in your time zone.
:::

::: warning
The maximum end date without premium is 1 month and with premium is 3 months.
:::

### Required Roles

Required Roles allows you to choose between "All roles required" versus "Only one role required" meaning the user needs to have all the roles selected or just one of the roles.

![Required Roles](/assets/giveaways/required-roles.png)

::: warning
The maximum amount of required roles you can have is 10.
:::

### Required Messages

Required messages are pretty self-explanatory. In order to join the giveaway, you need to have the required number of messages sent in the server.

![Required Messages](/assets/giveaways/required-messages.png)

::: warning
Only numbers can go here to set the number of messages you want to require to be able to enter the giveaway. If the number of messages required is not met, it will not allow you to enter the giveaway.
:::

### Bonus Entry Roles and Roles Granted To Winners

**Bonus Entry Roles** are all awarded a specified amount of bonus entries to the giveaway. Users with these roles have an increased chance of winning the giveaway.

<img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> **Roles Granted To Winners** are roles that are granted to the winner(s) of the giveaway.

![Bonus Entry Roles and Winner Roles](/assets/giveaways/bonus-winners.png)

::: warning
Remember to add the number of bonus entries given to each role when assigning bonus entry roles.
:::

::: warning
The maximum amount of bonus entry roles and roles granted to winners you can have is 10 and with premium you may have up to 30 bonus entry roles.
:::

### An example of a Giveaway

Below is an example of what the giveaway creation process will look like. In this giveaway, both "Verified" and "Role 1" roles are required to enter. The number of messages required to enter the giveaway is 50. The "Server Booster" role is set to have 5 bonus entries if the user has that role and the "Reward A" role will be awarded to the winner of the giveaway (Winner roles are a premium feature).

![Sample Giveaway](/assets/giveaways/sample-giveaway.png)

Now we just hit the blue button at the bottom of the page named **Create giveaway** and the giveaway should be made in the configured channel. If not, check [Invite Tracker's permissions](/faq#what-are-the-required-permissions-for-invite-tracker) first.

Now that we have an active giveaway, we can go back to the dashboard and see that it has been added to the list of the server's active giveaways.

![Running Giveaway](/assets/giveaways/running-giveaway.png)

## Scheduling a Giveaway

To schedule a giveaway, click the **Schedule** button and fill in the [giveaway details](#creating-a-giveaway) from above.

![Schedule Button](/assets/giveaways/schedule-button.png)

Unlike creating a normal giveaway on the dashboard, when you schedule a giveaway, you will set a starting date and a duration.

::: warning
Free servers can only have 1 giveaway scheduled at a time.

Premium servers can schedule an unlimited amount of giveaways.
:::

### Repeating a Giveaway

If you would like to make your scheduled giveaway repeat, turn on the **Repeating** switch and you can select how often it should run.

![Repeating Giveaway](/assets/giveaways/repeating.png)

::: info
The scheduled giveaway repeats at the configured time in your time zone.
:::

## Editing a Giveaway

To edit a giveaway, just click the **Blue Pencil** button. This will show almost the exact same menu as the giveaway creation menu.

![Edit Giveaway](/assets/giveaways/edit-giveaway.png)

From here you can edit anything you like and after you save, Invite Tracker will make the necessary changes to the giveaway in the server.

For our giveaway, we will increase the required number of messages up to 100 from 50.

![Edit Messages Required](/assets/giveaways/edit-messages-required.png)

Now you can just go ahead and click **Edit giveaway**. Now if you check your server, you will be able to see that the giveaway has changed.

## Rerolling a Giveaway

To reroll an ended giveaway, just click the **Blue Present** button. This will open a menu to allow you to select the number of winners to reroll.

![Reroll Giveaway](/assets/giveaways/reroll.png)

## Giveaway Roles

- **Giveaway Blacklisted Roles** are roles that disallow any user with any of these roles from joining any giveaways.
- **Giveaway Bypass Roles** are roles that allow any user with any of these roles to join any giveaway even if they do not meet the requirements.

![Giveaway Roles](/assets/giveaways/general-settings.png)

::: warning
Free servers can only have a maximum of 5 giveaway blacklisted roles and 5 giveaway bypass roles.

Premium servers can have an unlimited amount of giveaway blacklisted roles and giveaway bypass roles.
:::

## Giveaway Templates

Giveaway Templates can be created to quickly create giveaways without having to fill in the details.

To create a Template, click the **Create** button under **Templates Management**

![Templates Create](/assets/giveaways/templates-create.png)

When creating a template, be sure that you fill in the the necessary details. When you are finished, click **Create**.

![Template Form](/assets/giveaways/template-form.png)

::: warning
Free servers can only create 1 giveaway template.

Premium servers can create an unlimited amount of giveaway templates.
:::

![Save as Template](/assets/giveaways/save-as-template.png)

::: tip
You can also save a new template by creating a new giveaway then clicking **Save as Template** at the bottom.
:::
