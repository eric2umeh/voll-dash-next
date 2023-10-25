export const sidebarLinks = [
  {
    imgURL: "/assets/dashboard.svg",
    route: "/",
    label: "Dashboard",
  },
  {
    imgURL: "/assets/users.svg",
    route: "/user",
    label: "User Management",
    dropdown: [
      {
        title: 'Users Onboarded',
        url: '/users-onboarded',
      },
      {
        title: 'Agents',
        url: '/agents',
      },
    ],
  },
  {
    imgURL: "/assets/transaction.svg",
    route: "/transactions",
    label: "Transactions",
    dropdown: [
      {
        title: 'Services',
        url: '/services',
      },
      {
        title: 'Wallet',
        url: '/wallet',
      },
    ],
  },
  {
    imgURL: "/assets/message.svg",
    route: "/messages",
    label: "Messages",
  },
  {
    imgURL: "/assets/wallet.svg",
    route: "/wallet",
    label: "Wallet Notification",
  },
  {
    imgURL: "/assets/issue.svg",
    route: "/issue",
    label: "Issue Logs",
  },
  {
    imgURL: "/assets/admin.svg",
    route: "/admin",
    label: "Admin Management",
    dropdown: [
      {
        title: 'Services',
        url: '/admin-services',
      },
      {
        title: 'Refunds',
        url: '/refunds',
      },
      {
        title: 'App Updates',
        url: '/app-updates',
      },
    ],
  },
];

