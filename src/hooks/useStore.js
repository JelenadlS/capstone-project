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

      onFilter: category => {
        const setCurrentFilter = get().setCurrentFilter;
        setCurrentFilter(category);
      },

      onEditActivity({
        id,
        activity,
        category,
        group,
        friend,
        notes,
        date,
        location,
        photo,
      }) {
        const setActivities = get().setActivities;
        const activities = get().activities;
        setActivities(
          activities.map(act =>
            act.id === id
              ? {
                  ...act,
                  id,
                  activity,
                  category,
                  group,
                  friend,
                  notes,
                  date,
                  location,
                  photo,
                }
              : act
          )
        );
      },
    }),
    { name: 'togather' }
  )
);

export default useStore;
