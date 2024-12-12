import Image from "next/image";
import api from "@/api";
import Link from "next/link";
import { TimeZone } from "@/types";

export const revalidate = 5;

const getCurrentTime = async (): Promise<TimeZone> => {
  const time = await fetch(
    "https://timeapi.io/api/time/current/zone?timeZone=America%2FArgentina%2FBuenos_Aires",
  );
  const resp = await time.json();
  return resp;
};

export default async function StaticHome() {
  const product = await api.product.fetch();
  const { dateTime } = await getCurrentTime();
  return (
    <>
      <div className="ml-14 lg:ml-24 -mb-40 lg:-mb-56">
        <Image
          className="pointer-events-none"
          alt={product.name}
          src={product.image}
          width="440"
          height="440"
          layout="responsive"
        />
      </div>
      <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full hover:shadow-2xl transition pt-16 lg:pt-24">
        <div className="p-4 flex flex-col justify-center items-center border-b">
          <div className="flex justify-between w-full items-baseline">
            <div className="ml-4 mr-auto text-left flex flex-col">
              <h4 className="font-semibold text-xl">{product.name}</h4>
              <h5 className="text-gray-700">{product.description}</h5>
            </div>
            <h4 className="font-bold text-lg">USD {product.price}</h4>
          </div>
        </div>
        <div className="p-4 gap-4 flex flex-col justify-center items-center border-b">
          <Link
            href="/ssr/ar"
            role="button"
            className="py-4 px-6 text-lg w-full bg-black text-center text-white hover:text-white rounded-md hover:bg-gray-900"
          >
            Get Discount
          </Link>
          <small className="text-black">Last checked: {dateTime}</small>
        </div>
      </section>
      <p className="text-gray-500 mt-3 text-sm text-center">
        This is a static version, compare with the{" "}
        <span className="underline">
          <Link href="/ssr/ar">SSR</Link>
        </span>{" "}
        or{" "}
        <span className="underline">
          <Link href="/csr/ar">CSR</Link>
        </span>{" "}
        version.
      </p>
    </>
  );
}
