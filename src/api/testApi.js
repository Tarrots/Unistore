import axiosClient from './axiosClient'

const testApi = {
    getAll: () => {
        const url = "/test/all";
        return axiosClient.get(url);
    },
    user: () => {
        const url = "/test/user";
        return axiosClient.get(url);
    }
};

export default testApi;