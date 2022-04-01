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
      showSave: false,

      setSearchInput: searchInput => {
        set({ searchInput: searchInput });
      },
      setCurrentFilter: currentFilter => {
        set({ currentFilter: currentFilter });
      },
      setPhoto: photo => {
        set({ photo: photo });
      },
      setActivities: activities => {
        set({ activities: activities });
      },
      setAddedFriend: friend => {
        set({ addedFriend: friend });
      },
      setAddedGroup: group => {
        set({ addedGroup: group });
      },
      setShowBin: bin => {
        set({ showBin: bin });
      },
      setShowSave: save => {
        set({ showSave: save });
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
        const setShowSave = get().setShowSave;
        setCurrentFilter('all');
        setSearchInput('');
        setShowBin(true);
        setShowSave(false);
      },

      handleResetPageAndShowArrow: () => {
        const setCurrentFilter = get().setCurrentFilter;
        const setSearchInput = get().setSearchInput;
        const setShowBin = get().setShowBin;
        const setShowSave = get().setShowSave;
        setCurrentFilter('all');
        setSearchInput('');
        setShowBin(false);
        setShowSave(false);
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
          activities.map(activitiy =>
            activitiy.id === id
              ? {
                  ...activitiy,
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
              : activitiy
          )
        );
      },
    }),
    { name: 'togather' }
  )
);

export default useStore;
