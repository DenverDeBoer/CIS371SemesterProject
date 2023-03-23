//https://api.edamam.com/api/recipes/v2?type=public&q=chicken%20alfredo&app_id=93b6ea7f&app_key=d579a7606055c5329149fae116174ee2&ingr=5
let api_id = "93b6ea7f"
let api_key = "d579a7606055c5329149fae116174ee2"
let searchString = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken%20alfredo&app_id=93b6ea7f&app_key=d579a7606055c5329149fae116174ee2&ingr=5"

const http = require('http')
const https = require('https')

module.exports.getJSON = (options, onResult) => {
    console.log("Getting JSON method: ")
    //const port = options.port == 443 ? https : http

    let outpuut = ''

    const req = https.request(options, (res) => {
        console.log('${options.host}: ${res.statusCode}')
        res.setEncoding('utf8')

        res.on('data', (chunk) => {
            output += chunk;
        })

        res.on('end', () => {
            let obj = JSON.parse(output)
            onResult(res.statusCode, obj)
        })

        res.on('error', (err) => {
            res.send('error: ' + err.message)
        })

        res.end()
    })
}