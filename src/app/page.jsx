import { redirect } from "next/navigation";


export const metadata = {
 title: 'Menú a la mano',
 description: 'Menú a la mano',
 icons: {
  icon: '/icon.png',
 }
};

export default function Home() {
  redirect('/home')
}
