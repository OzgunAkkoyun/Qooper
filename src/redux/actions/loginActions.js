const SaveUser = (payload) =>({
    type:'SAVE_USER',
    payload,
});

const DeleteUser = () =>({
    type:'DELETE_USER',
});

export {SaveUser,DeleteUser}