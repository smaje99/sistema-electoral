class User {
    constructor({
        idUser, email, password, isActive, personalData, institute, role
    }) {
        this.idUser = idUser;
        this.email = email;
        this.password = password;
        this.isActive = !!isActive;
        this.personalData = personalData;
        this.institute = institute;
        this.role = role;
    }
}

module.exports = User;