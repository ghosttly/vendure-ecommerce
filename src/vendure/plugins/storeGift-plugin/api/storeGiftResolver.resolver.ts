import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  Allow,
  Ctx,
  Permission,
  RequestContext,
  Transaction,
} from "@vendure/core";

import { StoreGiftService } from "../services/storeGift-service.service";

@Resolver()
export class StoreGiftResolver {
  constructor(private storeGiftService: StoreGiftService) {}

  @Query()
  @Allow(Permission.ReadAdministrator)
  getGiftStoreItems(@Ctx() ctx: RequestContext) {
    return this.storeGiftService.getStoreGiftItems(ctx);
  }

  @Mutation()
  @Transaction()
  @Allow(Permission.CreateAdministrator)
  async createGiftStoreItem(
    @Ctx() ctx: RequestContext,
    @Args() giftItem: { inStock: number; name: string }
  ) {
    return this.storeGiftService.addStoreGiftItem(ctx, giftItem);
  }
}
