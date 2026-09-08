import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={icons:{icon:'/favicon.svg'},metadataBase:new URL('https://gp6-krabi-model.potchara-a.chatgpt.site'),title:{default:'GP6 | KRABI MODEL — กระบี่โมเดล',template:'%s | GP6 KRABI MODEL'},description:'กระบี่โมเดล: การบริหารจัดการชายฝั่งทะเลแบบบูรณาการ เพื่อขับเคลื่อนเศรษฐกิจสีน้ำเงินและการท่องเที่ยวคุณค่าสูง ผลงานกลุ่ม GP6 นบส.1 รุ่นที่ 104',openGraph:{title:'GP6 | KRABI MODEL — กระบี่โมเดล',description:'สร้างคุณค่าจากทะเล พัฒนาคน กระจายประโยชน์สู่ชุมชน',locale:'th_TH',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th"><body>{children}</body></html>}
