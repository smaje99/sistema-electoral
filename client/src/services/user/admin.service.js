const API = process.env.API;

const getURLAdmin = `${API}/admin`;

class AdminService {
    async create(userData) {
        try {
            const res = await fetch(getURLAdmin, {
                method: 'PUT',
                body: JSON.stringify(userData),
                headers: { 'Content-type': 'application/json' }
            })
            const sessionData = await res.json();

            if (sessionData.error) throw sessionData.message;

            return sessionData;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new AdminService();