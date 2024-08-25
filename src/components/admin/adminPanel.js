import React, { useState } from "react";
import homePageData from "../../utils/homePageData.json";
import "./adminPanel.css"; // Import the CSS file for styling

const AdminPanel = () => {
  const [adminData, setAdminData] = useState(() => {
    const savedData = localStorage.getItem("homepageData");
    return savedData ? JSON.parse(savedData) : homePageData;
  });

  const handleChange = (section, index, field, value) => {
    const newData = { ...adminData };
    newData[section][index][field] = value;
    setAdminData(newData);
  };

  const saveData = () => {
    localStorage.setItem("homepageData", JSON.stringify(adminData));
    alert("Data saved");
  };

  return (
    <div className="admin-panel">
      <h2 className="admin-panel-title">Admin Panel</h2>
      <h3 className="section-title">Hero Section</h3>
      <div className="section-container">
        {adminData.hero.map((item, index) => (
          <div className="item-container" key={item.id}>
            <input
              type="text"
              className="input-field"
              value={item.title}
              onChange={(e) =>
                handleChange("hero", index, "title", e.target.value)
              }
              placeholder="Title"
            />
            <textarea
              className="textarea-field"
              value={item.description}
              onChange={(e) =>
                handleChange("hero", index, "description", e.target.value)
              }
              placeholder="Description"
            />
            <input
              type="text"
              className="input-field"
              value={item.image}
              onChange={(e) =>
                handleChange("hero", index, "image", e.target.value)
              }
              placeholder="Image URL"
            />
          </div>
        ))}
      </div>

      <h3 className="section-title">Second View Section</h3>
      <div className="section-container">
        {adminData.secondView.map((item, index) => (
          <div className="item-container" key={item.id}>
            <input
              type="text"
              className="input-field"
              value={item.title}
              onChange={(e) =>
                handleChange("secondView", index, "title", e.target.value)
              }
              placeholder="Title"
            />
            <textarea
              className="textarea-field"
              value={item.description}
              onChange={(e) =>
                handleChange("secondView", index, "description", e.target.value)
              }
              placeholder="Description"
            />
          </div>
        ))}
      </div>

      <button className="save-button" onClick={saveData}>
        Save Data
      </button>
    </div>
  );
};

export default AdminPanel;
