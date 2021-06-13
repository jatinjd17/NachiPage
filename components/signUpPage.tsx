import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { SignUp } from "../actions/auth";

const schema = yup.object().shape({
  name: yup.string().required().lowercase().min(3),
  email: yup.string().required().lowercase().email(),
  channelID: yup.string().required().min(5),
  password: yup.string().required().min(5),
});

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    SignUp(data)
      .then((data) => {
        console.log(data);
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
            <h1 className="text-5xl mb-6 text-center">SignUp</h1>
            <label className="text-xl mb-2">Name</label>
            <input {...register("name")} placeholder="Name" className="p-1 " />
            <p className="text-red-400 mb-4">{errors.name?.message}</p>
            <label className="text-xl mb-2">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="p-1 "
            />
            <p className="text-red-400 mb-4">{errors.email?.message}</p>
            <label className="text-xl mb-1">Your ChannelID</label>
            <input
              {...register("channelID")}
              placeholder="ChannelID"
              className="p-1 "
            />
            <p className=" text-xs text-gray-400">Eg: UXGasbdsadbksdbksad</p>
            <p className="text-red-400 mb-4">{errors.channelID?.message}</p>
            <label className="text-xl mb-2">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="password"
              className="p-1"
            />
            <p className="text-red-400 mb-1">{errors.password?.message}</p>
            <div className="self-center text-center">
              <button
                type="submit"
                className="mt-7 bg-red-500 rounded-md text-white w-20 px-4 py-2 hover:bg-red-400"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
