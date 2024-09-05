import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/node/movement-labs-node-api",
    },
    {
      type: "category",
      label: "Accounts",
      link: {
        type: "doc",
        id: "api/node/accounts",
      },
      items: [
        {
          type: "doc",
          id: "api/node/get-account",
          label: "Get account",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/get-account-resources",
          label: "Get account resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/get-account-modules",
          label: "Get account modules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/get-account-resource",
          label: "Get account resource",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/get-account-module",
          label: "Get account module",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Blocks",
      link: {
        type: "doc",
        id: "api/node/blocks",
      },
      items: [
        {
          type: "doc",
          id: "api/node/get-block-by-height",
          label: "Get blocks by height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/get-block-by-version",
          label: "Get blocks by version",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Events",
      link: {
        type: "doc",
        id: "api/node/events",
      },
      items: [
        {
          type: "doc",
          id: "api/node/get-events-by-creation-number",
          label: "Get events by creation number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/get-events-by-event-handle",
          label: "Get events by event handle",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "General",
      link: {
        type: "doc",
        id: "api/node/general",
      },
      items: [
        {
          type: "doc",
          id: "api/node/spec",
          label: "Show OpenAPI explorer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/healthy",
          label: "Check basic node health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/get-ledger-info",
          label: "Get ledger info",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tables",
      link: {
        type: "doc",
        id: "api/node/tables",
      },
      items: [
        {
          type: "doc",
          id: "api/node/get-table-item",
          label: "Get table item",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/node/get-raw-table-item",
          label: "Get raw table item",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      link: {
        type: "doc",
        id: "api/node/transactions",
      },
      items: [
        {
          type: "doc",
          id: "api/node/get-transactions",
          label: "Get transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/submit-transaction",
          label: "Submit transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/node/get-transaction-by-hash",
          label: "Get transaction by hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/wait-transaction-by-hash",
          label: "Wait for transaction by hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/get-transaction-by-version",
          label: "Get transaction by version",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/get-account-transactions",
          label: "Get account transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/node/submit-batch-transactions",
          label: "Submit batch transactions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/node/simulate-transaction",
          label: "Simulate transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/node/encode-submission",
          label: "Encode submission",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/node/estimate-gas-price",
          label: "Estimate gas price",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "View",
      link: {
        type: "doc",
        id: "api/node/view",
      },
      items: [
        {
          type: "doc",
          id: "api/node/view",
          label: "Execute view function of a module",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
