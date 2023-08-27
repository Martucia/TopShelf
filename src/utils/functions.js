export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
};

const getToken = () => {
    return localStorage.getItem('token');
};

export const getConfig = () => {
    const token = getToken();

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return config;
};

export const redirectToPreviousPage = (navigate) => {
    const previousPageUrl = document.referrer;
    const currentDomain = window.location.hostname;

    if (previousPageUrl.includes(currentDomain)) {
        navigate(-1);
    } else {
        navigate('/');

    }
};