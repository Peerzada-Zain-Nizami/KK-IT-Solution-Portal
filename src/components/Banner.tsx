import React from "react";

const Banner = () => {
  const containerStyle = {
    minHeight: "100vh",
    background: "#000814",
    // backgroundImage:
    // 'url("https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px 80px",
    position: "relative",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: "hidden",
  };

  const starsStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at 20% 80%, rgba(33, 150, 243, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(33, 150, 243, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    flex: 1,
    maxWidth: "600px",
  };

  const titleStyle = {
    fontSize: "5.5rem",
    fontWeight: "800",
    color: "#2196F3",
    marginBottom: "30px",
    lineHeight: "1.1",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
    letterSpacing: "-0.02em",
  };

  const subtitleStyle = {
    fontSize: "1.8rem",
    color: "#ffffff",
    marginBottom: "50px",
    fontWeight: "400",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
    opacity: "0.9",
  };

  const buttonStyle = {
    background: "linear-gradient(45deg, #2196F3, #64B5F6)",
    color: "white",
    padding: "20px 50px",
    fontSize: "1.3rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "60px",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(33, 150, 243, 0.4)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
  };

  const devicesContainerStyle = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    gap: "20px",
    alignItems: "center",
    transform: "perspective(1000px) rotateY(-5deg)",
  };

  // Mac Laptop Style
  const macLaptopStyle = {
    width: "320px",
    height: "200px",
    backgroundColor: "#d4d4d4",
    borderRadius: "12px",
    padding: "8px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
    position: "relative",
    marginBottom: "40px",
  };

  const macScreenStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
  };

  const macStandStyle = {
    width: "100px",
    height: "20px",
    backgroundColor: "#d4d4d4",
    borderRadius: "0 0 20px 20px",
    position: "absolute",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  };

  // Windows Laptop Style
  const windowsLaptopStyle = {
    width: "300px",
    height: "180px",
    backgroundColor: "#1a1a1a",
    borderRadius: "8px",
    padding: "6px",
    boxShadow: "0 18px 35px rgba(0, 0, 0, 0.5)",
    position: "relative",
    marginBottom: "30px",
  };

  const windowsScreenStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: "4px",
    overflow: "hidden",
    position: "relative",
  };

  // iPhone Style
  const iphoneStyle = {
    width: "180px",
    height: "360px",
    backgroundColor: "#1a1a1a",
    borderRadius: "25px",
    padding: "6px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
    position: "relative",
    border: "2px solid #333",
  };

  const iphoneScreenStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: "19px",
    overflow: "hidden",
    position: "relative",
  };

  // Android Style
  const androidStyle = {
    width: "170px",
    height: "340px",
    backgroundColor: "#2a2a2a",
    borderRadius: "20px",
    padding: "5px",
    boxShadow: "0 18px 35px rgba(0, 0, 0, 0.5)",
    position: "relative",
    border: "1px solid #444",
  };

  const androidScreenStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: "15px",
    overflow: "hidden",
    position: "relative",
  };

  const statusBarStyle = {
    height: "25px",
    background: "linear-gradient(90deg, #1a1a1a, #2a2a2a)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    fontSize: "10px",
    color: "#fff",
  };

  const appContentStyle = {
    height: "100%",
    background:
      "linear-gradient(135deg, #2196F3 0%, #64B5F6 50%, #90CAF9 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "white",
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = "translateY(-3px)";
    e.target.style.boxShadow = "0 16px 35px rgba(33, 150, 243, 0.5)";
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "0 12px 30px rgba(33, 150, 243, 0.4)";
  };

  return (
    <div style={containerStyle}>
      <div style={starsStyle}></div>

      <div style={contentStyle}>
        <h1 style={titleStyle}>Ignite Your Social World</h1>
        <p style={subtitleStyle}>
          Your Social Hub for Fun, Engagement, and Profits!
        </p>
        <button
          style={buttonStyle}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Get Fired Up
        </button>
      </div>

      <div style={devicesContainerStyle}>
        {/* Mac Laptop */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={macLaptopStyle}>
            <div style={macScreenStyle}>
              <div
                style={{
                  height: "20px",
                  backgroundColor: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#ff5f56",
                    marginRight: "4px",
                  }}
                ></div>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#ffbd2e",
                    marginRight: "4px",
                  }}
                ></div>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#27ca3f",
                  }}
                ></div>
              </div>
              <div style={appContentStyle}>
                <div style={{ fontSize: "40px", marginBottom: "10px" }}>💻</div>
                <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Mac App
                </div>
                <div style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                  Desktop Experience
                </div>
              </div>
            </div>
            <div style={macStandStyle}></div>
          </div>
        </div>

        {/* Windows Laptop */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={windowsLaptopStyle}>
            <div style={windowsScreenStyle}>
              <div
                style={{
                  height: "18px",
                  backgroundColor: "#0078d4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 8px",
                }}
              >
                <div style={{ fontSize: "8px", color: "white" }}>
                  ⊞ Social Ignite
                </div>
                <div style={{ fontSize: "8px", color: "white" }}>⚊ ⬜ ✕</div>
              </div>
              <div style={appContentStyle}>
                <div style={{ fontSize: "35px", marginBottom: "8px" }}>🖥️</div>
                <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  Windows App
                </div>
                <div style={{ fontSize: "0.7rem", opacity: "0.8" }}>
                  PC Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iPhone */}
        <div style={iphoneStyle}>
          <div style={iphoneScreenStyle}>
            <div style={statusBarStyle}>
              <span>9:41</span>
              <span>📶 📶 📶</span>
            </div>
            <div style={appContentStyle}>
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>📱</div>
              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                iOS App
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  opacity: "0.8",
                  marginBottom: "20px",
                }}
              >
                iPhone Experience
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {["🔥", "💎", "⚡", "🌟", "💫", "🎯"].map((emoji, index) => (
                  <div
                    key={index}
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Android Phone */}
        <div style={androidStyle}>
          <div style={androidScreenStyle}>
            <div style={statusBarStyle}>
              <span>9:41</span>
              <span>📶 📶 📶</span>
            </div>
            <div style={appContentStyle}>
              <div style={{ fontSize: "45px", marginBottom: "12px" }}>🤖</div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Android App
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  opacity: "0.8",
                  marginBottom: "15px",
                }}
              >
                Android Experience
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  marginBottom: "15px",
                }}
              >
                {["💬", "👍", "📸", "🎵"].map((icon, index) => (
                  <div
                    key={index}
                    style={{
                      width: "25px",
                      height: "25px",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  width: "80%",
                  height: "25px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                }}
              >
                Download Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
