require("es6-promise").polyfill();
require("isomorphic-fetch");
const uuid = require("uuid");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { S3RequestPresigner } = require("@aws-sdk/s3-request-presigner");
const { createRequest } = require("@aws-sdk/util-create-request");
const { formatUrl } = require("@aws-sdk/util-format-url");
const EXPIRATION = 60 * 60 * 1000;
const REGION = "eu-west-2";
const MOVIE_BUCKET = "calendar-video-bucket";
const s3Client = new S3Client(REGION);
const signer = new S3RequestPresigner({ ...s3Client.config });
function createSignedUploadUrl(bucket, uploadKey) {
  console.log("Creating signed url");
  return createRequest(
    s3Client,
    new PutObjectCommand({
      Key: uploadKey,
      Bucket: bucket,
    })
  )
    .then((request) => {
      console.log("Created request", request);
      const expiration = new Date(Date.now() + EXPIRATION);
      console.log("Creating presigned URL");
      return signer.presign(request, expiration);
    })
    .then((unformattedUrl) => {
      console.log("Formatting presigned URL");
      return formatUrl(unformattedUrl);
    });
}
exports.handler = async (event) => {
  console.log("Incoming request");
  // const inputRequest = JSON.parse(event.body);
  // console.log(inputRequest);
  const uploadKey = "uploads/" + uuid.v4();
  const signedUrl = await createSignedUploadUrl(MOVIE_BUCKET, uploadKey);
  console.log("signed url", signedUrl);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,GET",
    },
    body: JSON.stringify({ uploadUrl: signedUrl }),
  };
  console.log("Final response", JSON.stringify(response));
  return response;
};
