const API = process.env.API;

const getURLInstitute = `${API}/institute`;

class InstituteService {
    async create(instituteData) {
        try {
            const res = await fetch(getURLInstitute, {
                method: 'PUT',
                body: JSON.stringify(instituteData),
                headers: { 'Content-type': 'application/json' }
            })
            const idInstitute = await res.json();
            return idInstitute;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new InstituteService();