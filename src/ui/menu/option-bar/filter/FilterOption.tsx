import type { SortOption } from './FilterContainer';
interface FilterOptionsProps {
  sortOption: SortOption;
  optionClassName: (sortOption: SortOption) => string;
  selectOption: (sortOption: SortOption) => void;
}

export const FilterOption = ({
  sortOption,
  optionClassName,
  selectOption,
}: FilterOptionsProps) => {
  const handleSelect = (e: any) => {
    e.stopPropagation();
    selectOption(sortOption);
  };

  return (
    <div
      key={sortOption}
      className={optionClassName(sortOption)}
      onClick={handleSelect}
    >
      {sortOption}
    </div>
  );
};
