export function binary_search(array,search_number){
    if(!array.length) return null;

    let left = 0;
    let right = array.length -1;
    let mid;
    while(left <= right){
        mid = Math.floor((left+right) / 2);
        if(array[mid] == search_number) return mid;
        else if (array[mid]< search_number) left = mid + 1;
        else right = mid - 1;
        
    }

    return null;
}