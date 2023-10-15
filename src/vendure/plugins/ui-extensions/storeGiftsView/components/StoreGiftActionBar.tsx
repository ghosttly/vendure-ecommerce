import { ActionBar } from "@vendure/admin-ui/react";
import React from "react";
import { ActionBarForm } from "./ActionBarForm";

export const GiftStoreActionBar = () => {
  return (
    <ActionBar leftContent={<ActionBarForm />}>
      <button className="button primary">Create gift</button>
    </ActionBar>
  );
};
