import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="app-shell">

    <aside class="sidebar">
      <div class="brand">
        <div class="brand-logo">🌾</div>

        <div>
          <h1>CropAI</h1>
          <p>Smart Agriculture</p>
        </div>
      </div>

      <nav class="navigation">
        <a href="#dashboard" class="nav-link active" data-page="dashboard">
          <span>⌂</span>
          Dashboard
        </a>

        <a href="#yield" class="nav-link" data-page="yield">
          <span>📊</span>
          Yield Prediction
        </a>

        <a href="#disease" class="nav-link" data-page="disease">
          <span>🍃</span>
          Disease Detection
        </a>

        <a href="#history" class="nav-link" data-page="history">
          <span>🕘</span>
          History
        </a>

        <a href="#reports" class="nav-link" data-page="reports">
          <span>📄</span>
          Reports
        </a>
      </nav>

      <div class="sidebar-footer">
        <a href="#settings" class="nav-link" data-page="settings">
          <span>⚙</span>
          Settings
        </a>
      </div>
    </aside>

    <div class="main">

      <header class="topbar">
        <div>
          <p class="eyebrow">AI AGRICULTURE PLATFORM</p>
          <h2 id="pageTitle">Crop Intelligence Dashboard</h2>
        </div>

        <div class="system-status">
          <span class="status-dot"></span>
          System Ready
        </div>
      </header>

      <main class="content">

        <!-- DASHBOARD -->

        <section id="dashboardPage" class="page active-page">

          <section id="dashboard" class="hero">
            <div class="hero-content">
              <span class="label">WELCOME TO CROP AI</span>

              <h3>
                Make smarter decisions for your crops.
              </h3>

              <p>
                Predict crop yield and identify possible pests
                and diseases using artificial intelligence.
              </p>
            </div>

            <div class="hero-icon">🌱</div>
          </section>

          <section class="stats-grid">

            <article class="stat-card">
              <span>Yield Predictions</span>
              <strong id="predictionCount">0</strong>
              <small>Total predictions</small>
            </article>

            <article class="stat-card">
              <span>Leaf Analyses</span>
              <strong id="analysisCount">0</strong>
              <small>Total analyses</small>
            </article>

            <article class="stat-card">
              <span>System</span>
              <strong>Ready</strong>
              <small>AI services available</small>
            </article>

          </section>

          <section class="quick-actions">
            <div class="section-heading">
              <div>
                <span class="label">QUICK ACTIONS</span>
                <h3>Choose a prediction tool</h3>
              </div>
            </div>

            <div class="action-grid">

              <button class="action-card" data-page="yield">
                <span class="action-icon">📊</span>
                <strong>Predict Crop Yield</strong>
                <small>Estimate expected crop production</small>
              </button>

              <button class="action-card" data-page="disease">
                <span class="action-icon">🍃</span>
                <strong>Analyze Leaf</strong>
                <small>Check a leaf image for disease</small>
              </button>

            </div>
          </section>

        </section>


        <!-- YIELD -->

        <section id="yieldPage" class="page">

          <div class="section-heading">
            <div>
              <span class="label">YIELD PREDICTION</span>
              <h3>Predict Crop Yield</h3>
            </div>

            <span class="badge">AI Prediction</span>
          </div>

          <div class="card">

            <div class="form-grid">

              <div class="form-group">
                <label for="crop">Crop Type</label>
                <select id="crop">
                  <option value="">Select crop</option>
                  <option value="Maize">Maize</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Soybean">Soybean</option>
                  <option value="Rice">Rice</option>
                  <option value="Potato">Potato</option>
                </select>
              </div>

              <div class="form-group">
                <label for="location">Location</label>
                <input id="location" type="text" placeholder="e.g. Limpopo" />
              </div>

              <div class="form-group">
                <label for="farmSize">Farm Size (hectares)</label>
                <input id="farmSize" type="number" min="0" step="0.1" placeholder="e.g. 10" />
              </div>

              <div class="form-group">
                <label for="soil">Soil Type</label>
                <select id="soil">
                  <option value="">Select soil</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Clay">Clay</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Silty">Silty</option>
                </select>
              </div>

              <div class="form-group">
                <label for="rainfall">Rainfall (mm)</label>
                <input id="rainfall" type="number" min="0" placeholder="e.g. 650" />
              </div>

              <div class="form-group">
                <label for="temperature">Average Temperature (°C)</label>
                <input id="temperature" type="number" step="0.1" placeholder="e.g. 22" />
              </div>

              <div class="form-group">
                <label for="fertilizer">Fertilizer (kg)</label>
                <input id="fertilizer" type="number" min="0" placeholder="e.g. 100" />
              </div>

              <div class="form-group">
                <label for="previousYield">Previous Yield (tons)</label>
                <input id="previousYield" type="number" min="0" step="0.1" placeholder="e.g. 4.5" />
              </div>

            </div>

            <div id="formError" class="form-error"></div>

            <div class="form-actions">
              <button type="button" id="resetBtn" class="secondary-btn">
                Reset
              </button>

              <button type="button" id="predictBtn" class="primary-btn">
                Predict Yield <span>→</span>
              </button>
            </div>

          </div>

          <section id="resultCard" class="card result-card hidden">

            <div class="result-heading">
              <div>
                <span class="label">PREDICTION RESULT</span>
                <h3>Estimated Crop Yield</h3>
              </div>

              <span class="confidence">
                Confidence:
                <strong id="confidenceResult">--</strong>
              </span>
            </div>

            <div class="result-grid">

              <div class="result-item">
                <span>Predicted Yield</span>
                <strong id="yieldResult">--</strong>
                <small>tons / hectare</small>
              </div>

              <div class="result-item">
                <span>Expected Production</span>
                <strong id="productionResult">--</strong>
                <small>tons total</small>
              </div>

              <div class="result-item">
                <span>Crop</span>
                <strong id="cropResult">--</strong>
                <small>selected crop</small>
              </div>

            </div>

          </section>

        </section>


        <!-- DISEASE -->

        <section id="diseasePage" class="page">

          <div class="section-heading">
            <div>
              <span class="label">DISEASE DETECTION</span>
              <h3>Leaf Image Analysis</h3>
            </div>

            <span class="badge">Image Analysis</span>
          </div>

          <div class="card">

            <div id="uploadArea" class="upload-area">

              <div class="upload-icon">🍃</div>

              <h4>Upload a crop leaf image</h4>

              <p>
                Select a clear photo of the leaf you want to analyze.
              </p>

              <label for="leafImage" class="upload-btn">
                Choose Image
              </label>

              <input
                id="leafImage"
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                hidden
              />

            </div>

            <div id="imagePreviewContainer" class="image-preview hidden">

              <img id="imagePreview" alt="Selected crop leaf" />

              <button id="removeImageBtn" class="secondary-btn">
                Remove Image
              </button>

              <button id="analyzeBtn" class="primary-btn">
                Analyze Leaf
              </button>

            </div>

            <div id="diseaseError" class="form-error"></div>

          </div>

          <section id="diseaseResult" class="card disease-result hidden">

            <div class="result-heading">

              <div>
                <span class="label">ANALYSIS RESULT</span>
                <h3 id="diseaseName">--</h3>
              </div>

              <span class="confidence">
                Confidence:
                <strong id="diseaseConfidence">--</strong>
              </span>

            </div>

            <div class="recommendation">
              <span>Recommendation</span>
              <p id="diseaseRecommendation">--</p>
            </div>

          </section>

        </section>


        <!-- HISTORY -->

        <section id="historyPage" class="page">

          <div class="section-heading">
            <div>
              <span class="label">HISTORY</span>
              <h3>Prediction History</h3>
            </div>

            <button id="clearHistoryBtn" class="secondary-btn">
              Clear History
            </button>
          </div>

          <div class="card history-card">

            <div id="emptyHistory" class="empty-state">
              <div>🕘</div>
              <h4>No predictions yet</h4>
              <p>
                Your crop yield and disease analyses will appear here.
              </p>
            </div>

            <div id="historyTableContainer" class="history-table-container hidden">

              <table class="history-table">

                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Crop</th>
                    <th>Result</th>
                    <th>Confidence</th>
                  </tr>
                </thead>

                <tbody id="historyTableBody"></tbody>

              </table>

            </div>

          </div>

        </section>


        <!-- REPORTS -->

        <section id="reportsPage" class="page">

          <div class="section-heading">
            <div>
              <span class="label">REPORTS</span>
              <h3>Reports</h3>
            </div>
          </div>

          <div class="card placeholder-card">
            <div class="placeholder-icon">📄</div>
            <h4>Reports module</h4>
            <p>
              Prediction reports and exports will be added here.
            </p>
          </div>

        </section>


        <!-- SETTINGS -->

        <section id="settingsPage" class="page">

          <div class="section-heading">
            <div>
              <span class="label">SETTINGS</span>
              <h3>System Settings</h3>
            </div>
          </div>

          <div class="card placeholder-card">
            <div class="placeholder-icon">⚙</div>
            <h4>Settings module</h4>
            <p>
              Application settings will be added here.
            </p>
          </div>

        </section>

      </main>
    </div>
  </div>
`;


// --------------------------------------
// NAVIGATION
// --------------------------------------

const pages = {
  dashboard: document.querySelector("#dashboardPage"),
  yield: document.querySelector("#yieldPage"),
  disease: document.querySelector("#diseasePage"),
  history: document.querySelector("#historyPage"),
  reports: document.querySelector("#reportsPage"),
  settings: document.querySelector("#settingsPage"),
};

const pageTitles = {
  dashboard: "Crop Intelligence Dashboard",
  yield: "Crop Yield Prediction",
  disease: "Leaf Disease Detection",
  history: "Prediction History",
  reports: "Reports",
  settings: "System Settings",
};

function showPage(pageName) {
  Object.values(pages).forEach((page) => {
    page.classList.remove("active-page");
  });

  if (pages[pageName]) {
    pages[pageName].classList.add("active-page");
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");

    if (link.dataset.page === pageName) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll(".action-card").forEach((button) => {
    if (button.dataset.page === pageName) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  document.querySelector("#pageTitle").textContent =
    pageTitles[pageName] || pageTitles.dashboard;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-page]");

  if (!target) {
    return;
  }

  event.preventDefault();

  showPage(target.dataset.page);
});


// --------------------------------------
// HISTORY
// --------------------------------------

function getHistory() {
  try {
    return JSON.parse(
      localStorage.getItem("cropAIHistory") || "[]"
    );
  } catch {
    return [];
  }
}

function saveHistory(item) {
  const history = getHistory();

  history.unshift(item);

  localStorage.setItem(
    "cropAIHistory",
    JSON.stringify(history)
  );

  renderHistory();
}

function renderHistory() {
  const history = getHistory();

  const emptyHistory =
    document.querySelector("#emptyHistory");

  const historyTableContainer =
    document.querySelector("#historyTableContainer");

  const tableBody =
    document.querySelector("#historyTableBody");

  emptyHistory.classList.toggle(
    "hidden",
    history.length > 0
  );

  historyTableContainer.classList.toggle(
    "hidden",
    history.length === 0
  );

  tableBody.innerHTML = "";

  history.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.date}</td>
      <td>${item.type}</td>
      <td>${item.crop || "--"}</td>
      <td>${item.result}</td>
      <td>${item.confidence}</td>
    `;

    tableBody.appendChild(row);
  });

  const yieldCount = history.filter(
    (item) => item.type === "Yield"
  ).length;

  const diseaseCount = history.filter(
    (item) => item.type === "Disease"
  ).length;

  document.querySelector("#predictionCount").textContent =
    yieldCount;

  document.querySelector("#analysisCount").textContent =
    diseaseCount;
}

document
  .querySelector("#clearHistoryBtn")
  .addEventListener("click", () => {
    localStorage.removeItem("cropAIHistory");
    renderHistory();
  });


// --------------------------------------
// YIELD PREDICTION
// --------------------------------------

const predictBtn =
  document.querySelector("#predictBtn");

const resetBtn =
  document.querySelector("#resetBtn");

const resultCard =
  document.querySelector("#resultCard");

const formError =
  document.querySelector("#formError");

function getFormData() {
  return {
    crop: document.querySelector("#crop").value,
    location: document
      .querySelector("#location")
      .value.trim(),

    farmSize: Number(
      document.querySelector("#farmSize").value
    ),

    soil: document.querySelector("#soil").value,

    rainfall: Number(
      document.querySelector("#rainfall").value
    ),

    temperature: Number(
      document.querySelector("#temperature").value
    ),

    fertilizer: Number(
      document.querySelector("#fertilizer").value
    ),

    previousYield: Number(
      document.querySelector("#previousYield").value
    ),
  };
}

function validateYieldForm(data) {
  if (!data.crop) {
    return "Please select a crop.";
  }

  if (!data.farmSize || data.farmSize <= 0) {
    return "Please enter a valid farm size.";
  }

  if (
    !Number.isFinite(data.rainfall) ||
    data.rainfall < 0
  ) {
    return "Please enter a valid rainfall value.";
  }

  if (!Number.isFinite(data.temperature)) {
    return "Please enter the temperature.";
  }

  return "";
}

predictBtn.addEventListener("click", async () => {
  formError.textContent = "";

  const data = getFormData();

  const error = validateYieldForm(data);

  if (error) {
    formError.textContent = error;
    return;
  }

  predictBtn.disabled = true;
  predictBtn.textContent = "Predicting...";

  try {
    const response = await fetch(
      "http://localhost:5000/api/yield/predict",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Prediction failed."
      );
    }

    document.querySelector("#yieldResult").textContent =
      result.prediction.predictedYield.toFixed(2);

    document.querySelector("#productionResult").textContent =
      result.prediction.expectedProduction.toFixed(2);

    document.querySelector("#cropResult").textContent =
      result.prediction.crop;

    document.querySelector(
      "#confidenceResult"
    ).textContent =
      `${result.prediction.confidence}%`;

    resultCard.classList.remove("hidden");

    saveHistory({
      date: new Date().toLocaleString(),
      type: "Yield",
      crop: result.prediction.crop,
      result:
        `${result.prediction.predictedYield.toFixed(2)} t/ha`,
      confidence:
        `${result.prediction.confidence}%`,
    });

  } catch (error) {
    console.error(error);

    formError.textContent =
      "Unable to connect to the backend. Make sure the server is running on port 5000.";
  } finally {
    predictBtn.disabled = false;
    predictBtn.innerHTML =
      'Predict Yield <span>→</span>';
  }
});

resetBtn.addEventListener("click", () => {
  document
    .querySelectorAll("#yieldPage input, #yieldPage select")
    .forEach((element) => {
      element.value = "";
    });

  formError.textContent = "";
  resultCard.classList.add("hidden");
});


// --------------------------------------
// DISEASE DETECTION
// --------------------------------------

const leafImage =
  document.querySelector("#leafImage");

const imagePreviewContainer =
  document.querySelector("#imagePreviewContainer");

const imagePreview =
  document.querySelector("#imagePreview");

const uploadArea =
  document.querySelector("#uploadArea");

const analyzeBtn =
  document.querySelector("#analyzeBtn");

const removeImageBtn =
  document.querySelector("#removeImageBtn");

const diseaseResult =
  document.querySelector("#diseaseResult");

const diseaseError =
  document.querySelector("#diseaseError");

leafImage.addEventListener("change", () => {
  diseaseError.textContent = "";

  const file = leafImage.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    diseaseError.textContent =
      "Please select a valid image.";

    leafImage.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = (event) => {
    imagePreview.src = event.target.result;

    uploadArea.classList.add("hidden");

    imagePreviewContainer.classList.remove(
      "hidden"
    );

    diseaseResult.classList.add("hidden");
  };

  reader.readAsDataURL(file);
});

removeImageBtn.addEventListener("click", () => {
  leafImage.value = "";

  imagePreview.src = "";

  imagePreviewContainer.classList.add(
    "hidden"
  );

  uploadArea.classList.remove("hidden");

  diseaseResult.classList.add("hidden");
});

analyzeBtn.addEventListener("click", async () => {
  const file = leafImage.files[0];

  if (!file) {
    diseaseError.textContent =
      "Please select a leaf image first.";

    return;
  }

  diseaseError.textContent = "";

  analyzeBtn.disabled = true;
  analyzeBtn.textContent = "Analyzing...";

  try {
    const formData = new FormData();

    formData.append("image", file);

    const response = await fetch(
      "http://localhost:5000/api/disease/analyze",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Disease analysis failed."
      );
    }

    document.querySelector("#diseaseName").textContent =
      result.analysis.disease;

    document.querySelector(
      "#diseaseConfidence"
    ).textContent =
      `${result.analysis.confidence}%`;

    document.querySelector(
      "#diseaseRecommendation"
    ).textContent =
      result.analysis.recommendation;

    diseaseResult.classList.remove("hidden");

    saveHistory({
      date: new Date().toLocaleString(),
      type: "Disease",
      crop: result.analysis.crop,
      result: result.analysis.disease,
      confidence:
        `${result.analysis.confidence}%`,
    });

  } catch (error) {
    console.error(error);

    diseaseError.textContent =
      "Unable to analyze the image. Make sure the backend is running.";
  } finally {
    analyzeBtn.disabled = false;
    analyzeBtn.textContent = "Analyze Leaf";
  }
});


// --------------------------------------
// START
// --------------------------------------

renderHistory();
showPage("dashboard");