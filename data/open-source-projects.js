export type OpenSourceProject = {
  repo: string,
  name: string,
  description: string,
  stars: number,
  background?: string,
  featured?: boolean,
  owner?: boolean
};

const projects: Array<OpenSourceProject> = [
  {
    repo: "withspectrum/spectrum",
    name: "Spectrum",
    description:
      "The community platform for the future. Grow safe, successful online communities that are built to last.",
    stars: 10725,
    background: "linear-gradient(to top right, #7213FB, #4F16EE)",
    featured: true
  },
  {
    repo: "styled-components/styled-components",
    name: "styled-components",
    description:
      "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress",
    stars: 38005,
    background: "linear-gradient(to top right, #DB7093, #DAA357)",
    featured: true
  },
  {
    repo: "react-boilerplate/react-boilerplate",
    name: "react-boilerplate",
    description:
      "A foundation for React apps with a focus on scalability, developer experience and best practices.",
    stars: 28909,
    background: "linear-gradient(to top right, #6D6E72, #9EA0A6)",
    featured: true
  },

  {
    repo: "gatsbyjs/gatsby",
    stars: 53975,
    description:
      "A framework based on React that helps developers build blazing fast websites and apps",
    owner: false,
    background: "linear-gradient(to top right, #663399, #0e8de6)"
  },
  {
    repo: "styled-components/polished",
    name: "Polished",
    description:
      'A lightweight toolset for writing styles in JavaScript, the "Lodash of CSS-in-JS"',
    stars: 7407,
    // background: "linear-gradient(to top right, #3a9b6d, #65daa2)",
    featured: true
  },
  {
    repo: "styled-components/awesome-styled-components",
    name: "awesome-styled-components",
    description: "A curated list of awesome styled-components resources",
    stars: 3120,
    featured: true
  },
  {
    repo: "mxstbr/sharingbuttons.io",
    name: "sharingbuttons.io",
    description:
      "Quickly generate social media sharing buttons that don't track your users.",
    stars: 2472,
    featured: true
  },
  {
    repo: "mxstbr/login-flow",
    name: "Login Flow",
    stars: 1620,
    description:
      "An example React and Redux implementation of a login/register flow."
  },
  {
    repo: "mxstbr/micro-github",
    stars: 729,
    description:
      "A tiny microservice to easily add authentication with GitHub to your application."
  },
  {
    name: "PostCSS.parts",
    stars: 43,
    description: "A searchable catalog of of PostCSS plugins."
  },
  {
    repo: "mxstbr/dotfiles",
    stars: 17,
    description: "My dotfiles"
  },
  {
    repo: "mxstbr/create-vcard",
    stars: 11,
    description: "Create vCard strings from key-value objects."
  },
  {
    repo: "mxstbr/teapot",
    stars: 5,
    description: 'A teapot server written in Go. "418 I\'m a teapot"'
  },
  {
    repo: "mxstbr/cyclejs-counter",
    stars: 2,
    description: "A counter app written with Cycle.JS and TypeScript."
  },
  {
    repo: "withspectrum/micro-open-graph",
    stars: 375,
    description:
      "A tiny Node.js microservice to scrape open graph data with joy."
  },
  {
    repo: "withspectrum/react-app-rewire-styled-components",
    stars: 157,
    description:
      "Add the styled-components Babel plugin to your create-react-app app via react-app-rewired."
  },
  {
    repo: "withspectrum/callback-to-async-iterator",
    stars: 84,
    description: "Turn any callback-based listener into an async iterator."
  },
  {
    repo: "withspectrum/graphql-log",
    stars: 45,
    description:
      "Add logging to your GraphQL resolvers so you know what's going on in your app."
  },
  {
    repo: "withspectrum/redis-tag-cache",
    stars: 31,
    description: "Cache and invalidate records in Redis with tags"
  },
  {
    repo: "withspectrum/danger-plugin-no-console",
    stars: 30,
    description:
      "DangerJS plugin to prevent merging any code that contains console log statements"
  },
  {
    repo: "withspectrum/draft-js-prism-plugin",
    stars: 23,
    description: "Add syntax highlighting support to your DraftJS editor"
  },
  {
    repo: "withspectrum/draft-js-code-editor-plugin",
    stars: 21,
    description:
      "Add IDE-like behaviours to code blocks in your DraftJS editors"
  },
  {
    repo: "withspectrum/danger-plugin-flow",
    stars: 20,
    description: "Ensure all JS files that get touched in a PR are flow typed"
  },
  {
    repo: "withspectrum/npm-pkg",
    stars: 19,
    description: "Create your npm package with ESNext, Flowtype and prettier."
  },
  {
    repo: "withspectrum/danger-plugin-labels",
    stars: 16,
    description: "Let any contributor add labels to their PRs and issues"
  },
  {
    repo: "withspectrum/micro-code-analyser",
    stars: 13,
    description:
      "A tiny Node.js microservice to detect the language of a code snippet"
  },
  {
    repo: "withspectrum/jscodeshift-graphql-files",
    stars: 11,
    description:
      "Transform .js files with GraphQL template literals into .graphql files"
  },
  {
    repo: "withspectrum/rethinkdb-inspector",
    stars: 10,
    description:
      "️Inspect your RethinkDB queries to find out how fast they are."
  },
  {
    repo: "withspectrum/micro-redirect",
    stars: 10,
    description:
      "A tiny Node.js microservice to redirect users to a different location."
  },
  {
    repo: "withspectrum/markdown-linkify",
    stars: 7,
    description:
      "Turn plain URLs in text into Markdown links. Works in the browser and on the server."
  },
  {
    repo: "styled-components/babel-plugin-styled-components",
    stars: 1032,
    description:
      "Improve the debugging experience and add server-side rendering support to styled-components"
  },
  {
    repo: "styled-components/stylelint-processor-styled-components",
    stars: 655,
    description: "Lint your styled components with stylelint!"
  },
  {
    repo: "styled-components/styled-components-website",
    stars: 534,
    description: "The styled-components website, styled-components.com"
  },
  {
    repo: "styled-components/color-schemer",
    stars: 31,
    description:
      "A demo app for polished, get an entire color scheme from a single color."
  },
  {
    repo: "styled-components/stylelint-config-styled-components",
    stars: 27,
    description:
      "The shareable stylelint config for stylelint-processor-styled-components"
  },
  {
    repo: "styled-components/styled-components-codemods",
    stars: 21,
    description:
      "Automatic codemods to upgrade your styled-components code to newer versions."
  },
  {
    repo: "keystonejs/keystone-classic",
    name: "KeystoneJS",
    stars: 14803,
    description: "The original Node.js CMS and web application framework",
    owner: false
  },
  {
    repo: "carteb/carte-blanche",
    name: "Carte Blanche",
    stars: 1519,
    description:
      "An isolated development space with integrated fuzz testing for your React components."
  },
  {
    repo: "draft-js-plugins/draft-js-plugins",
    name: "DraftJS Plugins",
    stars: 4018,
    description: "High quality plugins with great UX on top of DraftJS."
  },
  {
    repo: "postcss/postcss.org",
    stars: 73,
    description: "The PostCSS website."
  },
  {
    repo: "mxstbr/mxstbr.com",
    stars: 369,
    description: "This very website's source code!"
  },
  {
    repo: "mxstbr/passport-magic-login",
    stars: 574,
    description: "Passwordless authentication with magic links for Passport"
  },
  {
    repo: "mxstbr/fifteen-kilos",
    stars: 82,
    description: "Fifteen kilos"
  },
  {
    repo: "mxstbr/awesome-austria",
    stars: 74,
    description:
      "A curated list of things that show the awesome side of Austria"
  },
  {
    repo: "mxstbr/pgp.asc",
    stars: 52,
    description: "An initiative to decentralize public PGP keys"
  },
  {
    repo: "micro-analytics/micro-analytics-cli",
    stars: 746,
    description:
      "Public analytics as a Node.js microservice. No sysadmin experience required!"
  },
  {
    repo: "system-ui/theme-ui",
    stars: 4803,
    description:
      "Build consistent, themeable React apps based on constraint-based design principles",
    owner: false
  },
  {
    repo: "nice-boys/product-boilerplate",
    stars: 689,
    description: "Quickly ship your apps with the power of code generation."
  },
  {
    repo: "nice-boys/components",
    stars: 142,
    description: "@brianlovin and @mxstbr's component library"
  }
].map(p => {
  if (p.name) return p;

  return {
    ...p,
    name: p.repo.split("/")[1]
  };
});

export default projects;
