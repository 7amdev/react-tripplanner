import  { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { INITIAL_ITEMS } from '../lib/constants';

export const useItemsStore = create(
  persist(
    function (set, get) {
      return {
        items: JSON.parse(localStorage.getItem('items')) || structuredClone(INITIAL_ITEMS),
        items_insert: function (item_name) {
          return set(function (state) {
            if (!item_name) return;
    
            const _id = get().items.reduce(function (initial_value, item) {
              if (initial_value > item.id) return initial_value;
              return item.id
            }, 0) + 1;
    
            const new_item = {
              id: _id,
              name: item_name,
              packed: false
            };
    
            return {items: [...get().items, new_item]};
          });
        },
        items_remove_by_id: function (item) {
          return set(function (state) {
            const items_updated = get().items.filter(function (p_item) {
              return p_item.id !== item.id 
            });
          
            return {items: items_updated};
          });
        },
        items_remove_all: function () {
          return set(function (state) {
            return { items: []};
          })
        },
        items_set_packed_by_id: function (id, value) {
          return set(function (state) {
            const items_updated = get().items.map(function (prev_item) {
              if (prev_item.id === id) 
                prev_item.packed = value;
          
              return prev_item;
            });
          
            return { items: items_updated};   
          });
        },
        items_set_all_packed: function () {
          return set(function (state) {
            const items_updated = get().items.map(function (item) {
              item.packed = true; 
              return item;
            })
    
            return { items: items_updated};   
          });
        },
        items_set_all_unpacked: function () {
          return set(function (state) {
            const items_updated = get().items.map(function (item) {
              item.packed = false; 
              return item;
            });
            
            return {items: items_updated};
          });
        },
        items_reset: function () {
          return set(function (state) {
            return {items: INITIAL_ITEMS};
          });
        }       
      };
    },
    {
      name: 'items'
    }
  )
);