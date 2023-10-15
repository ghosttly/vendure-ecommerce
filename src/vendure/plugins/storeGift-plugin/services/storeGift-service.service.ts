import { Injectable } from "@nestjs/common";
import { RequestContext, TransactionalConnection } from "@vendure/core";

import { StoreGiftItem } from "../entities/storeGift.entity";

@Injectable()
export class StoreGiftService {
  constructor(private connection: TransactionalConnection) {}

  async getStoreGiftItems(ctx: RequestContext): Promise<StoreGiftItem[]> {
    try {
      const items = await this.connection
        .getRepository(ctx, StoreGiftItem)
        .find();

      return items;
    } catch (err: any) {
      return [];
    }
  }

  /**
   * Adds a new item to the active Customer's wishlist.
   */
  async addStoreGiftItem(
    ctx: RequestContext,
    giftItem: { name: string; inStock: number }
  ) {
    try {
      const gifts = await this.connection
        .getRepository(ctx, StoreGiftItem)
        .find();
      const exists = gifts.find((g) => g.name === giftItem.name);
      if (exists) return false;
      const res = await this.connection
        .getRepository(ctx, StoreGiftItem)
        .save(giftItem);

      if (res) return true;
      return false;
    } catch (err: any) {
      return false;
    }
  }

  /**
   * Removes an item from the active Customer's wishlist.
   */
}
