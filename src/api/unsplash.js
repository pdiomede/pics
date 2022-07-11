import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID f9ve_ynFbBPT_aqqamh-U8g5xYo4bG_JFSCmtQ1ROdM'
    },
});
