import styled from 'styled-components';

export default function FilterTags({
  selectedFriendsActivity,
  activities,
  currentFilter,
  onFilter,
  onShowFilter,
}) {
  const eachExistingCategoryOnce = [
    ...new Set(
      selectedFriendsActivity?.length > 0
        ? selectedFriendsActivity.map(activity => activity.category)
        : activities.map(activity => activity.category)
    ),
  ];

  const categoryTagsAndAll = ['all', ...eachExistingCategoryOnce].sort();

  function working(category) {
    onFilter(category);
    onShowFilter(false);
  }
  return (
    categoryTagsAndAll.length > 2 && (
      <ScrollCategories title="filter options">
        {categoryTagsAndAll.map((category, index) => {
          return (
            <CategoryButton
              key={index}
              onClick={() => working(category)}
              active={category === currentFilter}
            >
              {category}
            </CategoryButton>
          );
        })}
      </ScrollCategories>
    )
  );
}

const ScrollCategories = styled.section`
  display: flex;
  overflow-x: auto;
`;
const CategoryButton = styled.button`
  gap: 5px;
  margin: 10px;
  width: fit-content;
  background: ${props =>
    props.active ? 'rgba(71, 39, 35, 0.72)' : 'transparent'};
  color: ${props => (props.active ? '#f0e7da' : 'rgba(71, 39, 35, 0.72)')};
  border: 2px solid rgba(71, 39, 35, 0.42);
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 16px;
  white-space: nowrap;
`;
