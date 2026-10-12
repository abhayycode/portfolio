export const blogId = {
  broadcastChannel: 'broadcastChannel',
  // testing: 'testing',
  // viewTransitions: 'viewTransitions',
  // scrollDriven: 'scrollDriven',
  // containerQueries: 'containerQueries',
  // speculativeLoading: 'speculativeLoading',
};

export const blogs: Record<string, { id: string; title: string }> = {
  [blogId.broadcastChannel]: {
    id: blogId.broadcastChannel,
    title:
      'BroadCastChannel: Way to communicate between browsing context of same origin',
  },
  // [blogId.testing]: {
  //   id: blogId.testing,
  //   title: 'Testing: this is just for testing man blur and all.',
  // },
  // [blogId.viewTransitions]: {
  //   id: blogId.viewTransitions,
  //   title: 'View Transitions: animating between pages without a framework',
  // },
  // [blogId.scrollDriven]: {
  //   id: blogId.scrollDriven,
  //   title: 'Scroll-driven animations that stay on the compositor',
  // },
  // [blogId.containerQueries]: {
  //   id: blogId.containerQueries,
  //   title: 'Container queries for components that do not know their page',
  // },
  // [blogId.speculativeLoading]: {
  //   id: blogId.speculativeLoading,
  //   title: 'Speculation rules: prefetch the next page before the click',
  // },
};
