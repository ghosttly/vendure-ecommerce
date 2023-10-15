import { addNavMenuSection } from "@vendure/admin-ui/core";

export default [
  addNavMenuSection(
    {
      id: "extensions",
      label: "Extensions",
      items: [
        {
          id: "giftStoreUI",
          label: "Gift Store",
          routerLink: ["/extensions/gift-store"],
          // Icon can be any of https://core.clarity.design/foundation/icons/shapes/
          icon: "store",
        },
      ],
    },
    // Add this section before the "settings" section
    "settings"
  ),
];
