const express = require("express");
const AWS = require("aws-sdk");
const fs = require("fs");
const fileType = require("file-type");
const multiparty = require("multiparty");

// NOTE: if you're transpiling, using TS or don't use commonjs for any other reason, you can import instead of require:
// import express from 'express';
// import AWS, { S3 } from 'aws-sdk';
// import fs from 'fs';
// import FileType from 'file-type';
// import multiparty from 'multiparty';

const app = express();

// configure the keys for accessing AWS
AWS.config.update({
  // accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
// NOTE: if you are using TypeScript the typed function signature will be
// const uploadFile = (buffer: S3.Body, name: string, type: { ext: string; mime: string })
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: "public-read",
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  };
  return s3.upload(params).promise();
};

// Define POST route
app.post("/test-upload", (request, response) => {
  const form = new multiparty.Form();
  form.parse(request, async (error, fields, files) => {
    if (error) {
      return response.status(500).send(error);
    }
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = await FileType.fromBuffer(buffer);
      const fileName = `bucketFolder/${Date.now().toString()}`;
      const data = await uploadFile(buffer, fileName, type);
      return response.status(200).send(data);
    } catch (err) {
      return response.status(500).send(err);
    }
  });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT);
console.log(`Server running on port ${PORT}...`);
