import React from "react";
// Самый биринши пэйджго
export default function Welcome() {
  return (
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <div className="card card-body text-center">
          <h1 style={{ color: "#1e2b37" }}>Welcome</h1>
          <p>Create an account or login</p>
          <a href="/register" className="btn btn-primary btn-block mb-2">
            Register
          </a>
          <a href="/login" className="btn btn-secondary btn-block">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
