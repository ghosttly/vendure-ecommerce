import { PluginCommonModule, VendurePlugin } from "@vendure/core";
import { StoreGiftItem } from "./entities/storeGift.entity";
import { adminApiExtensions } from "./api/storeGiftApi-extension";
import { StoreGiftResolver } from "./api/storeGiftResolver.resolver";
import { StoreGiftService } from "./services/storeGift-service.service";

@VendurePlugin({
  imports: [PluginCommonModule],
  entities: [StoreGiftItem],
  providers: [StoreGiftService],
  adminApiExtensions: {
    schema: adminApiExtensions,
    resolvers: [StoreGiftResolver],
  },
})
export class StoreGiftPlugin {}
