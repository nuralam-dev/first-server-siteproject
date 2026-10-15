import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;

const user = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Software Engineer",
    department: "Engineering",
    active: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Product Manager",
    department: "Product",
    active: true,
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "UI/UX Designer",
    department: "Design",
    active: false,
  },
  {
    id: 4,
    name: "Diana Prince",
    role: "Data Analyst",
    department: "Data",
    active: true,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    role: "DevOps Engineer",
    department: "Engineering",
    active: true,
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    role: "HR Specialist",
    department: "Human Resources",
    active: false,
  },
  {
    id: 7,
    name: "George Clark",
    role: "Marketing Lead",
    department: "Marketing",
    active: true,
  },
  {
    id: 8,
    name: "Hannah Abbott",
    role: "Financial Analyst",
    department: "Finance",
    active: true,
  },
  {
    id: 9,
    name: "Ian Malcolm",
    role: "Security Researcher",
    department: "Engineering",
    active: false,
  },
  {
    id: 10,
    name: "Julia Roberts",
    role: "Content Writer",
    department: "Marketing",
    active: true,
  },
];

app.get("/", (req, res) => {
  res.send(user);
});
app.listen(PORT, () => {
  console.log(`port is open ${PORT}`);
});
