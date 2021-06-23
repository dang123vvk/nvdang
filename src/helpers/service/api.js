export const createAuthHeader = (token, type="Bearer")=>({ headers: { 'Content-Type': 'application/json','Authorization':  `${type} ${token}` }});

export const createFormData = ()=>({ headers: { 'Content-Type': 'multipart/form-data' }});

export const createAuthFormData = (token, type="Bearer")=>({headers:{
    'Authorization': `${type} ${token}`,
    'Content-Type': 'multipart/form-data'
}});
