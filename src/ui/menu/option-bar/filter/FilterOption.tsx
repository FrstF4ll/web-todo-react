import type { SortOption } from "../../../../useFilterStore";
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
  const handleSelect = (e: React.MouseEvent) => {
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
