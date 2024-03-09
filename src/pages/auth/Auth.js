import React from "react";
import Layout from "../../components/layout/Layout";
import AuthForm from "../../components/authform/AuthForm";

const Auth = () => {
  const hrStyle = "w-[100%] h-[1px] bg-[rgba(255, 255, 255, 0.25)]"
  return (
    <Layout>
      <div className="container mx-auto flex justify-center items-center relative py-[30px] min-h-[90vh] mt-[113px]">
        <AuthForm />
      </div>
      <hr className={hrStyle} />
    </Layout>
  );
};


export default React.memo(Auth);

