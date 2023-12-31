import categories from "../categories";

interface Props {
  onChange: (category: string) => void;
}

const FilterSelection = ({ onChange }: Props) => {
  return (
    <form>
      <div className="mb-3">
        <select
          className="form-select"
          defaultValue="0"
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default FilterSelection;
