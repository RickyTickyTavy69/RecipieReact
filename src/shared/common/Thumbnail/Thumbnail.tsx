type ThumbnailProps = {
    url: string,
    alt: string,
}

const Thumbnail = ({url, alt}: ThumbnailProps) => {
    return(
        <img className={'border-2 border-white rounded-xl h-60 w-60'} src={url} alt={alt}/>
    )
}

export default Thumbnail;
