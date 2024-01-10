import Image from "next/image";
import InputArea from "@/components/Login/InputArea";
import LoginForm from "@/components/Login/LoginForm";

export default function Home() {
  return (
    <main className="grid grid-cols-12 grid-rows-[60px_min(500px,_1fr)] gap-4 h-screen">
      <section className="hidden lg:block lg:col-span-6 row-span-2">
        <div className=" flex justify-center h-full flex-col  items-end  text-white ">
          <h1 className=" flex flex-col text-8xl  font-extrabold items-end">
            <span className=" mr-8">See Faster</span>
            <span>Act Faster</span>
          </h1>
          <p className="flex flex-col items-end mt-3">
            <span className=" text-2xl">
              {" "}
              Get access to the memepool with the
            </span>{" "}
            <span className=" text-xl ">lowest latency possible</span>
          </p>
        </div>
      </section>
      <section className="col-span-12 lg:col-span-6 row-span-2">
        <div className=" flex justify-center items-center flex-col w-full h-full">
          <div className="md:bg-white md:rounded-lg p-14 md:shadow">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
