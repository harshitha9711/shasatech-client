import dashboardImg from "../../assets/erp/dashboard.png";
import studentsImg from "../../assets/erp/student.png";
import attendanceImg from "../../assets/erp/attendance.png";
import feesImg from "../../assets/erp/fees.png";
import { Link } from "react-router-dom";
import "../../styles/service-detail.css";

function SchoolManagement() {
  return (
    <div className="service-detail">

      {/* HERO */}

      <section className="service-hero">

        <h1>School ERP Software</h1>

        <p>
          A complete digital platform for managing
          students, teachers, attendance, fees,
          examinations and school administration
          from a single dashboard.
        </p>

      </section>

      {/* MAIN SCREENSHOT */}

      <section className="erp-showcase">

        <img
          src={dashboardImg}
          alt="School ERP Dashboard"
        />

      </section>

      {/* FEATURES */}

      <section className="service-features">

        <div className="section-header">
          <h2>Key Features</h2>

          <p>
            Everything your institution needs
            to manage daily operations efficiently.
          </p>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Student Management</h3>

            <p>
              Complete student records, admissions,
              academic history and profile management.
            </p>
          </div>

          <div className="feature-card">
            <h3>Attendance Tracking</h3>

            <p>
              Daily attendance monitoring with
              detailed reports and analytics.
            </p>
          </div>

          <div className="feature-card">
            <h3>Fee Management</h3>

            <p>
              Track payments, balances,
              receipts and fee reports.
            </p>
          </div>

          <div className="feature-card">
            <h3>Examinations</h3>

            <p>
              Manage exams, marks,
              report cards and results.
            </p>
          </div>

          <div className="feature-card">
            <h3>Teacher Management</h3>

            <p>
              Organize staff information,
              schedules and academic records.
            </p>
          </div>

          <div className="feature-card">
            <h3>Reports & Analytics</h3>

            <p>
              Generate insightful reports for
              administration and decision making.
            </p>
          </div>

        </div>

      </section>

      {/* SCREENSHOT GALLERY */}

      <section className="erp-gallery">

        <div className="section-header">
          <h2>System Screenshots</h2>

          <p>
            Explore different modules of the
            School ERP platform.
          </p>
        </div>

        <div className="gallery-grid">

          <img
            src={studentsImg}
            alt="Students Module"
          />

          <img
            src={attendanceImg}
            alt="Attendance Module"
          />

          <img
            src={feesImg}
            alt="Fee Management"
          />

        </div>

      </section>

      {/* BENEFITS */}

      <section className="service-benefits">

        <div className="section-header">
          <h2>Benefits For Schools</h2>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            Save Administrative Time
          </div>

          <div className="benefit-card">
            Improve Data Accuracy
          </div>

          <div className="benefit-card">
            Better Parent Communication
          </div>

          <div className="benefit-card">
            Faster Report Generation
          </div>

          <div className="benefit-card">
            Centralized School Management
          </div>

          <div className="benefit-card">
            Secure Digital Records
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="service-cta">

        <h2>
          Ready To Digitize Your School?
        </h2>

        <p>
          Request a free demonstration and
          discover how Shasa School ERP can
          simplify school management.
        </p>

        <Link to="/contact">
  <button>
    Request a free Demo
  </button>
</Link>

      </section>

    </div>
  );
}

export default SchoolManagement;