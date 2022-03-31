import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      searchInput: '',
      currentFilter: 'all',
      photo: '',
      //hasError: false,
      // activities: (!get().hasError && 'activities') || [],
      // addedFriend: (!get().hasError && 'addedFriend') || [],
      // addedGroup: (!get().hasError && 'addedGroup') || [],
      activities: [],
      addedFriend: [],
      addedGroup: [],

      setSearchInput: searchInput => {
        set({ searchInput: searchInput });
      },
      setCurrentFilter: currentFilter => {
        set({ currentFilter: currentFilter });
      },
      setPhoto: photo => {
        set({ photo: photo });
      },
      // setHasError: hasError => {
      //   set({ hasError: hasError });
      // },
      setActivities: act => {
        set({ activities: act });
      },
      setAddedFriend: fr => {
        set({ addedFriend: fr });
      },
      setAddedGroup: gr => {
        set({ addedGroup: gr });
      },

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
