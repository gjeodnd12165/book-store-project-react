import { IBanner } from '@/model/banner.model';
import { http, HttpResponse } from 'msw';
import { fakerKO as faker } from '@faker-js/faker';

const bannerData: IBanner[] = Array.from({ length: 3 },
  (_, index) => ({
    id: index,
    title: `배너 ${index} 제목`,
    description: `Banner ${index} description`,
    image: `https://picsum.photos/id/${faker.helpers.rangeToNumber({ min: 50, max: 100 })}/1200/400`,
    url: 'http://some.url',
    target: '_blank'
}));

export const banners = http.get('http://localhost:1234/banners', () => {
  return HttpResponse.json(bannerData, {
    status: 200,
  });
})