import create from 'zustand';

const useStore = create(set => ({
  searchInput: '',
  currentFilter: 'all',
  showBin: true,

  setSearchInput: searchInput => {
    set({ searchInput: searchInput });
  },
  setCurrentFilter: currentFilter => {
    set({ currentFilter: currentFilter });
  },
  setShowBin: showBin => {
    set({ showBin: showBin });
  },
}));

export default useStore;
