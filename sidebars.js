/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  learnSidebar: [
    {
      type: 'category',
      label: 'About Sui',
      items: [
        'learn/about-sui/sui-glossary',
        'learn/about-sui/why-move',
        'learn/about-sui/how-sui-move-differs',
        'learn/about-sui/sui-security',
      ],
    },
    {
      type: 'category',
      label: 'How Sui Works',
      items: [
        'learn/how-sui-works/sui-compared',
        'learn/how-sui-works/objects',
        'learn/how-sui-works/object-and-package-versioning',
        'learn/how-sui-works/transactions',
        'learn/how-sui-works/sponsored-transactions',
        'learn/how-sui-works/single-writer-apps',
        'learn/how-sui-works/validators',
        'learn/how-sui-works/consensus-engine',
      ],
    },
    {
      type: 'category',
      label: 'Sui Move',
      items: [
        'learn/sui-move/about',
        'learn/sui-move/the-move-book',
      ],
    },
    {
      type: 'category',
      label: 'Economics',
      items: [
        'learn/economics/sui-token',
        'learn/economics/gas-pricing',
        'learn/economics/gas-in-sui',
        'learn/economics/sui-storage-fund',
        'learn/economics/proof-of-stake',
        'learn/economics/tokenomics-whitepaper',
      ],
    },
    {
      type: 'category',
      label: 'Cryptography',
      items: [
        'learn/cryptography/intent-signing',
        'learn/cryptography/offline-signing',
        'learn/cryptography/multisig',
        'learn/cryptography/keys-and-addresses',
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      items: [
        'learn/nodes/full-node',
        'learn/nodes/validator',
        'learn/nodes/database-snapshots',
        'learn/nodes/logging',
      ],
    },
  ],
  buildSidebar: [
    {
      type: 'category',
      label: 'Set-up',
      items: [
        'build/setup/install-sui',
        'build/setup/connect-to-a-network',
        'build/setup/client-cli',
        'build/setup/faucet',
        'build/setup/local-network',
        'build/setup/gas-changes',
        'build/setup/object-display-standard',
      ],
    },
    {
      type: 'category',
      label: 'Create Smart Contracts with Move',
      items: [
        'build/create-smart-contracts/move-toml',
        'build/create-smart-contracts/move-lock',
        'build/create-smart-contracts/time',
        'build/create-smart-contracts/write-move-packages',
        'build/create-smart-contracts/build-and-test',
        'build/create-smart-contracts/debug-and-publish',
        'build/create-smart-contracts/upgrade-packages',
        'build/create-smart-contracts/custom-upgrade-policies',
        'build/create-smart-contracts/sui-move-library',
      ],
    },
    {
      type: 'category',
      label: 'Program With Objects',
      items: [
        'build/program-with-objects/object-basics',
        'build/program-with-objects/using-objects',
        'build/program-with-objects/immutable-objects',
        'build/program-with-objects/write-move-packages',
        'build/program-with-objects/build-and-test',
        'build/program-with-objects/debug-and-publish',
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
        'reference/sui-json-format',
        'reference/sui-framework-reference',
        'reference/exchange-integration-guide',
        'reference/tutorials',
        'reference/examples',
        'reference/sui-json-rpc',
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
      ],
    },
  ],
};

module.exports = sidebars;
