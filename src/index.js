function callApi(method, url, opt) {
    const { params, body, cType, wToken, csrfToken } = opt

    var XMLHttpRequest = require('../vendor/xhr2')
    const xhr = new XMLHttpRequest()

    if (params) {
        url = url+params
    }
    xhr.open(method, url)

    if (csrfToken) {
        xhr.setRequestHeader('X-CSRF-TOKEN', csrfToken)
    } if (wToken) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + wToken)
    } 

    return new Promise((resolve, reject) => {
        xhr.onload = (e) => {
            let responses = null;
            if (xhr.status == 400) {
                responses = 'Bad Request | message: permintaan ke url tidak valid!!'
            } else if (xhr.status == 401) {
                responses = 'Unauthorized | message: maaf, sepertinya anda tidak diizinkan!!'
            } else if (xhr.status == 402) {
                responses = 'Payment required | message: permintaan pembayaran tak dapat diselesaikan oleh server karena kesalahan di pihak klien!!'
            } else if (xhr.status == 403) {
                responses = 'Forbidden | message: Akses ke laman ini di tolak oleh sistem!!'
            } else if (xhr.status == 404) {
                responses = 'Not found | message: Halaman tidak ditemukan!!'
            } else if (xhr.status == 405) {
                responses = 'Method not allowed | message: server memahami apa yang diminta browser web, tetapi menolak untuk memenuhi permintaan!!'
            } else {
                responses = JSON.parse(xhr.responseText)
            }
            resolve(responses);
        };
        xhr.onerror = function() {
            reject(xhr.statusText)
        };

        if (body) {
            if (cType === 'file') {
                const formData = new FormData();
                for (const key in body){
                    if(body.hasOwnProperty(key)){
                        formData.append(key, body[key])
                    }
                }
                xhr.send(formData)
            } else {
                xhr.setRequestHeader('Accept', 'application/json')
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.send(JSON.stringify(body))
            }
        } else {
            xhr.send(null)
        }
    });
}

module.exports = {
    callApi
}