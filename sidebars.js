/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  learnSidebar: [
    {
      type: 'category',
      label: 'Sui',
      items: [
        'learn/about-sui/about-sui',
        'learn/about-sui/why-move',
        'learn/about-sui/how-sui-move-differs',
        // 'learn/about-sui/sui-security',
      ],
    },
    {
      type: 'category',
      label: 'Getting started',
      items: [
        {
          type: 'link',
          label: 'Dive into Sui fundamentals',
          href: '/sui-comparison',
        },
        {
          type: 'link',
          label: 'Connect to Sui wallet',
          href: '/faucet',
        },
        {
          type: 'link',
          label: 'Move quickstart',
          href: '/about-sui-move',
        },
        {
          type: 'link',
          label: 'Tic Tac Toe in Move',
          href: '/tutorials',
        },
        {
        type: 'link',
          label: 'Runnin a node',
          href: '/running-node',
        },
        {
          type: 'link',
          label: 'Sui Economics',
          href: '/sui-token',
        },
      ],
    },
  ],
  nodeSidebar: [
    {
      type: "doc",
      id: "node/running-node",
      label: "Run a node",
    },
    {
      type: 'category',
      label: 'setup',
      items: [
        'node/setup/install-sui',
        'node/setup/client-cli',
      ],
    },
    {
      type: 'category',
      label: 'nodes',
      items: [
        'node/nodes/full-node',
        'node/nodes/validator',
        'node/nodes/database-snapshots',
        'node/nodes/logging',
      ],
    },
  ],
  buildSidebar: [
    {
      type: 'category',
      label: 'Quickstart',
      items: [
        'build/create-smart-contracts/about',
        'build/create-smart-contracts/write-move-packages',
        'build/create-smart-contracts/build-and-test',
        'build/create-smart-contracts/debug-and-publish',
        ],
    },
    {
      type: 'category',
      label: 'Create Smart Contracts with Move',
      items: [
        'build/create-smart-contracts/move-toml',
        'build/create-smart-contracts/move-lock',
        'build/create-smart-contracts/time',
        'build/create-smart-contracts/upgrade-packages',
        'build/create-smart-contracts/custom-upgrade-policies',
        'build/create-smart-contracts/sui-move-library',
        'build/create-smart-contracts/the-move-book',      
      ],
    },
    {
      type: 'category',
      label: 'Program With Objects',
      items: [
        'build/program-with-objects/object-basics',
        'build/program-with-objects/using-objects',
        'build/program-with-objects/immutable-objects',
        'build/program-with-objects/object-wrapping',
        'build/program-with-objects/dynamic-fields',
        'build/program-with-objects/collections',
      ],
    },
    {
      type: 'category',
      label: 'Environment setup',
      items: [
//        'build/setup/install-sui',
        'build/setup/connect-to-a-network',
//        'build/setup/client-cli',
        'build/setup/faucet',
        'build/setup/local-network',
        'build/setup/gas-changes',
        'build/setup/object-display-standard',
      ],
    },
    {
      type: 'category',
      label: 'Interact With Sui',
      items: [
        'build/interact-with-sui/json-rpc-api',
        'build/interact-with-sui/rust-sdk',
        'build/interact-with-sui/ts-js-sdk',
        'build/interact-with-sui/event-query-and-subscription',
        'build/interact-with-sui/programmable-tx-blocks',
      ],
    },
  ],
  referenceSidebar: [
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/sui-security',
        'reference/sui-json-format',
        'reference/sui-framework-reference',
        'reference/exchange-integration-guide',
        'reference/tutorials',
        'reference/examples',
        'reference/sui-json-rpc',
      ],
    },
    {
      type: 'category',
      label: 'Core concepts',
      items: [
        'reference/core-concepts/sui-compared',
        'reference/core-concepts/objects',
        'reference/core-concepts/object-and-package-versioning',
        'reference/core-concepts/transactions',
        'reference/core-concepts/sponsored-transactions',
        'reference/core-concepts/single-writer-apps',
        'reference/core-concepts/validators',
        'reference/core-concepts/consensus-engine',
      ],
    },
  ],
  contributeSidebar: [
    {
      type: 'category',
      label: 'Contribute',
      items: [
        'contribute/improve-documentation',
        'contribute/contribute-to-sui-repos',
        'contribute/submit-a-sip',
        'contribute/localize-sui-docs',
        'contribute/run-fullnode',
        'contribute/run-validator',
        'contribute/code-of-conduct',
        'contribute/contribution-process',
      ],
    },
  ],
  otherSidebar: [
    {
      type: 'category',
      label: 'Economics',
      items: [
        'other/economics/sui-token',
        'other/economics/gas-pricing',
        'other/economics/gas-in-sui',
        'other/economics/sui-storage-fund',
        'other/economics/proof-of-stake',
        'other/economics/tokenomics-whitepaper',
      ],
    },
    {
      type: 'category',
      label: 'Cryptography',
      items: [
        'other/cryptography/intent-signing',
        'other/cryptography/offline-signing',
        'other/cryptography/multisig',
        'other/cryptography/keys-and-addresses',
      ],
    },
  ]
};

module.exports = sidebars;
