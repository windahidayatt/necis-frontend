export const isLogin = () => {
    if (localStorage.custtoken) {
        return true;
    }
    return false;
}