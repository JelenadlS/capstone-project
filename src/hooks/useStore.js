import create from 'zustand';

const useStore = create(set => ({
  searchInput: '',
  currentFilter: 'all',
  photo: '',
  setSearchInput: searchInput => {
    set({ searchInput: searchInput });
  },
  setCurrentFilter: currentFilter => {
    set({ currentFilter: currentFilter });
  },
  setPhoto: photo => {
    set({ photo: photo });
  },
}));

export default useStore;
