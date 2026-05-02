import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image src={"/beach.jpg"} width="200" height="100" alt="Beach"/>
        <Image src="https://cdn.pixabay.com/photo/2018/05/02/17/22/beach-3369140_1280.jpg" width="200" height="100" alt="Beach"/>
        <Image src="https://cdn.pixabay.com/photo/2018/01/14/12/45/sand-3081770_1280.jpg" width="200" height="100" alt="Beach"/>
        <Image src="https://cdn.pixabay.com/photo/2016/10/22/18/52/beach-1761410_1280.jpg" width="200" height="100" alt="Beach"/>
      </main>
    </div>
  );
}
