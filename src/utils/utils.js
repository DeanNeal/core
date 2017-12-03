let scrollArray = [];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const daysOfWeekShort = ['Mo', 'Tu', 'Wen', 'Th', 'Fr', 'Sat', 'Sun'];
const Utils = {
    monthNames: monthNames,
    monthNamesShort: monthNamesShort,
    daysOfWeekShort: daysOfWeekShort,
    serialize: (form) => {
        let obj = {};
        let elements = form.querySelectorAll("input, select, textarea");
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

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    },

    addDays(date, count) {
        date = new Date(date);
        let clone = new Date(date.getTime());
        return new Date(clone.setDate(clone.getDate() + count));
    },

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

    getDaysBetweenDates(dt1, dt2) {
        dt1 = new Date(dt1);
        dt2 = new Date(dt2);
        let a = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate());
        let b = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());

        return Math.floor(Math.abs(a - b) / (1000 * 60 * 60 * 24));
    },

    closest(array, num) {
        let i = 0;
        let minDiff = 1000;
        let ans;
        for (i in array) {
            let m = Math.abs(num - array[i]);
            if (m < minDiff) {
                minDiff = m;
                ans = array[i];
            }
        }
        return ans;
    },

    insertAfter(elem, refElem) {
        let parent = refElem.parentNode;
        let next = refElem.nextSibling;
        if (next) {
            return parent.insertBefore(elem, next);
        } else {
            return parent.appendChild(elem);
        }
    },

    isCustomElement(element) {
        if (element.tagName.indexOf("-") !== -1) {
            return true;
        }
        let isAttribute = element.getAttribute("is");
        if (isAttribute === null) {
            return false;
        }
        return isAttribute.indexOf("-") !== -1;
    },

    changeSortingId(array, params) {
        params.reverse = !params.reverse;
        return array.map(item => {
            if (item.id === params.id) {
                item.active = true;
            } else {
                item.active = false;
                item.reverse = false;
            }
            return item;
        });
    },

    sorting(array, params) {
        switch (params.type) {
            case 'date':
                array.sort((a, b) => {
                    return new Date(a[params.id]).getTime() - new Date(b[params.id]).getTime();
                });
                break;
            case 'string':
                array.sort((a, b) => {
                    if (a[params.id] < b[params.id]) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
                break;
            case 'number':
                array.sort((a, b) => {
                    return a[params.id] - b[params.id];
                });
                break;
        }
        
        if (params.reverse) {
            array.reverse();
        }

        return array;
    },

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

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    },

    removeSpacesFromString(str) {
        str = str || '';
        return str.replace(/ +/g, "");
    }
};

export { Utils };