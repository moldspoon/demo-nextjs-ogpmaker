
import { ImageResponse } from 'next/server';

export const config = {
  runtime: "edge",
};


const font = fetch(
  "http://localhost:3000/fonts/NotoSansJP-Bold-Subset.ttf"
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {

  try {
    const { searchParams } = new URL(req.url);
    const fontData = await font;

    const options = {
      title: searchParams.get("title")?.slice(0, 100) || "（タイトル未入力）",
      siteTitle: searchParams.get("siteTitle")?.slice(0, 100) || "（サイトタイトル未入力）",
    };

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#FFF',
            width: '100%',
            height: '100%',
            backgroundSize: '100% 100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap'
          }}
        >
          <div
            style={{
              color: '#000',
              padding: '0 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              wordWrap: "break-word",
              fontSize: '4rem',
              fontWeight: 'bold',
              lineHeight: '5rem'
            }}
          >
            {options.title}
          </div>

          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              position: 'absolute',
              fontSize: '2rem',
              fontWeight: 'bold',
              bottom: '40px',
              right: '40px',
              color: 'black',
            }}
          >
            {options.siteTitle}
          </div>
        </div>
      ),
      {
        width: 1200, // OGPの標準なサイズを指定
        height: 630,
        fonts: [
          {
            name: "NotoSansJP",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
