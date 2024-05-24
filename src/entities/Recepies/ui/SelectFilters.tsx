import {AreasList} from "../model/types/recipe.types.ts";
import Button from "../../../shared/common/Button/Button.tsx";

type filtersProps = {
    filtersList: AreasList;
    setFilter: (area: string) => void;
    filter: string | null;
}

const SelectFilters = ({
                           filtersList, setFilter, filter
}: filtersProps) => {


    const changeFilter = (area: string) => {
        setFilter(area);
        console.log(area);
    }

    return (
            <div className={`grid grid-cols-5 text-center p-2 overflow-x-hidden gap-2 h-[18rem] border-b-black border-t-black border-2`}>
                {filtersList.map((area, idx) => {
                    return <Button
                        selected={filter === area.strArea}
                        onClick={() => changeFilter(area.strArea)}
                        title={area.strArea}
                        key={idx}
                    />;
                })}
            </div>
    )
}

export default SelectFilters;
