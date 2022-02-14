class PersonalData {
    constructor({ idPersonalData, dni, name, gender, phone }) {
        this.idPersonalData = idPersonalData;
        this.dni = dni;
        this.name = name;
        this.gender = !!gender;
        this.phone = phone;
    }
}

module.exports = PersonalData;