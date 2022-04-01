import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      searchInput: '',
      currentFilter: 'all',
      photo: '',
      activities: [],
      addedFriend: [],
      addedGroup: [],
      //currentLikeFilter: true,

      setSearchInput: searchInput => {
        set({ searchInput: searchInput });
      },
      setCurrentFilter: currentFilter => {
        set({ currentFilter: currentFilter });
      },
      setPhoto: photo => {
        set({ photo: photo });
      },
      setActivities: act => {
        set({ activities: act });
      },
      setAddedFriend: fr => {
        set({ addedFriend: fr });
      },
      setAddedGroup: gr => {
        set({ addedGroup: gr });
      },
      // setCurrentLikeFilter: curLiFi => {
      //   set({ currentLikeFilter: curLiFi });
      // },

      resetPage: event => {
        event.preventDefault();
        const setCurrentFilter = get().currentFilter;
        const setSearchInput = get().searchInput;
        setCurrentFilter('all');
        setSearchInput('');
      },
    }),
    { name: 'togather' }
  )
);

export default useStore;
