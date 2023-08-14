"use client";

import { FieldValues, useForm } from 'react-hook-form';

type Result = {
  count: number
  calcedTotal: number
  calcedPlus: number
}

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
  });
  const baseImageUrl = "http://localhost:3000/api/og" // 開発環境以外で使用する場合はドメインを変更してください。

  const onSubmit = (param: FieldValues) => {

    const link = document.createElement('a')
    link.href = baseImageUrl + "?title=" + param.title + "&siteTitle=" + param.siteTitle
    link.download = 'ogp_image.png'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.click()

  }

  return (

    <main className="m-10 p-5 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-6">
          <h1 className="leading-loose font-bold text-2xl">OGPメーカーのツール</h1>
        </div>

        <h2>ページタイトル</h2>
        <div className="py-2 w-full flex">
          <input {...register('title')} className="w-full px-6 py-4 border rounded-md text-xl" placeholder="ページタイトル" />
        </div>

        <h2>サイトタイトル</h2>

        <div className="py-2 w-full flex">
          <input {...register('siteTitle')} className="w-full px-6 py-4 border rounded-md text-xl" placeholder="サイトタイトル" />
        </div>

        <div className="w-full pt-12 pb-6">
          <button type="submit" className="w-full bg-blue-300 hover:bg-blue-200 text-gray-700 font-semibold px-4 py-4 rounded-md">
            作成
          </button>
        </div>

      </form>
    </main >


  );
};

export default Home