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

## Resources

* [aws/aws-xray-sdk-node](https://github.com/aws/aws-xray-sdk-node)
* [aws/aws-xray-sdk-node/blob/master/packages/core/README.md](https://github.com/aws/aws-xray-sdk-node/blob/master/packages/core/README.md)