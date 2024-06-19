export function shell_sort(array){
    if(!array.length) return null;

    let tmp,j;
    for (let interval = Math.floor(array.length/2); interval > 0; interval = Math.floor(interval/2) ){
        for(let i = interval; i< array.length;i++){
            tmp = array[i];
            for(j = i; j >= interval && array[j-interval] > tmp; j -= interval){
                array[j]=array[j-interval];
            }
            array[j]=tmp;
        }
    }

    return array;
}