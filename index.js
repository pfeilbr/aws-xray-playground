const AWSXRay = require("aws-xray-sdk");
const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "xray.log" })
  ]
});

AWSXRay.setLogger(logger);
AWSXRay.enableManualMode();

const ns = AWSXRay.getNamespace();

ns.run(() => {
  const segment = new AWSXRay.Segment("service01");
  segment.addAnnotation("annotation-key", "annotation-value");
  segment.addMetadata("metadata-key", "metadata-value");
  const captureFunc = AWSXRay.captureFunc;
  captureFunc(
    "1",
    function(subsegment1) {
      subsegment1.addAnnotation("annotation-key", "annotation-value");
      subsegment1.addMetadata("metadata-key", "metadata-value");
      captureFunc(
        "2",
        function(subsegment2) {
          captureFunc(
            "3",
            function(subsegment3) {
              captureFunc(
                "4",
                function(subsegment4) {
                  captureFunc(
                    "5",
                    function() {
                      //subsegment need not be exposed here since we're not doing anything with it
                      console.log("hello");
                      segment.close();
                    },
                    subsegment4
                  );
                },
                subsegment3
              );
            },
            subsegment2
          );
        },
        subsegment1
      );
    },
    segment
  );

  const segment01 = new AWSXRay.Segment(
    "service02",
    segment.trace_id,
    segment.id
  );
  segment01.addAnnotation("annotation-key", "annotation-value");
  segment01.addMetadata("metadata-key", "metadata-value");
  captureFunc(
    "1",
    function(subsegment1) {
      subsegment1.addAnnotation("annotation-key", "annotation-value");
      subsegment1.addMetadata("metadata-key", "metadata-value");
      captureFunc(
        "2",
        function(subsegment2) {
          captureFunc(
            "3",
            function(subsegment3) {
              captureFunc(
                "4",
                function(subsegment4) {
                  captureFunc(
                    "5",
                    function() {
                      //subsegment need not be exposed here since we're not doing anything with it
                      console.log("hello");
                      segment01.close();
                    },
                    subsegment4
                  );
                },
                subsegment3
              );
            },
            subsegment2
          );
        },
        subsegment1
      );
    },
    segment01
  );
});
