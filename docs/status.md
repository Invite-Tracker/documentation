# Status

The Status page lets you check out which of Invite Tracker's clusters have outages and which are fully operational.

## Finding The Status Page

The Status page can be found either by accessing the [dashboard](https://invite-tracker.com/) and clicking "Status" located at the top of the page, or you can simply just click this link:

[https://invite-tracker.com/status](https://invite-tracker.com/status)

## Using The Status Page

### Where's My Guild?

To find out which cluster your server is in, copy and paste your server's ID into the text box labeled "Guild ID". After clicking the blue button named "Calculate", the website should display which cluster and shard your server is located in.

![Find Guild](/assets/status/find-guild.png)

### Invite Tracker Status

Once you have the cluster and shard numbers, head down to the bottom part of the page. Here you will see a bunch of boxes with different numbers in them. Every box represents a cluster. Take the cluster number your server is located in and click the box with the same number. A menu should appear revealing all the shards located within that cluster. Then using the shard number that you got, locate your server's shard. From here you can check the ping of your server's shard.

![Status Clusters](/assets/status/status-clusters.png)

::: info
If a cluster is colored **green**, it means that the cluster is operational and has stable ping throughout all of the shards. Invite Tracker is fully functional.

If a cluster is colored **yellow**, it means that the cluster has a partial outage with unstable ping in some of the shards. Invite Tracker may experience lag.

If a cluster is colored **red**, it means that the cluster has a total outage with unstable ping in all of the shards. Invite Tracker is offline.
:::
