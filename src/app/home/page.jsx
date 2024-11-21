
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[url('/images/fondo_recetas.png')] bg-cover bg-center h-screen text-white">
      <div className="grid grid-cols-2 w-full h-screen">
        <span id="space"></span>
        <section className="flex flex-col gap-10 justify-center items-center h-full sm:px-7 max-md:pr-20">
          <h1 className="text-4xl font-bold text-orange uppercase text-center">
            ¡Bienvenido a menú a la mano!
          </h1>
          <p className="text-xl text-darkOrange text-center">
            Un espacio pensado para tí. <br /> Aquí puedes encontrar ideas para
            el menú de tu hogar diariamente.
          </p>
          <Link href="/random">
            <button className="btn">Generar menú aleatorio</button>
          </Link>
        </section>
      </div>
    </div>
  );
}
