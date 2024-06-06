import { create } from 'zustand'

interface uAlbumsPhoto{
    albumId:number;
    id: number;
    title:string;
    url: string;
    thumbnailUrl: string;
    quantity?: number;
}

interface FavoriteList {
    photos: uAlbumsPhoto[];
    setAddCard:(payload: uAlbumsPhoto[]) => void;
  }
  
   export const useFavoriteListStore = create<FavoriteList>()((set,get) => ({
    photos:[],
    setAddCard:(item) => {
        set({ photos: [...get().photos, {...item, fav: 1,}]});
      },
  }));


