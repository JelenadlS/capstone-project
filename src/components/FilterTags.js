import styled from 'styled-components';

export default function FilterTags({
  activities,
  currentFilter,
  onFilter,
  setSearchInput,
}) {
  const eachExistingCategoryOnce = [
    ...new Set(activities.map(activity => activity.category)),
  ];

  const categoryTagsAndAll = ['all', ...eachExistingCategoryOnce].sort();

  return (
    categoryTagsAndAll.length > 2 && (
      <ScrollCategories title="filter options">
        {categoryTagsAndAll.map((category, index) => {
          return (
            <CategoryButton
              key={index}
              onClick={() => handleOnClickFilter(category)}
              active={category === currentFilter}
            >
              {category}
            </CategoryButton>
          );
        })}
      </ScrollCategories>
    )
  );

  function handleOnClickFilter(category) {
    setSearchInput('');
    onFilter(category);
  }
}

const ScrollCategories = styled.section`
  display: flex;
  overflow-x: auto;
`;
const CategoryButton = styled.button`
  margin: 10px 10px 15px;
  width: fit-content;
  background: ${props =>
    props.active ? 'rgba(71, 39, 35, 0.72)' : 'transparent'};
  color: ${props => (props.active ? '#f0e7da' : 'rgba(71, 39, 35, 0.72)')};
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 14px;
  white-space: nowrap;
`;
