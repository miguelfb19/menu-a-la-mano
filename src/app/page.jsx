import { redirect } from "next/navigation";


export const metadata = {
 title: 'Menú a la mano',
 description: 'Menú a la mano',
 icons: {
  icon: '/favicon.svg',
 }
};

export default function Home() {

  redirect('/home')
  return <div></div>;
}
