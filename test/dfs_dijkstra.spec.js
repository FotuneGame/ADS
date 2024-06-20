import { expect } from "chai";
import { describe } from "mocha";
import { dfs_dijkstra } from "../algoritms/search/dfs_dijkstra.js";

// Cписок смежности
// Поиск кратчайшего пути в графе
const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}
// Матрица смежности
const matrix = [
    [0,2,1,0,0,0,0],
    [0,0,0,0,0,7,0],
    [0,0,0,5,2,0,0],
    [0,0,0,0,0,2,0],
    [0,0,0,0,0,1,0],
    [0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0],
]

describe("Для графа поиск в глубину DFS (Дейкстра), O(кол-во вершин + ребёр),  память O(кол-во вершин) (доп АТД стек вызовов)",()=>{
    it("1) Граф 1 из a в g",()=>{
        expect(dfs_dijkstra(graph,'a','g')).equal(21);
    })
    it("2) Граф 1 из a в n",()=>{
        expect(dfs_dijkstra(graph,'a','n')).equal(21);
    })

})
