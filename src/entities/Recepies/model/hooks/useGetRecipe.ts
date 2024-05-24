import {useEffect, useState} from "react";
import axios, {isAxiosError} from "axios";
import {Recipe} from "../types/recipe.types.ts";
import {ApiResponse} from "../types/recipe.types.ts";
import {getRandomFromArray} from "../../../../shared/lib/getRandomFromArray.ts";

const useGetRecipe = () => {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getRecipe = async (filter?: string) => {
        setLoading(true);
        setError(null);
        try {
            if(filter){
                console.log("filter is", filter);
                const {data: recipesList} = await axios.get<ApiResponse>(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`);
                const randomId = getRandomFromArray(recipesList.meals).idMeal;
                const {data: recipe} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomId}`)
                console.log("recipe", recipe);
                setRecipe(recipe.meals[0] as Recipe);
            } else{
                const response = await axios.get<ApiResponse>('https://www.themealdb.com/api/json/v1/1/random.php');
                const data = response.data;
                setRecipe(data.meals[0]);
            }
        } catch (error) {
            if(isAxiosError(error)) {
                setError(error.message as string);
            } else {
                setError("unknown error while loading recipe. Refresh the page to try again.");
            }

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRecipe();
    }, []);

    const refetch = async (filter?: string) => {
        await getRecipe(filter);
    }

    return {
        recipe,
        loading,
        error,
        getRecipe,
        refetch,
    };
}

export default useGetRecipe;
