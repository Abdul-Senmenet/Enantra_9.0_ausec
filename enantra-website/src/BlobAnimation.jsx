import React from "react";
import "./App.css"; // Optional: Use this if you want specific app-wide styles

const BlobAnimation = ({ children }) => {
  return (
    <div style={styles.blobContainer}>
      {/* Dynamic blobs */}
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          style={{
            ...styles.blob,
            ...blobStyles[index],
          }}
        ></div>
      ))}

      {/* Content over the background */}
      <div style={styles.content}>{children}</div>

      {/* Grain effect */}
      <div style={styles.grain}></div>
    </div>
  );
};

const styles = {
  blobContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh", // Makes the height adjust dynamically based on the content
    background: "rgb(93, 65, 106)", // Background color
    overflow: "hidden", // Prevent blobs from extending outside the container
  },
  blob: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    opacity: 0.8,
    animation: "move-smooth 10s infinite cubic-bezier(0.25, 1, 0.5, 1), float 15s infinite ease-in-out alternate",
  },
  content: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 20px", // Add some padding to prevent content from being too close to the edges
  },
  grain: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
    opacity: 0.1,
    zIndex: 10,
  },
};

const blobStyles = [
  {
    width: "150px",
    height: "150px",
    top: "5%",
    left: "10%",
    background: "rgb(247, 169, 113)",
  },
  {
    width: "250px",
    height: "250px",
    top: "40%",
    left: "70%",
    background: "rgb(118, 78, 113)",
    animationDelay: "2s",
  },
  {
    width: "300px",
    height: "300px",
    top: "15%",
    left: "50%",
    background: "rgb(170, 113, 128)",
    animationDelay: "4s",
  },
  {
    width: "200px",
    height: "200px",
    top: "75%",
    left: "20%",
    background: "rgb(222, 143, 77)",
    animationDelay: "6s",
  },
  {
    width: "400px",
    height: "400px",
    top: "60%",
    left: "5%",
    background: "rgb(243, 156, 89)",
    animationDelay: "8s",
  },
  {
    width: "180px",
    height: "180px",
    top: "2%",
    left: "85%",
    background: "rgb(244, 180, 129)",
    animationDelay: "10s",
  },
];

export default BlobAnimation;
