import React, { useState } from "react";
import "./App.css";

function App() {
  const [lender, setLender] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const verifyLender = () => {
    if (!lender.trim()) {
      alert("Please enter a lender name or app link.");
      return;
    }

    setResult(null);
    setLoading(true);

    // Demo verification animation
    setTimeout(() => {
      setLoading(false);

      setResult({
        score: 18,
        status: "FRAUD RISK",
        message: "Multiple red flags were detected during verification.",
      });
    }, 3500);
  };

  const checkAnother = () => {
    setLender("");
    setResult(null);
    setLoading(false);
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">🛡️</div>

          <div>
            <h2>
              TrustLens<span>AI</span>
            </h2>

            <p>Smart lender verification</p>
          </div>
        </div>

        <div className="nav-right">
          <div className="system-status">
            <span className="online-dot"></span>
            System Online
          </div>

          <button className="nav-report">⚑ Report</button>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-badge">✨ AI-POWERED FINANCIAL SAFETY</div>

        <h1>
          Verify Before
          <span>You Trust.</span>
        </h1>

        <p className="hero-description">
          Check whether a lender or loan app is legitimate before sharing your
          personal information or paying any upfront fees.
        </p>

        {/* ================= SEARCH CARD ================= */}

        <div className="search-card">
          <div className="search-heading">
            <div className="search-icon">🔍</div>

            <div>
              <h3>Verify a Lender</h3>

              <p>Enter a lender name, app link or registration number</p>
            </div>
          </div>

          <div className="search-box">
            <input
              type="text"
              value={lender}
              onChange={(e) => setLender(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  verifyLender();
                }
              }}
              placeholder="e.g. QuickCash Loans"
            />

            <button
              className="verify-button"
              onClick={verifyLender}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="button-spinner"></span>
                  Checking...
                </>
              ) : (
                <>🛡️ Verify Now</>
              )}
            </button>
          </div>

          <div className="search-features">
            <span>✓ No documents required</span>

            <span>⚡ Instant analysis</span>

            <span>🔒 Privacy protected</span>
          </div>
        </div>
      </section>

      {/* ================= LOADING / VERIFICATION ================= */}

      {loading && (
        <section className="verification-section">
          <div className="section-top">
            <div>
              <p className="small-title">VERIFICATION ENGINE</p>

              <h2>Analyzing lender...</h2>
            </div>

            <div className="live-scan">
              <span></span>
              LIVE SCAN
            </div>
          </div>

          <div className="checks-grid">
            <Check
              icon="🏛️"
              title="Regulatory Licence"
              text="Checking lender registration..."
            />

            <Check
              icon="📱"
              title="App Permissions"
              text="Checking requested permissions..."
            />

            <Check
              icon="👥"
              title="Fraud Reports"
              text="Checking community reports..."
            />

            <Check
              icon="🛡️"
              title="Developer History"
              text="Checking developer reputation..."
            />
          </div>

          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>
        </section>
      )}

      {/* ================= RESULT ================= */}

      {result && !loading && (
        <section className="result-section">
          <div className="result-card">
            <div className="result-header">
              <div>
                <p className="small-title">VERIFICATION RESULT</p>

                <h2>{lender}</h2>
              </div>

              <div className="fraud-badge">⚠ {result.status}</div>
            </div>

            {/* SCORE */}

            <div className="score-area">
              <div className="score-circle">
                <div className="score-inner">
                  <strong>{result.score}</strong>

                  <span>/100</span>
                </div>
              </div>

              <div className="score-info">
                <h3>Low Trust Score</h3>

                <p>{result.message}</p>
              </div>
            </div>

            {/* RED FLAGS */}

            <div className="red-flags">
              <h3>⚠ Why this lender is risky</h3>

              <div className="flag-card">
                <div className="flag-icon">✕</div>

                <div>
                  <strong>No lender licence found</strong>

                  <p>No valid regulatory registration was detected.</p>
                </div>

                <span className="fail">FAIL</span>
              </div>

              <div className="flag-card">
                <div className="flag-icon">✕</div>

                <div>
                  <strong>Requests contacts and photos</strong>

                  <p>The requested permissions may expose sensitive data.</p>
                </div>

                <span className="fail">FAIL</span>
              </div>

              <div className="flag-card">
                <div className="warning-icon">!</div>

                <div>
                  <strong>Upfront fee reported</strong>

                  <p>Multiple community reports mention advance payment.</p>
                </div>

                <span className="reports">14 REPORTS</span>
              </div>
            </div>

            {/* SAFETY WARNING */}

            <div className="safety-warning">
              <div className="safety-icon">🛡️</div>

              <div>
                <strong>Protect your personal information</strong>

                <p>
                  Do not upload your ID, bank details, selfie or OTP to this
                  lender.
                </p>
              </div>
            </div>

            {/* ACTIONS */}

            <div className="result-buttons">
              <button className="secondary-button" onClick={checkAnother}>
                ↻ Check Another
              </button>

              <button className="danger-button">⚑ Report Lender</button>
            </div>
          </div>
        </section>
      )}

      {/* ================= FEATURES ================= */}

      <section className="features-section">
        <div className="section-heading">
          <p className="small-title">HOW IT WORKS</p>

          <h2>
            Four checks between you
            <span> and a scam.</span>
          </h2>

          <p>
            Every feature answers one question:
            <b> Is it safe to continue?</b>
          </p>
        </div>

        <div className="feature-grid">
          <Feature
            number="01"
            icon="📊"
            title="Instant Trust Score"
            text="A weighted score based on licensing, permissions, developer history and user reports."
          />

          <Feature
            number="02"
            icon="⚠️"
            title="Red-Flag Explainer"
            text="Clear explanations show exactly what failed and why."
          />

          <Feature
            number="03"
            icon="👥"
            title="Community Reporting"
            text="Users can flag suspicious lenders and strengthen the shared fraud database."
          />

          <Feature
            number="04"
            icon="📄"
            title="Document Safety Guard"
            text="Warns users before they share ID, bank details or selfies."
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div>
          🛡️ <strong>TrustLens AI</strong>
        </div>

        <p>Verify first. Trust later.</p>

        <span>Hackathon Prototype • 2026</span>
      </footer>
    </div>
  );
}

/* ================= CHECK COMPONENT ================= */

function Check({ icon, title, text }) {
  return (
    <div className="check-card">
      <div className="check-icon">{icon}</div>

      <div className="check-content">
        <h3>{title}</h3>

        <p>{text}</p>
      </div>

      <div className="checking">
        <span></span>
        CHECKING
      </div>
    </div>
  );
}

/* ================= FEATURE COMPONENT ================= */

function Feature({ number, icon, title, text }) {
  return (
    <div className="feature-card">
      <span className="feature-number">{number}</span>

      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

export default App;
