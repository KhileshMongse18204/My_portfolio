/**
 * Contient toutes les informations relatives au skills.
 */

import githubImg from "../public/img/skills/github.svg";
import gitImg from "../public/img/skills/git.svg";
import mongodbImg from "../public/img/skills/mongodb.svg";
import postgresqlImg from "../public/img/skills/postgresql.svg";
import csharpImg from "../public/img/skills/csharp.svg";
import cppImg from "../public/img/skills/cpp.svg";
// import javaImg from "../public/img/skills/java.svg";
import cImg from "../public/img/skills/c.svg";
import reactImg from "../public/img/skills/react.svg";
import nodeImg from "../public/img/skills/node.svg";
import javascriptImg from "../public/img/skills/javascript.svg";
import pytorchImg from "../public/img/skills/pytorch.svg";
import tensorflowImg from "../public/img/skills/tensorflow.svg";
import pythonImg from "../public/img/skills/python.svg";
import mysqlImg from "../public/img/skills/mysql.svg";
import typescriptImg from "../public/img/skills/typescript.svg";


//TODO check la traduction

const skills = [
  {
    id: 1,
    title: "Artificial Intelligence",
    subSkills: [
      {
        name: "Python",
        image: pythonImg,
      },
      {
        name: "TensorFlow",
        image: tensorflowImg,
      },
      {
        name: "PyTorch",
        image: pytorchImg,
      },
    ],
  },
  {
    id: 2,
    title: "Web development",
    subSkills: [
      {
        name: "JavaScript",
        image: javascriptImg,
      },
      {
        name: "Node.Js",
        image: nodeImg,
      },
      {
        name: "React",
        image: reactImg,
      },
    ],
  },
  {
    id: 5,
    title: "Low-level development",
    subSkills: [
      {
        name: "C",
        image: cImg,
      },
    ],
  },
  {
    id: 4,
    title: "Object-Oriented",
    subSkills: [
      {
        name: "TypeScript",
        image: typescriptImg,
      },
      {
        name: "C++",
        image: cppImg,
      },
      {
        name: "C#",
        image: csharpImg,
      },
    ],
  },
  {
    id: 3,
    title: "Databases",
    subSkills: [
      {
        name: "PostgreSQL",
        image: postgresqlImg,
      },
      {
        name: "MongoDB",
        image: mongodbImg,
      },
      {
        name: "MySQL",
        image: mysqlImg,
      },
      
    ],
  },
  {
    id: 6,
    title: "Version Control",
    subSkills: [
      {
        name: "Git",
        image: gitImg,
      },
      {
        name: "GitHub",
        image: githubImg,
      },
    ],
  },
];

export default skills;
