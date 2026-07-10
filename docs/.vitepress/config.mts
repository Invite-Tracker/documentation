import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

export default defineConfig({
  title: "Invite Tracker",
  description: "Documentation for the Invite Tracker Discord bot.",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dashboard', link: '/dashboard/' },
      { text: 'Commands', link: '/commands/general' },
      { text: 'FAQ', link: '/faq' },
      {
        text: 'Links',
        items: [
          { text: 'Add Invite Tracker', link: 'https://invite.invite-tracker.com/' },
          { text: 'Dashboard', link: 'https://invite-tracker.com/' },
          { text: 'Bot Status', link: 'https://invite-tracker.com/status' },
          { text: 'Premium', link: 'https://invite-tracker.com/premium' },
          { text: 'Vote', link: 'https://top.gg/bot/720351927581278219/vote' },
          { text: 'Support Server', link: 'https://discord.gg/8RwBGuf' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Home', link: '/' },
            { text: 'Information', link: '/information' },
            { text: 'FAQ', link: '/faq' },
            { text: 'Bot Profile', link: '/dashboard/bot-profile' },
            { text: 'Custom Bot', link: '/dashboard/custom-bot' },
            { text: 'My Account', link: '/dashboard/my-account' }
          ]
        },
        {
          text: 'Dashboard',
          items: [
            { text: 'Overview', link: '/dashboard/' },
            { text: 'Administration', link: '/dashboard/administration' },
            { text: 'Verification', link: '/dashboard/verification' },
            { text: 'Raid Protection', link: '/dashboard/raid-protection' },
            { text: 'Invite Tracking', link: '/dashboard/invite-tracking' },
            { text: 'Analytics', link: '/dashboard/analytics' },
            { text: 'Server Reports', link: '/dashboard/server-reports' },
            { text: 'Leaderboard', link: '/dashboard/leaderboard' },
            { text: 'Message Counting', link: '/dashboard/message-counting' },
            { text: 'Pin Leaderboard', link: '/dashboard/pin-leaderboard' },
            { text: 'Pin Statistics', link: '/dashboard/pin-statistics' },
            { text: 'Giveaways', link: '/dashboard/giveaways' },
            {
              text: 'Tickets',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/dashboard/tickets/index' },
                { text: 'Panel', link: '/dashboard/tickets/panels' },
                { text: 'Templates', link: '/dashboard/tickets/templates' },
                { text: 'History', link: '/dashboard/tickets/history' },
                { text: 'Analytics', link: '/dashboard/tickets/analytics' },
              ]
            },
            {
              text: 'Join/Leave Messages',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/dashboard/messages/' },
                { text: 'Variables', link: '/dashboard/messages/variables' },
                { text: 'Types', link: '/dashboard/messages/types' },
                { text: 'Welcome Banner', link: '/dashboard/welcome-banner' }
              ]
            },
          ]
        },
        {
          text: 'Commands',
          items: [
            { text: 'General', link: '/commands/general' },
            { text: 'Administration', link: '/commands/administration' },
            { text: 'Management', link: '/commands/management' },
            { text: 'Giveaway', link: '/commands/giveaway' },
            { text: 'Verification', link: '/commands/verification' },
            { text: 'Premium', link: '/commands/premium' },
            { text: 'Tickets', link: '/commands/tickets' }
          ]
        },
        {
          text: 'Premium & Status',
          items: [
            { text: 'Premium', link: '/premium' },
            { text: 'Status', link: '/status' }
          ]
        },
        {
          text: 'FAQ Directory',
          items: [
            { text: 'Account Security', link: '/faq-directory/account-security' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/8RwBGuf' }
    ],

    footer: {
      message: 'Invite Tracker Documentation',
      copyright: 'Copyright © Invite Tracker'
    },

    search: {
      provider: 'local'
    }
  },

  vite: {
    plugins: [llmstxt()]
  }
})
