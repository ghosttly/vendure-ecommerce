import { DeepPartial, VendureEntity } from "@vendure/core";
import { Column, Entity } from "typeorm";

@Entity()
export class StoreGiftItem extends VendureEntity {
  constructor(input?: DeepPartial<StoreGiftItem>) {
    super(input);
  }
  @Column()
  name: string;
  @Column()
  inStock: number;
}
