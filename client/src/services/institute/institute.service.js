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
            const data = await res.json();

            if (data.error) throw data.message;

            return data.idInstitute;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new InstituteService();