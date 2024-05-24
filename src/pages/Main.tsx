import Title from "../shared/common/Title/Title.tsx";
import Recipe from "../entities/Recepies/ui/Recepie.tsx";

const Main = () => {
    return(
        <div  className={'text-red-300'}>
            <Title>
                Random Recipes for you!
            </Title>
            <Recipe/>
        </div>
    )
}

export default Main;
