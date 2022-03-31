import create from 'zustand';

const useStore = create(set => ({
  searchInput: '',

  setSearchInput: searchInput => {
    set({ searchInput: searchInput });
  },
}));

export default useStore;
