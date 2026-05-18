/**
 * Contient toutes les informations relatives au projets.
 */

import wallpaperGeneratorImg from "../public/img/projects/ReviewPilotAI_Image.png";
import neuralNetworkFromScratchImg from "../public/img/projects/trustline Banking Platform Image.png";
import rayTracingImg from "../public/img/projects/Code Flow image.png";

const projects = [
  {
    id: 1,
    title: "ReviewPilot-AI",
 description:
    "ReviewPilot AI is an AI-powered GitHub pull request review assistant featuring GitHub OAuth authentication, Jest/AI review generation, and webhook integration for automated PR feedback.",
    image_path: wallpaperGeneratorImg,
    link: "https://github.com/KhileshMongse18204/reviewpilot-ai",
    color: "#c2410c",
  },
  {
    id: 2,
    title: "trustline Banking Platform",
  description:
    "TrustLine is a full-stack Express.js and MySQL banking demo featuring OAuth, bank linking, card management, UPI, QR payments, notifications, rewards, and transaction tracking.",
 
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/KhileshMongse18204/trustline_banking_Project",
    color: "#0f766e",
  },
  {
    id: 3,
    title: "Code Flow",
  description:
    "Development of a ray tracing system. The aim is to simulate objects and a camera in a 3D space, then realistically reconstruct what the camera would perceive by adjusting textures, colors, or patterns.",
 
    image_path: rayTracingImg,
    link: "https://github.com/KhileshMongse18204/codeflow",
    color: "#6d28d9",
  },
];

export default projects;
