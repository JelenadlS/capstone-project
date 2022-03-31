import create from 'zustand';

const useStore = create(set => ({
  searchInput: '',
  currentFilter: 'all',
  photo: '',
  hasError: false,
  setSearchInput: searchInput => {
    set({ searchInput: searchInput });
  },
  setCurrentFilter: currentFilter => {
    set({ currentFilter: currentFilter });
  },
  setPhoto: photo => {
    set({ photo: photo });
  },
  setHasError: hasError => {
    set({ hasError: hasError });
  },
}));

export default useStore;
