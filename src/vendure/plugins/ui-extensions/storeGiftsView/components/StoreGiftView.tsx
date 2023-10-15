import React from "react";

import { GiftStoreActionBar } from "./StoreGiftActionBar";
export function StoreGiftView() {
  const greeting = "Hello!";
  return (
    <div className="page-block giftStoreContainer">
      <GiftStoreActionBar />
      <h2>{greeting}</h2>
    </div>
  );
}
