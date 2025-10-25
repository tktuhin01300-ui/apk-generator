import express from "express";
import multer from "multer";

const app = express();
const upload = multer();

app.post("/generate", upload.none(), async (req, res) => {
  const { htmlCode, appName, packageName } = req.body;

  // এখন শুধু ডেমো রেসপন্স পাঠাচ্ছি
  res.json({
    success: true,
    apkUrl: "https://yourserver.com/output/app.apk"
  });
});

app.get("/", (req, res) => {
  res.send("✅ APK Generator Server is Running!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
