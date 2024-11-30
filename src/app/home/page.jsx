import Link from "next/link";


export const metadata = {
 title: 'Menú a la mano',
 description: 'Menú a la mano',
};

export default function HomePage() {
  return (
    <div className="bg-[url('/images/fondo_recetas.png')] bg-cover bg-center h-screen text-white">
      <div className="grid grid-cols-2 w-full h-screen max-md:grid-cols-1">
        <span id="space" className="max-md:hidden"></span>
        <section className="flex flex-col gap-10 justify-center items-center h-full pr-36 max-md:pr-20 max-md:pl-64 max-md:h-[80vh] max-sm:pr-0 max-sm:pl-24 max-sm:mr-7">
          <h1 className="text-4xl font-bold text-orange uppercase text-center">
            ¡Bienvenido a menú a la mano!
          </h1>
          <p className="text-xl text-darkOrange text-center">
            Un espacio pensado para tí. <br /> Aquí puedes encontrar ideas para
            el menú de tu hogar diariamente.
          </p>
          <Link href="/random">
            <button className="btn">Generar receta aleatoria</button>
          </Link>
        </section>
      </div>
    </div>
  );
}
