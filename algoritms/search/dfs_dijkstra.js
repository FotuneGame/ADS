//поиск в вглубину cо стеком (Жадный)

const infinitive = 10000;

export function dfs_dijkstra(graph,start,end){
    const costs = {}
    const processed = []
    let neighbors = {}
    // первая оценка ближайших узлов
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 100000000
        }
    })
    // начинаем работу с ближайшим узлом
    let node = findNodeLovestCost(costs, processed)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLovestCost(costs, processed)
    }

    // возврат длины короткого пути
    let length=0;
    Object.keys(costs).forEach(node =>{
        length+=costs[node];
    })
    return length;
}


// поиск наиближайшего узла
function findNodeLovestCost(costs,processed){
    let lowestCost = infinitive;
    let lowestNode;
    Object.keys(costs).forEach(node =>{
        let cost = costs[node];
        if(cost < lowestCost && !processed.includes(node)){
            lowestCost = cost;
            lowestNode = node;
        }
    })
    return lowestNode;
}