import { client } from '../../libs/client'

// 全ての記事取得
export const getAllContents = async () => {
  const allContents = await client.get({
    endpoint: 'blogs',
    queries: { limit: 100, filters: `category[not_equals]0zey-0y-no4i` },
  })
  return allContents.contents
}

// 最新記事4件取得
export const getNewContents = async () => {
  const newContents = await client.get({
    endpoint: 'blogs',
    queries: { limit: 4, filters: `category[not_equals]0zey-0y-no4i` },
  })
  return newContents.contents
}

// 特集記事4件取得
export const getSpecialContents = async () => {
  const specialContents = await client.get({
    endpoint: 'blogs',
    queries: { limit: 4, filters: `category[equals]xng5vy5das` },
  })
  return specialContents.contents
}

// 1記事取得
export const getSingleContent = async (id: string) => {
  const singleContent = await client.get({
    endpoint: 'blogs',
    contentId: id,
  })
  return singleContent
}

// おすすめ記事4件取得
export const getTopContents = async () => {
  const topContents = await client.get({
    endpoint: 'blogs',
    queries: { limit: 4, filters: `category[equals]0zey-0y-no4i` },
  })
  return topContents.contents
}
