export function bubble_sort(array){
    if(!array.length) return null;
    let tmp;

    for(let i=0; i < array.length; i++){
        for(let j=0; j < array.length; j++){
            if(array[j+1] < array[j]){
                tmp = array[j+1];
                array[j+1]=array[j];
                array[j]=tmp;
            }
        }
    }

    return array;
}