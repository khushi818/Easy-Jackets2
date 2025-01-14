import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Page Not Found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">oops ! Page Not Found</h2>
        <Link className="pnf-btn" to="/">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
