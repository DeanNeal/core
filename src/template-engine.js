// export function TemplateEngine(html, options = {}) {
//     let re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0, match;
//     let add = function(line, js) {
//         js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
//             (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
//         return add;
//     };
//     while(match = re.exec(html)) {
//         add(html.slice(cursor, match.index))(match[1], true);
//         cursor = match.index + match[0].length;
//     }
//     add(html.substr(cursor, html.length - cursor));
//     code += 'return r.join("");';
//     return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
// }
String.prototype.replaceAll = function(search, replace) {
    return this.split(search).join(replace);
}

export function TemplateEngine(html, options = {}) {
    if(typeof options === 'string'){
        html = html.replaceAll("{{this}}", options ? options : '');
    }
    if(typeof options === 'object') {    
        for (let prop in options) {
            html = html.replaceAll("{{" + prop + "}}", options[prop]);
        }
    }
    return html;
}
