import React from "react";
// Осы жерды тоже чек жасап караш может ошибка болып калган жокпа <form action=""></form> нан
// А так мына жер чисто бутстрап
export default function Login() {
  return (
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">Login</h1>
          <form action="/login" method="POST">
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block ">
              Submit
            </button>
            <form>
              <p className="lead mt-4">
                Don't have an account yet? <a href="/register">Sign up</a>
              </p>
            </form>
          </form>
        </div>
      </div>
    </div>
  );
}
