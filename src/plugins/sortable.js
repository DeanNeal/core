class Sortable {

    constructor(root, cb) {
        this._onDragstart = this._onDragstart.bind(this);
        this._onDragOver = this._onDragOver.bind(this);
        this._onDragEnd = this._onDragEnd.bind(this);
        // this._onDrop = this._onDrop.bind(this);
        this._onDragLeave = this._onDragLeave.bind(this);
    }

    init(params) {
        if (typeof params === 'object') {
            this.root = params.el;
            if (params.onDragEnd) {
                this.onDragEnd = params.onDragEnd;
            }
            this.addEvents();
            this.addInexes();
        } else {
            console.warn('Please specify params as object');
        }
    }

    addEvents() {
        this.root.addEventListener('dragstart', this._onDragstart, false);
    }

    addInexes() {
        [].forEach.call(this.root.children, (el, i) => {
            el.setAttribute('data-index', i);
        });

    }

    _onDragstart(evt, a) {
        this.dragEl = evt.target; // save element

        // set type of d&d
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('Text', this.dragEl.textContent);

        this.root.addEventListener('dragover', this._onDragOver, false);
        this.root.addEventListener('dragleave', this._onDragLeave, false);

        // this.root.addEventListener('drop', this._onDrop, false);
        this.root.addEventListener('dragend', this._onDragEnd, false);

        // timeout is necessary, because dragEl shouldn't has ghost class
        setTimeout(() => {
            this.dragEl.classList.add('ghost');
        })
    }

    _onDragLeave(e) {
        let target = e.target;
    }


    _onDragOver(evt) {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
        let target = this.target = evt.target;

        let targetElem = target.closest('[draggable]');
        if (this.dragEl !== targetElem) {
            if (targetElem.nextElementSibling === this.dragEl) {
                this.root.insertBefore(this.dragEl, targetElem);
            } else if (!targetElem.nextElementSibling) {
                this.insertAfter(this.dragEl, targetElem);
            } else {
                this.root.insertBefore(this.dragEl, targetElem.nextElementSibling);
            }
        }
        // if (target && target !== this.dragEl && target.nodeName === this.dragEl.nodeName /*&& target.parentNode === this.dragEl.parentNode*/) {
        //     if (target.nextElementSibling === this.dragEl) {
        //         this.root.insertBefore(this.dragEl, target);
        //     } else if (!target.nextElementSibling) {
        //         this.insertAfter(this.dragEl, target);
        //     } else {
        //         this.root.insertBefore(this.dragEl, target.nextElementSibling);
        //     }
        // }
    }

    _onDragEnd(e) {
        e.preventDefault();
        this.dragEl.classList.remove('ghost');

        if (this.onDragEnd) {
            this.onDragEnd.call(this, this.root.children);
        }

        this.root.removeEventListener('dragover', this._onDragOver, false);
        this.root.removeEventListener('dragleave', this._onDragLeave, false);
        this.root.removeEventListener('dragend', this._onDragEnd, false);
        // this.root.removeEventListener('drop', this._onDrop, false);
    }

    // _onDrop(e) {
    //     let target = e.target;
    //     this.dragEl.classList.remove('ghost');

    //     // check if dragEl and target are not the same element and they both have the same nodeName
    //     if (this.dragEl.draggable && target.draggable) {
    //         if (this.onDrop) {
    //             this.onDrop.call(this, this.root.children);
    //         }
    //     }
    // }

    insertAfter(elem, refElem) {
        let parent = refElem.parentNode;
        let next = refElem.nextSibling;
        if (next) {
            return parent.insertBefore(elem, next);
        } else {
            return parent.appendChild(elem);
        }
    }

}

export default new Sortable();