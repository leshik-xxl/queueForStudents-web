import Api from "./api";

const USERNAME_KEY = "username"

class UserService {

    static async login(username: string) {
        const response = await Api.post<string, string>("/login", username);
        localStorage.setItem(USERNAME_KEY, response.data);
    }

    static async logout() {
        let currentUsername = this.getCurrentUsername();
        if (currentUsername == null) {
            currentUsername = '';
        }
        Api.post<string, string>("/logout", currentUsername);
        localStorage.removeItem(USERNAME_KEY);
    }

    static getCurrentUsername() {
        return localStorage.getItem(USERNAME_KEY);
    }
}

export default UserService;