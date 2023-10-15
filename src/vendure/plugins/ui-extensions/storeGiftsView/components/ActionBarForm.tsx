import { FormField } from "@vendure/admin-ui/react";
import React from "react";

export const ActionBarForm = () => {
  return (
    <>
      <form className="flex gap-2">
        <FormField label="Gift name">
          <input type="text" />
        </FormField>
        <FormField label="Gift sku">
          <input type="text" />
        </FormField>
        <FormField label="Stock value">
          <input type="number" />
        </FormField>
      </form>
    </>
  );
};
