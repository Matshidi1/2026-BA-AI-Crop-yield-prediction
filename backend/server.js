const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

const PORT = 5000;

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 10 * 1024 * 1024,
  },

  fileFilter: (req, file, callback) => {
    if (file.mimetype.startsWith("image/")) {
      callback(null, true);
    } else {
      callback(
        new Error("Only image files are allowed.")
      );
    }
  },
});

app.use(cors());

app.use(express.json());


// --------------------------------------
// HEALTH CHECK
// --------------------------------------

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "CropAI backend is running",
  });
});


// --------------------------------------
// CROP YIELD PREDICTION
// --------------------------------------

app.post("/api/yield/predict", (req, res) => {
  const {
    crop,
    location,
    farmSize,
    soil,
    rainfall,
    temperature,
    fertilizer,
    previousYield,
  } = req.body;

  if (!crop || !farmSize || !rainfall || !temperature) {
    return res.status(400).json({
      success: false,
      message:
        "Please provide the required prediction information.",
    });
  }

  /*
   * DEVELOPMENT RESPONSE ONLY.
   *
   * This is NOT the final AI model.
   * We will replace this with the actual
   * crop-yield model later.
   */

  const predictedYield = 4.82;

  const expectedProduction =
    predictedYield * Number(farmSize);

  res.json({
    success: true,

    prediction: {
      crop,
      location,
      soil,

      predictedYield,

      expectedProduction,

      confidence: 87,

      unit: "tons/hectare",
    },
  });
});


// --------------------------------------
// DISEASE DETECTION
// --------------------------------------

app.post(
  "/api/disease/analyze",
  upload.single("image"),
  (req, res) => {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image was uploaded.",
      });
    }

    /*
     * DEVELOPMENT RESPONSE ONLY.
     *
     * The image is successfully received,
     * but there is no trained disease model yet.
     */

    res.json({
      success: true,

      analysis: {
        crop: "Unknown",

        disease: "Sample Leaf Condition",

        confidence: 85,

        recommendation:
          "This is a development result. A trained crop disease model will be connected here later.",
      },
    });
  }
);


// --------------------------------------
// ERROR HANDLER
// --------------------------------------

app.use((error, req, res, next) => {
  console.error(error);

  if (error instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message:
        "The uploaded file is too large or invalid.",
    });
  }

  res.status(500).json({
    success: false,
    message:
      error.message || "Internal server error.",
  });
});


// --------------------------------------
// START SERVER
// --------------------------------------

app.listen(PORT, () => {
  console.log(
    `CropAI backend running at http://localhost:${PORT}`
  );
});