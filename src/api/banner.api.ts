import { IBanner } from "@/model/banner.model";
import { requestHandler } from "./http"

export const fetchBanners = async () => {
  return await requestHandler<IBanner[]>('get', '/banners');
}