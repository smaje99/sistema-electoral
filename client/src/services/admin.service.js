const API = process.env.API;

const getURLAdmin = `${API}/admin`;

export const createAccount = async (user, institute) => {
    const accountData = {
        emailUser: user.email,
        password: user.password,
        dni: user.dni,
        nameUser: user.name,
        gender: user.gender,
        phoneUser: user.phone,
        nit: institute.nit,
        nameInstitute: institute.name,
        address: institute.address,
        emailInstitute: institute.email,
        phoneInstitute: institute.phone
    }

    try {
        const res = await fetch(getURLAdmin, {
            method: 'PUT',
            body: JSON.stringify(accountData),
            headers: { 'Content-type': 'application/json' }
        })
        const sessionData = await res.json();

        if (sessionData.error) throw sessionData.message;

        return sessionData;
    } catch (error) {
        throw new Error(error);
    }
}