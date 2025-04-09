import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "./libs/app-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}
export default Page