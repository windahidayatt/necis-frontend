export const isLogin = () => {
    if (localStorage.usertoken) {
        return true;
    }

    return false;
}