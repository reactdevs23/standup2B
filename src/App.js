import { useState } from "react";
import MainComponent from "./components/MaiComponent/MainComponent";
import CloseIcon from "./images/CloseIcon";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",

    background: "#fff",
    header: {
      heading: "Daily Stand Up",
      headingColor: "#000",
      date: "Thursday, 8. Feb 2024",
      dateColor: "#667085",
      background: "#F2F4F7",
    },

    members: [
      {
        nameContainer: { name: "CW", color: "#fff", background: "#7F56D9" },
        border: "1px solid #D0D5DD",
        boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
        yesterday: {
          title: "Yesterday",
          titleColor: "#98A2B3",

          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        today: {
          title: "TODAY",
          titleColor: "#98A2B3",
          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        impediment: {
          title: "Impediments",
          titleColor: "#D92D20",
          background: "#F5E8E8",
          icon: <CloseIcon color="#D92D20" />,
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
      },
      {
        nameContainer: { name: "Zp", color: "#fff", background: "#444CE7" },
        border: "1px solid #D0D5DD",
        boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
        yesterday: {
          title: "Yesterday",
          titleColor: "#98A2B3",

          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        today: {
          title: "TODAY",
          titleColor: "#98A2B3",
          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
      },
      {
        nameContainer: { name: "Bz", color: "#fff", background: "#155EEF" },
        border: "1px solid #D0D5DD",
        boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
        yesterday: {
          title: "Yesterday",
          titleColor: "#98A2B3",

          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        today: {
          title: "TODAY",
          titleColor: "#98A2B3",
          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        impediment: {
          title: "Impediments",
          titleColor: "#D92D20",
          background: "#F5E8E8",
          icon: <CloseIcon color="#D92D20" />,
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
      },
      {
        nameContainer: { name: "Mk", color: "#fff", background: "#088AB2" },
        border: "1px solid #D0D5DD",
        boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
        yesterday: {
          title: "Yesterday",
          titleColor: "#98A2B3",

          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        today: {
          title: "TODAY",
          titleColor: "#98A2B3",
          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        impediment: {
          title: "Impediments",
          titleColor: "#D92D20",
          background: "#F5E8E8",
          icon: <CloseIcon color="#D92D20" />,
          lists: ["Key Task Short Description"],
        },
      },
      {
        nameContainer: { name: "Bv", color: "#fff", background: "#0086C9" },
        border: "1px solid #D0D5DD",
        boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
        yesterday: {
          title: "Yesterday",
          titleColor: "#98A2B3",

          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        today: {
          title: "TODAY",
          titleColor: "#98A2B3",
          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        impediment: {
          title: "Impediments",
          titleColor: "#D92D20",
          background: "#F5E8E8",
          icon: <CloseIcon color="#D92D20" />,
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
      },
      {
        nameContainer: { name: "Bz", color: "#fff", background: "#155EEF" },
        border: "1px solid #D0D5DD",
        boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
        yesterday: {
          title: "Yesterday",
          titleColor: "#98A2B3",

          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        today: {
          title: "TODAY",
          titleColor: "#98A2B3",
          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        impediment: {
          title: "Impediments",
          titleColor: "#D92D20",
          background: "#F5E8E8",
          icon: <CloseIcon color="#D92D20" />,
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
      },
      {
        nameContainer: { name: "Rt", color: "#fff", background: "#1570EF" },
        border: "1px solid #D0D5DD",
        boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
        yesterday: {
          title: "Yesterday",
          titleColor: "#98A2B3",

          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        today: {
          title: "TODAY",
          titleColor: "#98A2B3",
          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        impediment: {
          title: "Impediments",
          titleColor: "#D92D20",
          background: "#F5E8E8",
          icon: <CloseIcon color="#D92D20" />,
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
      },
      {
        nameContainer: { name: "Uv", color: "#fff", background: "#0E9384" },
        border: "1px solid #D0D5DD",
        boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
        yesterday: {
          title: "Yesterday",
          titleColor: "#98A2B3",

          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        today: {
          title: "TODAY",
          titleColor: "#98A2B3",
          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
      },
      {
        nameContainer: { name: "Ap", color: "#fff", background: "#099250" },
        border: "1px solid #D0D5DD",
        boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
        yesterday: {
          title: "Yesterday",
          titleColor: "#98A2B3",

          background: "#FFF",
          lists: [
            "Key Task Short Description",
            "Key Task Short Lorem asdf asdf asdf asdf asdfa asedfas asgasd asdgas",
          ],
        },
        today: {
          title: "TODAY",
          titleColor: "#98A2B3",
          background: "#FFF",
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
        impediment: {
          title: "Impediments",
          titleColor: "#D92D20",
          background: "#F5E8E8",
          icon: <CloseIcon color="#D92D20" />,
          lists: ["Key Task Short Description", "Key Task Short Lorem"],
        },
      },
    ],
  });

  return (
    <div
      style={{
        fontFamily: allData.fontFamily,
        background: allData.background,
      }}
    >
      <MainComponent {...allData} border={allData.circleBorder} />
    </div>
  );
}

export default App;
