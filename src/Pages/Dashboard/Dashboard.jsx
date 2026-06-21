import Navbar from "../../components/Navbar/Navbar";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Footer from "../../components/Footer/Footer";
import "../Dashboard/Dashboard.css"
function Dashboard() {
  return (
    <>
      <Navbar />

      <section style={{ padding: "60px 8%" }}>

        <h1 style={{ marginBottom: "30px" }}>
          Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <DashboardCard
            title="Total Rooms"
            value="120"
            color="blue"
          />

          <DashboardCard
            title="Booked Rooms"
            value="48"
            color="green"
          />

          <DashboardCard
            title="Revenue"
            value="₹2,45,000"
            color="orange"
          />

          <DashboardCard
            title="Customers"
            value="560"
            color="crimson"
          />
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Dashboard;