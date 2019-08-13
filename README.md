# aws-xray-playground

learn [AWS X-Ray](https://docs.aws.amazon.com/xray/)

see [`index.js`](index.js)

## Development

```sh
# run x-ray daemon locally (nodejs code sends trace data to it and it forwards it to aws x-ray service)
# see https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon.html 
cd ~/bin/aws-xray-daemon-macos-3.x
./xray_mac -o -n us-east-1 

# run code that generates trace/segment data
npm run dev
```

---

## Screenshots

![](https://www.evernote.com/l/AAGVZf0DvolDI76-xRZeQORjMTr1AwVBu9sB/image.png)

![](https://www.evernote.com/l/AAGO-pxgWP1E1p0JFj_1yMFjnk39AhT6J_wB/image.png)

![](https://www.evernote.com/l/AAGPchPBVx5IOL4fAroHfF3ouneyhZ0dWt4B/image.png)

![](https://www.evernote.com/l/AAG7Hw9JaWlCD6bbhHkqeUc00RnB2uqzHKsB/image.png)

![](https://www.evernote.com/l/AAEZGf40tEtDqLrqyBVl-uQI9TxCzRPKhoUB/image.png)

## Resources

* [aws/aws-xray-sdk-node](https://github.com/aws/aws-xray-sdk-node)
* [aws/aws-xray-sdk-node/blob/master/packages/core/README.md](https://github.com/aws/aws-xray-sdk-node/blob/master/packages/core/README.md)