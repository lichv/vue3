import request from '/@/utils/request'

let getMenus = {};

getMenus.send = function(data) {
    return request({
        url: `/menu.json`,
        data,
        method: 'GET'
    })
}

export default getMenus