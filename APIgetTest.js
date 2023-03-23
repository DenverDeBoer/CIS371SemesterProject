const test = require('./APITest.js')
const options = {
    host: 'api.edamam.com',
    port: 443,
    path: '/api/recipes/v2?type=public&q=chicken%20alfredo&app_id=93b6ea7f&app_key=d579a7606055c5329149fae116174ee2&ingr=5',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

test.getJSON(options, (statusCode, result) => {
    console.log('onResult: (${statusCode})\n\n${JSON.stringify(result)}')
    
    res.statusCode = statusCode
    res.send(result)
})