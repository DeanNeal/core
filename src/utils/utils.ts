let scrollArray = [];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const daysOfWeekShort = ['Mo', 'Tu', 'Wen', 'Th', 'Fr', 'Sat', 'Sun'];

const Utils = {
    monthNames: monthNames,
    monthNamesShort: monthNamesShort,
    daysOfWeekShort: daysOfWeekShort,
    serialize: (form: HTMLFormElement) => {
        let obj = {};
        let elements: any = form.querySelectorAll("input, select, textarea");
        for (let i = 0; i < elements.length; ++i) {
            let element = elements[i];
            let name = element.name;
            let value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return obj;
    },

    // getDeepProp(data, prop) {
    //   return prop.split('.').reduce((o, i) => o ? o[i] : null, data);
    // },

    randomInteger<T extends number>(min: T, max: T): number {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    },

    // addDays(date, count) {
    //     date = new Date(date);
    //     let clone = new Date(date.getTime());
    //     return new Date(clone.setDate(clone.getDate() + count));
    // },

    getDateByFormat(date, format) {
        let result = '';
        date = new Date(date);
        let year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        let day = date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate();
        let hh = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours();
        let mm = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();
        switch (format) {
            case 'yyyy-mm-dd':
                result = year + '-' + month + '-' + day;
                break;
            case 'yyyymmdd':
                result = year + month + day;
                break;
            case 'yyyy/mm/dd':
                result = year + '/' + month + '/' + day;
                break;
            case 'yyyy-mm-dd hh:mm':
                result = year + '-' + month + '-' + day + ' ' + hh + ':' + mm;
                break;
            case 'hh:mm':
                result = hh + ':' + mm;
                break;
            case 'dd.mm.yyyy':
                result = day + '.' + month + '.' + year;
                break;
            case 'mmm dd, yyyy':
                result = `${monthNamesShort[date.getMonth()]} ${day}, ${year}`;
                break;
            default:
                result = year + '-' + month + '-' + day;
                break;
        }
        return result;
    },

    // getDaysBetweenDates(dt1, dt2) {
    //     dt1 = new Date(dt1);
    //     dt2 = new Date(dt2);
    //     let a = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate());
    //     let b = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());

    //     return Math.floor(Math.abs(a - b) / (1000 * 60 * 60 * 24));
    // },

    // closest(array, num) {
    //     let i = 0;
    //     let minDiff = 1000;
    //     let ans;
    //     for (let i in array) {
    //         let m = Math.abs(num - array[i]);
    //         if (m < minDiff) {
    //             minDiff = m;
    //             ans = array[i];
    //         }
    //     }
    //     return ans;
    // },

    insertAfter(elem: HTMLElement | Comment, refElem: HTMLElement) {
        let parent = refElem.parentNode;
        let next = refElem.nextSibling;
        if (next) {
            return parent.insertBefore(elem, next);
        } else {
            return parent.appendChild(elem);
        }
    },

    isCustomElement(element: HTMLElement) {
        if (element.tagName.indexOf("-") !== -1) {
            return true;
        }
        let isAttribute = element.getAttribute("is");
        if (isAttribute === null) {
            return false;
        }
        return isAttribute.indexOf("-") !== -1;
    },

    // changeSortingId(array, params) {
    //     params.reverse = !params.reverse;
    //     return array.map(item => {
    //         if (item.id === params.id) {
    //             item.active = true;
    //         } else {
    //             item.active = false;
    //             item.reverse = false;
    //         }
    //         return item;
    //     });
    // },

    // sorting(array, params) {
    //     switch (params.type) {
    //         case 'date':
    //             array.sort((a, b) => {
    //                 return new Date(a[params.id]).getTime() - new Date(b[params.id]).getTime();
    //             });
    //             break;
    //         case 'string':
    //             array.sort((a, b) => {
    //                 if (a[params.id] < b[params.id]) {
    //                     return -1;
    //                 } else {
    //                     return 1;
    //                 }
    //             });
    //             break;
    //         case 'number':
    //             array.sort((a, b) => {
    //                 return a[params.id] - b[params.id];
    //             });
    //             break;
    //     }

    //     if (params.reverse) {
    //         array.reverse();
    //     }

    //     return array;
    // },

    scrollTop(element, to, duration) {
        this.scrollTo('top', element, to, duration);
    },

    scrollLeft(element, to, duration) {
        this.scrollTo('left', element, to, duration);
    },

    scrollTo(direction, element, to, duration) {
        if (scrollArray.filter(r => r.isEqualNode(element)).length === 0) {
            scrollArray.push(element);
            // console.log('start');
            let start = direction === 'left' ? element.scrollLeft : element.scrollTop,
                change = to - start,
                currentTime = 0,
                increment = 20;

            this.animateScroll({ direction, element, increment, currentTime, change, start, duration });
        }
    },

    animateScroll(r) {
        r.currentTime += r.increment;
        if (r.direction === 'left')
            r.element.scrollLeft = this.easeInOutQuad(r.currentTime, r.start, r.change, r.duration);
        if (r.direction === 'top')
            r.element.scrollTop = this.easeInOutQuad(r.currentTime, r.start, r.change, r.duration);

        if (r.currentTime < r.duration) {
            setTimeout(() => {
                this.animateScroll(r);
            }, r.increment);
        } else {
            // console.log('finish');
            scrollArray.forEach((item, i) => {
                if (item.isEqualNode(r.element)) {
                    scrollArray.splice(i, 1);
                }
            })
        }
    },

    easeInOutQuad(t: number, b: number, c: number, d: number): number {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    },

    removeSpacesFromString(str: string): string {
        str = str || '';
        return str.replace(/ +/g, "");
    },

    indexInParent(node: HTMLElement): number {
        var children = node.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == node) return num;
            if (children[i].nodeType == 1 || children[i].nodeType == 8) num++;
        }
        return -1;
    },

    //ref http://cwestblog.com/2014/03/14/javascript-getting-all-text-nodes/
    /**
     * Gets an array of the matching text nodes contained by the specified element.
     * @param  {!Element} elem
     *     The DOM element which will be traversed.
     * @param  {function(!Node,!Element):boolean} opt_fnFilter
     *     Optional function that if a true-ish value is returned will cause the
     *     text node in question to be added to the array to be returned from
     *     getTextNodesIn().  The first argument passed will be the text node in
     *     question while the second will be the parent of the text node.
     * @return {!Array.<!--Node-->}
     *     Array of the matching text nodes contained by the specified element.
     */
    getTextNodesIn(elem, opt_fnFilter) {
        let textNodes = [];
        if (elem) {
            for (let nodes = elem.childNodes, i = nodes.length; i--;) {
                let node = nodes[i],
                    nodeType = node.nodeType;
                if (nodeType == 3) {
                    if (!opt_fnFilter || opt_fnFilter(node, elem)) {
                        textNodes.push(node);
                    }
                } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
                    textNodes = textNodes.concat(Utils.getTextNodesIn(node, opt_fnFilter));
                }
            }
        }
        return textNodes;
    },


    // getCustomElements(elem, opt_fnFilter){
    //     let textNodes = [];
    //     if (elem) {
    //         for (let nodes = elem.childNodes, i = nodes.length; i--;) {
    //             let node = nodes[i],
    //                 nodeType = node.nodeType;
    //             if (nodeType == 1) {
    //                 if (!opt_fnFilter || opt_fnFilter(node, elem)) {
    //                     textNodes.push(node);
    //                 }
    //             } 
    //             else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
    //                 textNodes = textNodes.concat(Utils.getTextNodesIn(node, opt_fnFilter));
    //             }
    //         }
    //     }
    //     return textNodes;
    // },

    applyFormatter(r, params): void {
        let formatterData = params ? params.split(':') : null;
        let formatter = params ? Utils.removeSpacesFromString(params) : null;
        if (formatterData) {
            formatter = formatterData[0].trim();
            formatterData = formatterData[1] ? formatterData[1].trim() : null;
        }
        let rowHtml = false;


        if (formatter && formatter === 'json') {
            r = JSON.stringify(r);
        } else if (formatter && formatter === 'date') {
            r = Utils.getDateByFormat(r, formatterData || '');
        } else if (formatter && formatter === 'html') {
            rowHtml = true;
        } else if (formatter) {
            throw new Error('Unknown formatter ' + formatter);
        } else {
            r = r;
        }

        if (!r && r !== 0 && r !== false) {
            r = '';
        }
        return r;
    },

    getValueBetweenBrackets(str: string, cb, err): void {
        let regExp = /\(([^)]+)\)|\(()\)/;
        let res = regExp.exec(str)
        if (res && res[1]) {
            cb(res[1]);
        } else {
            err && err();
        }
    },

    isTextField(elem: any): boolean {
        return elem.type === 'text' || elem.type === 'email' || elem.type === 'password' || elem.type === 'textarea';
    },

    // getYearsFromTo(from, to) {
    //     let years = [];
    //     for (var i = from; i <= to; i++) {
    //         years.push(i);
    //     }
    //     return years;
    // },

    // getDatesInMonth(year, month) {
    //     return new Date(year, month, 0).getDate();
    // },

    camelToSnake(string: string): string {
        return string.replace(/[\w]([A-Z])/g, function (m) {
            return m[0] + "-" + m[1];
        }).toLowerCase();
    },

    camelCase(str: string): string {
        return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        // return string.replace(/(_\w)/g, function(m){
        //     return m[1].toUpperCase();
        // });
    },

    JSONStr(obj: {}): string {
        let seen = [];

        let replacer = function (key, value) {
            if (value != null && typeof value == "object") {
                if (seen.indexOf(value) >= 0) {
                    return;
                }
                seen.push(value);
            }
            return value;
        };

        return JSON.stringify(obj, replacer);
    }
};

export { Utils };