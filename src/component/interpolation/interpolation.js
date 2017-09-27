const Interpolation = {
    interpolationInit: (root, array) => {
        // let regExp = /{{[^%>]+?}}/g;
        // let matches = root.innerHTML.match(regExp);

        // if(matches) {        
        //     matches.forEach((match, i) => {
        //         let a = deepSearch(array, root, match);
        //         // console.log(a, match);
        //         // item.elem.innerHTML = item.elem.innerHTML.replace(expression[0], '<div ac-interpolaction>  </div>');
        //         // let r = this.getComponentVariable(expression[1].split('.'), this.props)
        //         // item.elem.innerHTML = item.cached.innerHTML.replace(expression[0], r);
        //     });
        // }
    },

    interpolationRun: function(array) {
        // array.forEach(item=>{
        //     // console.log(item);
        // })
    }
}

function deepSearch(array, node, match) {
    node.childNodes.forEach(r=>{
        let regExp = /{{([^%>]+)?}}/;
        let expression = regExp.exec(r.textContent);

        console.log(r.textContent.trim()    );
        if(r.nodeType === 3 && r.textContent.trim() === match){

            array.push({
                elem: r
            });
        }
        deepSearch(array, r, match); 
    });
    return array;
}
export default Interpolation;