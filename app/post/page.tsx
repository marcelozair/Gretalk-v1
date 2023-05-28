'use client';

import { Lora } from 'next/font/google';
import { fakePosts } from '../constants/data'
import PostContainer from '../components/common/PostContainer';

const font = Lora({ subsets: ['latin'] })

export default function Post() {

  const { user } = fakePosts[0];

  return (
    <main className={font.className + " mt-[120px]"}>
      <PostContainer>
        <section>
          <h1 className="mt-6 font-bold text-4xl mb-6">Most cover things in the world</h1>

          <div className="profile block">
            <img
              src={user.picture}
              className="w-10 h-10 rounded-full object-cover"
            />
            <a href="/" className="profile__names">
              <cite className="profile__username text-base">{user.username}</cite>
              <p className="profile__profesion text-base">{user.profesion}</p>
            </a>
          </div>

          <div className="w-full h-[1px] bg-line mb-8 mt-8"></div>

          <p className="mb-6">
            The HMG also refers to the group of affiliated companies interconnected by complex shareholding arrangements, with Hyundai Motor Company regarded as the de facto representative of the group. It is the third-largest South Korean chaebol, after Samsung Group and SK Group, related to other Hyundai-name industries following a specialized development split and restructuring which resulted in Hyundai Motor group, Hyundai Heavy Industries Group, Hyundai Development Company Group, Hyundai Department Store Group, and Hyundai Marine & Fire Insurance.
          </p>

          <p className="mb-6">
            The group was formed through the purchase of 51% of Kia by Hyundai Motor Company in 1998. As of 2011, Hyundai owns 33.7%[4] of Kia Motors. On May 22, 2022, the Hyundai Motor Group announced the company would invest an additional $5 billion in the United States by the year 2025. The investment would strengthen collaboration with US firms in areas such as; urban air mobility, autonomous driving, artificial intelligence, and robotics. The investments were announced during a visit to South Korea by President Biden.[5]
          </p>

          <h2 className="text-lg text-black font-bold">
            Businesses
          </h2>

          <p className="mb-6">
            The largest member of the chaebol, Hyundai Motor Company, has a controlling stake in Kia, and they are the largest and second largest car manufacturers in the country respectively. Following several years of rapid growth, the Group sold 8.01 million vehicles in 2015, falling short of its sales target.[6] In 2017 the Group sold 7.25 million vehicles, the lowest in five years at that point.[7] According to the Organisation Internationale des Constructeurs dAutomobiles, it was the worlds third-largest vehicle manufacturer by production volume in 2017, behind Japanese Toyota and German Volkswagen Group.
          </p>

          <picture className="p-3 block">
            <img src="images/data/post-2.jpg" className="w-full h-[200px] object-cover mb-2" />
          </picture>

          <h2 className="text-lg text-black font-bold">
            Businesses
          </h2>

          <p className="mb-6">
            The largest member of the chaebol, Hyundai Motor Company, has a controlling stake in Kia, and they are the largest and second largest car manufacturers in the country respectively. Following several years of rapid growth, the Group sold 8.01 million vehicles in 2015, falling short of its sales target.[6] In 2017 the Group sold 7.25 million vehicles, the lowest in five years at that point.[7] According to the Organisation Internationale des Constructeurs dAutomobiles, it was the worlds third-largest vehicle manufacturer by production volume in 2017, behind Japanese Toyota and German Volkswagen Group.
          </p>
        </section>
      </PostContainer>
    </main>
  )
}