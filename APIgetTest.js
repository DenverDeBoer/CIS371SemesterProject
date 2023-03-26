//const test = require('./APITest.js')
//const options = {
//    host: 'api.edamam.com',
//    port: 443,
//    path: '/api/recipes/v2?type=public&q=chicken%20alfredo&app_id=93b6ea7f&app_key=d579a7606055c5329149fae116174ee2&ingr=5',
//    method: 'GET',
//    headers: {
//        'Content-Type': 'application/json'
//    }
//}

//test.getJSON(options, (statusCode, result) => {
//    console.log('onResult: (${statusCode})\n\n${JSON.stringify(result)}')
    
//    res.statusCode = statusCode
//    res.send(result)
//})

const request = require('request')

request("https://api.edamam.com/api/recipes/v2?type=public&q=chicken%20alfredo&app_id=93b6ea7f&app_key=d579a7606055c5329149fae116174ee2&ingr=5&field=ingredientLines",
function(error, response, body) {
    //console.log(body) prints raw json data
    var replies = JSON.parse(body)
    //replies.length is undefined hence for loop doesn't execute
    console.log(replies.hits.length)
    for(var i = 0; i < replies.length; i++) {
        var r = replies.hits[i]
        console.log(r)
    }
})