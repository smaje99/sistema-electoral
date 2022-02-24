const API = process.env.API;

const getURLLogin = `${API}/user/login`;

class SessionService {
    /**
     * It makes a request to the server to login a user.
     * @returns The user object.
     */
    async login({ email, password }) {
        try {
            const res = await fetch(getURLLogin, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-type': 'application/json' }
            })
            const data = await res.json();

            if (data.error) throw new data.message;
            if (!data.isActive) throw new Error('Usuario no activo');

            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new SessionService();