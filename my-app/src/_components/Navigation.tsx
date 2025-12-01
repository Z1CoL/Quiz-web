import Image from "next/image";

export default function Navigation() {
  return (
    <div className="flex w-full justify-between h-fit p-4 border-b-2  ">
      <div>
        <p className="font-semibold text-6 w-[98px] h-9 mt-4 ">Quiz app</p>
      </div>

      <Image src={"Avatar.svg"} height={40} width={40} alt="" />
    </div>
  );
}
