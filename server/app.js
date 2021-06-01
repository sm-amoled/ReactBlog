import express from "express";

// app 파일을 import, export 시켜서 다른 파일에서 사용할 수 있도록 모듈화
const app = express();

app.get("/");

export default app;
