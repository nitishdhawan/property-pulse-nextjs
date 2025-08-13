import '@/assets/styles/global.css'

export const metadata = {
  title: 'Property Pulsevasd',
  keywords: 'property management, real estate, property listings',
  description: 'A Next.js application for property management',
}
const MainLayout = ({children}:any) => {
  return ( 
  <html>
    <body>
      <main>{children}</main>
    </body>
  </html>
  );
}
 
export default MainLayout;
