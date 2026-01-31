# <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Pin Statistics

The pin statistics plugin lets you create self-updating stats which are automatically sent and pinned in the selected channel. The pinned statistics automatically update every 15 minutes.

## How It Works

When you enable pinned statistics:

1. Invite Tracker sends a statistics graph to your selected channel
2. The message is automatically pinned
3. Every 15 minutes, the bot updates the graph with the latest data
4. The graph visualizes your server's member activity over time

::: info
Statistics graphs show historical data, making them useful for tracking growth trends and identifying patterns in member activity.
:::

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Join Statistics

This feature sends an automatically updating join statistics embed to the selected channel.

![Join Statistics](/assets/pin-statistics/join-stats.png)

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Leave Statistics

This feature sends an automatically updating leave statistics embed to the selected channel.

![Leave Statistics](/assets/pin-statistics/leave-stats.png)

## <img src="/assets/premium.png" alt="Premium" style="display: inline; height: 1.2em; vertical-align: middle;" /> Combined Statistics

This feature sends an automatically updating combined statistics embed to the selected channel. The combined view shows both joins (typically in green) and leaves (typically in red) on the same graph, making it easy to see net member growth.

![Combined Statistics](/assets/pin-statistics/combined-stats.png)

## Understanding the Graphs

The statistics graphs display:

- **X-axis**: Time period (days/weeks)
- **Y-axis**: Number of members (joins or leaves)
- **Data points**: Activity at each time interval

### Reading the Combined Graph

On the combined statistics graph:
- When the join line is above the leave line, your server is growing
- When the leave line is above the join line, your server is shrinking
- The gap between the lines shows your net growth or loss

::: tip
Use the combined statistics graph to identify trends. For example, you might notice higher leave rates on certain days, which could indicate issues to address.
:::
