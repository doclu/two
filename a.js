const http = require('http');
function test(){
    http.get('http://haohuo.snssdk.com/shop/goodsList?shop_id=IafzHA&page=0&pageSize=10', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).data.list[0]);
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}


setInterval(test,5000);