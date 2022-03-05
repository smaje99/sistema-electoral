class Permission {
    constructor({ menu, route }) {
        this.menu = menu;
        this.route = route;
        this.actions = [];
    }

    addAction(action) {
        this.actions.push(action);
    }
}

module.exports = Permission;