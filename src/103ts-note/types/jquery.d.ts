declare function $(selector: string):any;

declare namespace $ {
    function ajax(url: string):void
    namespace fn {
        function extend(obj:any):void;
    }
}

// 只要写了export就表示是局部的模块，不写就是全局的（比如我们直接写script引入了jq那就不写）

// 如果对方是使用import xx那一定要写export default $;
// 修改配置，指定从./下查找声明模块
// "baseUrl": "./",
// "paths": {
//     "*": ["types/*"]
//   },    
export default $;