const splitRoutes = (currentRoute = '', list = []) => {
    const listRoute = currentRoute.split('/');
    const listPath = listRoute.splice(0, listRoute.length - 1).map((data, index) => {
        if (index > 0)
            return `/${data}`;
        return '/'
    });
    return listPath.map((path, index) => {
        return {
            path: mergeRoute(listPath, index, path),
            title: list.find(element => element?.path === path).title
        }
    })
};

const mergeRoute = (list = [], index = 0, path = '') => {
    if (index === 0)
        return '/';
    if (index === 1)
        return path
    return list.splice(1, index - 1).join() + path
}
const titleRouters = (t) => {
    return [
        { path: '/', title: t.menu.home },
        { path: '/utilities', title: t.menu.utilities },
        { path: '/resume', title: t.menu.utility.cv },
        { path: '/toeic', title: t.menu.utility.toeic },
        { path: '/part-5', title: t.utilities.toeic.partFive },
    ]
}

export { splitRoutes, titleRouters }