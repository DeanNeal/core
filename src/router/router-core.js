class Router {
    constructor() {
        this.routes = [];
        this.subscribtions = [];
        this._id = -1;
        this.prevPath = null;
        this.$params = undefined;
        window.addEventListener('popstate', (e) => {
            // Make sure popstate doesn't run on init -- this is a common issue with Safari and old versions of Chrome
            if (self.state && self.state.previousState === null) return false;

            let a = this.getCurrentRoute(this.getFullStringPath());
            if (a) {
                this.prevPath = a.path;
                a.callback();
                this.runSubscribtions();

                console.log(this.subscribtions);
            }
        });
    }

    getCurrentPath() {
        return location.pathname.split('/').filter(item => item)[0] || '/';
    }

    getCurrentFullPath() {
        return location.pathname.split('/').filter(item => item) || '/';
    }

    getFullStringPath() {
        return location.pathname.substr(1) || '/';
    }

    getCurrentRoute(path) {
        let match = this.routes.filter(route => {
            let a = path.split('/');
            let b = route.path.split('/');

            if (a[1] && a[0] === b[0]) {
                route.params = a[1];
                route.newPath = path;
                this.$params = route.params;
                return true;
            }

            route.newPath = route.path;
            return path === route.path;
        })[0];
        let notFound = this.routes.filter(route => {
            return route.path === '404';
        })[0];
        return match || notFound;
    }

    getParams() {
        return this.$params;
    }

    getRouterState() {
        let a = location.pathname.split('/').filter(item => item);
        return {
            stage: a[0],
            params: a[1]
        }
    }

    on(path, callback) {
        this.routes.push({path, callback});
    }

    update() {
        this.navigate(location.pathname.substr(1) || '/', true);
    }

    navigate(path, silent) {
        let a = this.getCurrentRoute(path);
        if (a && this.prevPath !== path) {
            if (!silent) {
                this.path(a.newPath);
            }

            a.callback.call(this, a.params);
            this.runSubscribtions();
        }
        this.prevPath = path;
    }

    path(pathname) {
        if ('string' === typeof pathname) {
            window.history.pushState({}, null, pathname);
            return this;
        }
    }

    runSubscribtions() {
        this.subscribtions.forEach(item => {
            item.fn.call(this, this.getCurrentPath(), this.getCurrentFullPath())
        });
    }

    onChange(fn) {
        let context = this;
        this._id++;
        this.subscribtions.push({fn, id: this._id});
        let a = Number(this._id);
        return {
            unsubscribe() {
                context.subscribtions = context.subscribtions.filter(item=> item.id !== a);
            }
        }
    }
}

export default new Router();