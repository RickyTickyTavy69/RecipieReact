import useGetRecipe from "../model/hooks/useGetRecipe.ts";
import useGetAreas from "../model/hooks/getAreas.ts";

import Button from "../../../shared/common/Button/Button.tsx";
import Ingredients from "./Ingredients.tsx";
import Thumbnail from "../../../shared/common/Thumbnail/Thumbnail.tsx";
import Title from "../../../shared/common/Title/Title.tsx";
import {Modal} from "../../../shared/common/Modal";
import {useState} from "react";
import SelectFilters from "./SelectFilters.tsx";



const Recipe = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {recipe, refetch} = useGetRecipe();

    const [filter, setFilter] = useState<string | null>(null);

    const {areasList} = useGetAreas();

    const changeRecipe = async () => {
        if(filter){
            await refetch(filter);
        } else{
            await refetch();
        }
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const openModal = () => {
        setIsOpen(true);
    }

    return(
        <>
            {recipe &&
                <div className={"border-white rounded border-2 flex flex-col items-center p-2"}>

                    {filter ? <p>selected filter : {filter}</p> :
                        <p>no filter selected, click filter to select filters</p>}
                    <div className={"flex justify-center gap-4 items-center"}>
                        <Title>{recipe.strMeal}</Title>
                        <p className={"p-2"}> recipe category: {recipe.strCategory + ""}, {recipe.strArea}</p>
                    </div>


                    <section
                        className={"border-2 border-white rounded h-[30rem] overflow-x-auto flex flex-col items-center p-2 my-4"}>
                        <div className={"flex gap-28 my-4"}>
                            <Thumbnail alt={recipe.strMeal} url={recipe.strMealThumb}/>
                            <Ingredients recipe={recipe}/>
                        </div>
                        <p className={'p-2 my-4'}>
                            {recipe.strInstructions}
                        </p>
                    </section>


                    <div className={"flex justify-center gap-8 my-4"}>
                        <a target={"_blank"} href={recipe.strYoutube}>Go to youtube</a>
                        <a target={"_blank"} href={recipe.strSource}>Go to source</a>
                    </div>

                </div>}
            <div className={"flex justify-center gap-8"}>
                <Button onClick={changeRecipe} title={'show another recipe'}/>
                    <Button onClick={openModal} title={'filter'}/>
            </div>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className={"text-black h-[20rem]"}>
                    <p>Select a country to filter the meals and click 'show another recipe'</p>
                    {areasList && <SelectFilters
                        filter={filter}
                        setFilter={setFilter}
                        filtersList={areasList}
                    />}
                </div>
            </Modal>
        </>

    )
}

export default Recipe;
