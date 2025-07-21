import React from "react";

const Banner = () => {
  const isMobile = window.innerWidth < 768;

  // Responsive styles
  const containerStyle = {
    minHeight: "100vh",
    background: "#000814",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: isMobile ? "center" : "space-between",
    alignItems: "center",
    padding: isMobile ? "40px 20px" : "60px 80px",
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
    textAlign: isMobile ? "center" : "left",
    maxWidth: isMobile ? "100%" : "600px",
    marginTop: isMobile ? "50px" : "105px",
  };

  const titleStyle = {
    fontSize: isMobile ? "3rem" : "5.5rem",
    fontWeight: "800",
    color: "#2196F3",
    marginBottom: isMobile ? "20px" : "30px",
    lineHeight: "1.1",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
    letterSpacing: "-0.02em",
  };

  const subtitleStyle = {
    fontSize: isMobile ? "1.2rem" : "1.8rem",
    color: "#ffffff",
    marginBottom: isMobile ? "30px" : "50px",
    fontWeight: "400",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
    opacity: "0.9",
  };

  const buttonStyle = {
    background: "linear-gradient(45deg, #2196F3, #64B5F6)",
    color: "white",
    padding: isMobile ? "15px 30px" : "20px 50px",
    fontSize: isMobile ? "1rem" : "1.3rem",
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
    gap: isMobile ? "15px" : "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    transform: isMobile ? "none" : "perspective(1000px) rotateY(-5deg)",
    marginTop: "105px",
  };

  // Mac Laptop Style
  const macLaptopStyle = {
    width: isMobile ? "220px" : "320px",
    height: isMobile ? "140px" : "200px",
    backgroundColor: "#d4d4d4",
    borderRadius: isMobile ? "10px" : "12px",
    padding: isMobile ? "6px" : "8px",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
    position: "relative",
    marginBottom: isMobile ? "20px" : "40px",
  };

  const macScreenStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: isMobile ? "6px" : "8px",
    overflow: "hidden",
    position: "relative",
  };

  const macStandStyle = {
    width: isMobile ? "70px" : "100px",
    height: isMobile ? "15px" : "20px",
    backgroundColor: "#d4d4d4",
    borderRadius: "0 0 20px 20px",
    position: "absolute",
    bottom: isMobile ? "-15px" : "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  };

  // Windows Laptop Style
  const windowsLaptopStyle = {
    width: isMobile ? "200px" : "300px",
    height: isMobile ? "130px" : "180px",
    backgroundColor: "#1a1a1a",
    borderRadius: isMobile ? "6px" : "8px",
    padding: isMobile ? "5px" : "6px",
    boxShadow: "0 14px 30px rgba(0, 0, 0, 0.5)",
    position: "relative",
    marginBottom: isMobile ? "20px" : "30px",
  };

  const windowsScreenStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: isMobile ? "3px" : "4px",
    overflow: "hidden",
    position: "relative",
  };

  // iPhone Style
  const iphoneStyle = {
    width: isMobile ? "130px" : "180px",
    height: isMobile ? "260px" : "360px",
    backgroundColor: "#1a1a1a",
    borderRadius: isMobile ? "18px" : "25px",
    padding: isMobile ? "5px" : "6px",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.6)",
    position: "relative",
    border: "2px solid #333",
  };

  const iphoneScreenStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: isMobile ? "14px" : "19px",
    overflow: "hidden",
    position: "relative",
  };

  // Android Style
  const androidStyle = {
    width: isMobile ? "120px" : "170px",
    height: isMobile ? "240px" : "340px",
    backgroundColor: "#2a2a2a",
    borderRadius: isMobile ? "15px" : "20px",
    padding: isMobile ? "4px" : "5px",
    boxShadow: "0 14px 30px rgba(0, 0, 0, 0.5)",
    position: "relative",
    border: "1px solid #444",
  };

  const androidScreenStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: isMobile ? "12px" : "15px",
    overflow: "hidden",
    position: "relative",
  };

  const statusBarStyle = {
    height: "20px",
    background: "linear-gradient(90deg, #1a1a1a, #2a2a2a)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 8px",
    fontSize: "9px",
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
        <h1 style={titleStyle}>Empowering Your Digital Future</h1>
        <p style={subtitleStyle}>
          Custom Software Solutions Tailored for Your Business Success
        </p>
        <button
          style={buttonStyle}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Get Started
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
                  height: "16px",
                  backgroundColor: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#ff5f56",
                    marginRight: "3px",
                  }}
                ></div>
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#ffbd2e",
                    marginRight: "3px",
                  }}
                ></div>
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#27ca3f",
                  }}
                ></div>
              </div>
              <div style={appContentStyle}>
                <div
                  style={{
                    fontSize: isMobile ? "28px" : "40px",
                    marginBottom: isMobile ? "8px" : "10px",
                  }}
                >
                  💻
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "1rem" : "1.2rem",
                    fontWeight: "bold",
                    marginBottom: isMobile ? "4px" : "5px",
                  }}
                >
                  Mac App
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "0.6rem" : "0.8rem",
                    opacity: "0.8",
                  }}
                >
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
                  height: "16px",
                  backgroundColor: "#0078d4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 6px",
                }}
              >
                <div
                  style={{
                    fontSize: isMobile ? "7px" : "8px",
                    color: "white",
                  }}
                >
                  ⊞ Social Ignite
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "7px" : "8px",
                    color: "white",
                  }}
                >
                  ⚊ ⬜ ✕
                </div>
              </div>
              <div style={appContentStyle}>
                <div
                  style={{
                    fontSize: isMobile ? "24px" : "35px",
                    marginBottom: isMobile ? "6px" : "8px",
                  }}
                >
                  🖥️
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "1rem" : "1.2rem",
                    fontWeight: "bold",
                    marginBottom: isMobile ? "4px" : "5px",
                  }}
                >
                  Windows App
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "0.6rem" : "0.8rem",
                    opacity: "0.8",
                  }}
                >
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
              <div
                style={{
                  fontSize: isMobile ? "30px" : "50px",
                  marginBottom: isMobile ? "10px" : "15px",
                }}
              >
                📱
              </div>
              <div
                style={{
                  fontSize: isMobile ? "1rem" : "1.3rem",
                  fontWeight: "bold",
                  marginBottom: isMobile ? "4px" : "5px",
                }}
              >
                iOS App
              </div>
              <div
                style={{
                  fontSize: isMobile ? "0.6rem" : "0.8rem",
                  opacity: "0.8",
                  marginBottom: isMobile ? "12px" : "20px",
                }}
              >
                iPhone Experience
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
              <div
                style={{
                  fontSize: isMobile ? "28px" : "45px",
                  marginBottom: isMobile ? "8px" : "12px",
                }}
              >
                🤖
              </div>
              <div
                style={{
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  fontWeight: "bold",
                  marginBottom: isMobile ? "4px" : "5px",
                }}
              >
                Android App
              </div>
              <div
                style={{
                  fontSize: isMobile ? "0.6rem" : "0.8rem",
                  opacity: "0.8",
                  marginBottom: isMobile ? "10px" : "15px",
                }}
              >
                Android Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
