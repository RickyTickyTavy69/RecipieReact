const Title = ({children} : {children: string}) => {
    return(
        <h1 className={'text-black text-xl font-bold my-4 p-2'}>
            {children}
        </h1>
    )
}

export default Title;
