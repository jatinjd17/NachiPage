import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { authenticate, isAuth, SignIn } from "../actions/auth";
import Router from "next/router";

const schema = yup.object().shape({
  email: yup.string().email().required().lowercase(),
  password: yup.string().min(4).required().lowercase(),
});

function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    SignIn(data)
      .then((data) => {
        console.log(data);
        authenticate(data, () => {
          if (isAuth()) {
            Router.push("/");
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="bg-gray-200 2xl:mx-60 xl:mx-60 lg:mx-60 md:mx-20 sm:mx-5 shadow-xl my-24 rounded-lg">
        <div className="2xl:mx-10 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex px-10 py-6 flex-col"
          >
            <h1 className="text-5xl mb-6 text-center">SignIn</h1>

            <label className="text-xl mb-2">Email</label>
            <input placeholder="Email" {...register("email")} className="p-1" />
            <p className=" text-red-400 mb-4">{errors.email?.message}</p>
            <label className="text-xl mb-2">Password</label>
            <input
              type="password"
              placeholder="password"
              {...register("password")}
              className="p-1 "
            />
            <p className="text-red-400 mb-1">{errors.password?.message}</p>
            <div className="self-center">
              <button
                type="submit"
                className="mt-7 text-white bg-red-500 rounded-md w-20 px-5 py-2 hover:bg-red-400"
              >
                SignIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
