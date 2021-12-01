import {getUser, getUsersRepos, getUsersStarred} from '../../api/index.js';

const eventKeyUp = (props, setTableData) => {
    if(props.keyCode === 13) {
        getUser(props.target.value).then(json =>{
            setTableData(json);
        });
    }
};

const eventClickStarred = (name, setTableData) => {
    getUsersStarred(name).then(json =>{
        // setTableData({userName:json.name, userAvatar:json.owner.avatar_url, userPerfil:json.html_url, userRepositories:json.visibility});
        setTableData(json);
    });
};

const eventClickRepos = (name, setTableData) => {
   
    getUsersRepos(name).then(json => {

        // json.forEach(item => {
            setTableData(json);
        // })

        // setTableData({userName:json[0].name, userAvatar:json[0].owner.avatar_url, userPerfil:json[0].html_url, userRepositories:json[0].visibility});
        // setTableData({userName:json[1].name, userAvatar:json[1].owner.avatar_url, userPerfil:json[1].html_url, userRepositories:json[1].visibility});
    });
};

export {eventKeyUp, eventClickStarred, eventClickRepos};