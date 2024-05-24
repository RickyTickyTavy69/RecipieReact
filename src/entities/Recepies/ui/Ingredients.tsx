import {Recipe} from "../model/types/recipe.types.ts";

type IngredientsProps = {
    recipe: Recipe
}

const Ingredients = ({recipe} : IngredientsProps) => {
    return (
        <div>
            {Object.entries(recipe).map(([key, value]) => {
                if(key.includes("strIngredient") && value){
                    const valueIdx = +key.replace("strIngredient", '')
                    return (
                        <div key={key} className={"flex gap-4"}>
                            <div>
                                {value}
                            </div>
                            :
                            <div>
                            {recipe[`strMeasure${valueIdx}` as keyof Recipe]}
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Ingredients;
