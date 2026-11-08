const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const project = {
  title: "COMP-4420 IT Inventory Management System",
  description:
    "The IT Inventory Management System is a Java CRUD application for managing electronic devices across a college campus. Authorized university users can sign in, identify their department, and view or manage assigned devices through a simple graphical interface.",
  features: [
    "Create, view, update, and delete device records for laptops, desktop computers, smart boards, printers, routers, switches, and other approved campus electronics.",
    "Validate university credentials and protect inventory actions so only authorized users can access the system.",
    "Track device status and assignments so the college can manage equipment throughout its lifecycle."
  ],
  rules: [
    "Only university email addresses ending in westga.edu may pass email validation.",
    "Only available devices may be assigned to a user.",
    "Device status must be Active, Repairable, or Broken."
  ],
  screenshotPath: "/images/project-running.png",
  repositoryUrl: "https://github.com/GMoore162900/COMP-4420-Project",
  documentationUrl: "/documentation",
  quickstartUrl: "/quickstart",
  featuresUrl: "/features"
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_request, response) => {
  response.render("index", { project });
});

app.get("/documentation", (_request, response) => {
  response.render("documentation", { project });
});

app.get("/quickstart", (_request, response) => {
  response.render("quickstart", { project });
});

app.get("/features", (_request, response) => {
  response.render("features", { project });
});

app.listen(port, () => {
  console.log(`Project site running at http://localhost:${port}`);
});