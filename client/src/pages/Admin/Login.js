import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
// formik
import { Formik, Field, Form } from "formik";

function Login() {
  useEffect(() => {
    document.title = "Admin | Login";
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen max-w-2xl mx-auto font-inter">
      <Navbar />
      <div className="px-6 py-12 mt-32">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            setError(null); // Önce hatayı temizle
            try {
              const response = await axios.post(
                "http://localhost:3001/auth/login",
                values
              );

              const { token, user } = response.data;
              localStorage.setItem("token", token);
              localStorage.setItem("user", JSON.stringify(user));

              navigate("/admin/dashboard");
            } catch (err) {
              setError(err.response?.data?.message || "Giriş başarısız");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 max-w-[400px] mx-auto p-4 bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl">
              <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800 dark:text-white/70 mb-10">
                Login
              </h2>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Username
                </label>
                <Field
                  id="username"
                  type="text"
                  name="username"
                  autoComplete="off"
                  className="block w-full py-3 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100
          focus:text-gray-500 focus:outline-none focus:border-gray-200 dark:bg-gray-900/70 dark:border-gray-700 px-4"
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block mt-2 text-sm font-semibold text-gray-600"
                >
                  Password
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  className="block w-full py-3 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100
          focus:text-gray-500 focus:outline-none focus:border-gray-200 dark:bg-gray-900/70 dark:border-gray-700 px-4"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-5 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Giriş Yapılıyor..." : "Login"}
              </button>

              {error && (
                <div className="text-red-500 text-center mt-4">{error}</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
