import axios from 'axios'
import apiUrl from '../apiConfig'

export const index = () => {
    return axios({url:apiUrl + "/cars",
    method: "get"
    })
}

export const show = (id) => {
    return axios({url:apiUrl + "/cars/" +id,
    method: "get"
    })
}

export const create = (car) => {
    return axios({url:apiUrl + "/cars/",
    method: "post",
    data:{car:car}
    })
}

export const update = (car,id) => {
    return axios({url:apiUrl + "/cars/" + id,
        method: "put",
        data:{car:car}
    })
}
      
export const destroy = (id) => {
    return axios({url:apiUrl + "/cars/" +id,
    method: "delete"
    })
}