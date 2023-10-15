import { registerReactRouteComponent } from "@vendure/admin-ui/react";
import { StoreGiftView } from "./components/StoreGiftView";

export default [
  registerReactRouteComponent({
    component: StoreGiftView,
    path: "",
    title: "Gift Store",
    breadcrumb: "Gift Store",
  }),
];
