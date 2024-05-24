export const getRandomFromArray = (list: Array<any>) => {
    return list[Math.floor(Math.random()*list.length)];
}
