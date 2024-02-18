import "./globals.css";
import { bodyStyles } from "./layout.styles";

export const metadata = {
  title: "모여봐요 너굴의 숲",
  description:
    "모여봐요 너굴의 숲에 참가하시는 여러분들께서 이용하시는 간단한 웹입니다. 닉네임이나 성함을 기입하시면 좌석 배치 등을 확인하실 수 있습니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={bodyStyles}>
        <main>{children}</main>
      </body>
    </html>
  );
}
