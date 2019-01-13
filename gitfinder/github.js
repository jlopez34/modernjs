class GitHub {
    constructor() {
        this.client_id = '6893dc595e3f1e3c00e8';
        this.client_secret = 'cdb52abdcd3c30b6374c31fdd86800d1b82f1d78';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return { profile: profile };
    }
}