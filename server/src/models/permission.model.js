class Permission {
    constructor({ menu, route, isActive }) {
        this.menu = menu;
        this.route = route;
        this.actions = [];
        this.isActive = !!isActive;
    }

    addAction(action) {
        this.actions.push(action);
    }
}

module.exports = Permission;