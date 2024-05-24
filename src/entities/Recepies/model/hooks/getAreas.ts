import {useEffect, useState} from "react";
import axios, {isAxiosError} from "axios";
import {AreasList} from "../types/recipe.types.ts";
import {ApiResponse} from "../types/recipe.types.ts";

const useGetAreas = () => {
    const [areasList, setAreasList] = useState<AreasList | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getAreas = async () => {
        setLoading(true);
        setError(null);
        try {
            console.log("getting areas");
            const response = await axios.get<ApiResponse>('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            const data = response.data;
            setAreasList(data.meals);
        } catch (error) {
            if(isAxiosError(error)) {
                setError(error.message as string);
            } else {
                setError("unknown error while loading areas filter. Refresh the page to try again.");
            }

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAreas();
    }, []);

    return {
        areasList,
        loading,
        error,
        getAreas,
    };
}

export default useGetAreas;
