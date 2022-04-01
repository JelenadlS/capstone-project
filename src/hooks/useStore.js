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
      showBin: true,

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
      setShowBin: bin => {
        set({ showBin: bin });
      },

      resetPage: event => {
        event.preventDefault();
        const setCurrentFilter = get().setCurrentFilter;
        const setSearchInput = get().setSearchInput;
        setCurrentFilter('all');
        setSearchInput('');
      },

      handleResetPage: () => {
        const setCurrentFilter = get().setCurrentFilter;
        const setSearchInput = get().setSearchInput;
        const setShowBin = get().setShowBin;
        setCurrentFilter('all');
        setSearchInput('');
        setShowBin(true);
      },

      handleResetPageAndShowArrow: () => {
        const setCurrentFilter = get().setCurrentFilter;
        const setSearchInput = get().setSearchInput;
        const setShowBin = get().setShowBin;
        setCurrentFilter('all');
        setSearchInput('');
        setShowBin(false);
      },
    }),
    { name: 'togather' }
  )
);

export default useStore;
