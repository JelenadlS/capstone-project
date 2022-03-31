import create from 'zustand';

const useStore = create(set => ({
  searchInput: '',
  currentFilter: 'all',

  setSearchInput: searchInput => {
    set({ searchInput: searchInput });
  },
  setCurrentFilter: currentFilter => {
    set({ currentFilter: currentFilter });
  },
}));

export default useStore;
