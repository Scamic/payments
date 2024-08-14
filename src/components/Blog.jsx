import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const posts = [
    // {
    //   id: 1,
    //   title: 'Wachan the Great',
    //   href: '#',
    //   description:
    //     'scored - 3600   ',
    //  descriptionn:
    //     'account use 1   ',
    //     descriptionnn:
    //     'reward earn- 100$ ',
    //   date: 'june 7, 2024',
    //   datetime: '2020-03-16',
    //   category: { title: 'payments paypal', href: 'https://www.paypal.me/wachann' },
    //         category: { title: 'payments paypal', href: 'https://www.paypal.me/wachann' },

    //   author: {
    //     name: 'Wachan',
    //     role: 'Admin',
    //     href: '#',
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //   },
    // },
    {
        id: 2,
        title: 'seif',
        href: '#',
        description:
          'scored - 2600  ',
       descriptionn:
          'account use 1  ',
        date: 'aug 11, 2024',
        descriptionnn:
          'reward - 10$  ',
        datetime: '2020-03-16',
        category: { title: 'payments paypal', href: 'mailto:Shahdehabm@gmail.com' },
  
        author: {
          name: 'saif',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // {
      //   id: 3,
      //   title: 'lego',
      //   href: '#',
      //   description:
      //     'scored - 3400   ',
      //  descriptionn:
      //     'account use 1   ',
      //     descriptionnn:
      //     'reward earn- 15$ ',
      //   date: 'june 7, 2024',
      //   datetime: '2020-03-16',
      //   category: { title: 'payments paypal', href: 'mailto:daniilkovbel@gmail.com' },
      //   author: {
      //     name: 'lego',
      //     role: 'member',
      //     href: '#',
      //     imageUrl:
      //       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      //   },
      // },
      {
        id: 4,
        title: 'INV | Cefremano ',
        href: '#',
        description:
          'scored - 2600  ',
       descriptionn:
          'account use 1   ',
          descriptionnn:
          'reward earn- 10$ ',
        date: 'aug 11, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments paypal', href: 'mailto:solteszbalazs66@gmail.com' },
            
        author: {
          name: 'Cemfremano',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 5,
        title: 'Wallace',
        href: '#',
        description:
          'scored -  2400',
       descriptionn:
          'account use 1   ',
          descriptionnn:
          'reward earn- 3$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments paypal', href: 'mailto:Wallacegoncalves1975@gmail.com' },
    
        author: {
          name: 'Wallace',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 6,
        title: 'Nike Ak 47/ GodNikeX',
        href: '#',
        description:
          'scored - 2700,2600   ',
       descriptionn:
          'account use 2   ',
          descriptionnn:
          'reward earn- 10+10=20$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments paypal', href: 'mailto:drinkhype77@gmail.com' },
  
        author: {
          name: 'godNikex',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    // {
    //     id: 7,
    //     title: 'Fearless',
    //     href: '#',
    //     description:
    //       'scored - 3200 ',
    //    descriptionn:
    //       'account use 1   ',
    //       descriptionnn:
    //       'reward earn- 10$ ',
    //     date: 'june 7, 2024',
    //     datetime: '2020-03-16',
    //     category: { title: 'payments paypal', href: 'mailto:abbasshakhshir@gmail.com' },
  
    //     author: {
    //       name: 'fearless',
    //       role: 'member',
    //       href: '#',
    //       imageUrl:
    //         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //     },
    //   },
    // {
    //     id: 8,
    //     title: 'venpers',
    //     href: '#',
    //     description:
    //       'scored - 3500 ',
    //    descriptionn:
    //       'account use 1   ',
    //       descriptionnn:
    //       'reward earn- 20$ ',
    //     date: 'june 7, 2024',
    //     datetime: '2020-03-16',
    //     category: { title: 'payments paypal', href: 'mailto:venporsioventura@gmail.com' },
  
    //     author: {
    //       name: 'venpers',
    //       role: 'member',
    //       href: '#',
    //       imageUrl:
    //         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //     },
    //   },

      // {
      //   id: 9,
      //   title: 'Taurus',
      //   href: '#',
      //   description:
      //     'scored - 3300 ',
      //  descriptionn:
      //     'account use 1   ',
      //     descriptionnn:
      //     'reward earn- 10$ ',
      //   date: 'june 7, 2024',
      //   datetime: '2020-03-16',
      //   category: { title: 'payments paypal', href: 'https://www.paypal.com/paypalme/aonovikov?country.x=C2&locale.x=en_US' },
  
      //   author: {
      //     name: 'Taurus',
      //     role: 'Co leader',
      //     href: '#',
      //     imageUrl:
      //       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      //   },
      // },
    // {
    //     id: 10,
    //     title: 'Aquaa',
    //     href: '#',
    //     description:
    //       'scored - 3400 ',
    //    descriptionn:
    //       'account use 1   ',
    //       descriptionnn:
    //       'reward earn- 15$ ',
    //     date: 'june 7, 2024',
    //     datetime: '2020-03-16',
    //     category: { title: 'payments button', href: 'mailto:tomfonteneau44@gmail.com' },
  
    //     author: {
    //       name: 'Aquaa',
    //       role: 'member',
    //       href: '#',
    //       imageUrl:
    //         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //     },
    //   },
    {
        id: 11,
        title: 'Reiju,Soxee',
        href: '#',
        description:
          'scored - 2600,2400 ',
       descriptionn:
          'account use 2   ',
          descriptionnn:
          'reward earn- 13$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'https://www.paypal.com/paypalme/arpinpalari' },
  
        author: {
          name: 'arpin',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        id: 12,
        title: 'HULK',
        href: '#',
        description:
          'scored -2600,2400,2350 ',
       descriptionn:
          'account use 3 but won from 2  ',
          descriptionnn:
          'reward earn- 13$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:luciferpetr@gmail.com' },
  
        author: {
          name: '',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        id: 13,
        title: 'Alzer',
        href: '#',
        description:
          'scored - 2700 ',
       descriptionn:
          'account use 1   ',
          descriptionnn:
          'reward earn- 10$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'https://wise.com/pay/r/MWII6-Y1AUYXSgU' },
  
        author: {
          name: 'alzer',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        id: 14,
        title: 'ThekingYt,Luiscort',
        href: '#',
        description:
          'scored - 2700 ,2300',
       descriptionn:
          'account use 2   ',
          descriptionnn:
          'reward earn- 10$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:lrmp2003@gmail.com' },
  
        author: {
          name: 'ASL Luiscort',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        id: 15,
        title: 'Not',
        href: '#',
        description:
          'scored - 2600 ',
       descriptionn:
          'account use 1   ',
          descriptionnn:

          'reward earn- 10$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:#' },
  
        author: {
          name: 'R✨',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        id: 16,
        title: 'Miko',
        href: '#',
        description:
          'scored - 2600,2500,2500 ',
       descriptionn:
          'account use 3   ',
          descriptionnn:
          'reward earn- 26$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:kusainovmiras2002@gmail.com' },
  
        author: {
          name: 'MIKO 1,2,3',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 17,
        title: 'madara',
        href: '#',
        description:
          'scored - 2400 ',
       descriptionn:
          'account use 1 ',
          descriptionnn:
          'reward earn- 3$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:Madara0ftw@gmail.com' },
  
        author: {
          name: 'Madara',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 18,
        title: 'GK DUCK',
        href: '#',
        description:
          'scored - 2400 ',
       descriptionn:
          'account use 1 ',
          descriptionnn:
          'reward earn- 3$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'https://wise.com/pay/me/marcodanielr2' },
  
        author: {
          name: 'GK DUck',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 19,
        title: 'Nadir wise app email attached',
        href: '#',
        description:
          'scored - 2500 ',
       descriptionn:
          'account use 1 ',
          descriptionnn:
          'reward earn- 8$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:nadirboom65@gmail.com' },
  
        author: {
          name: 'Nadir',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // {
      //   id: 20,
      //   title: 'int Cho',
      //   href: '#',
      //   description:
      //     'scored -  ',
      //  descriptionn:
      //     'account use 1 ',
      //     descriptionnn:
      //     'reward earn-  ',
      //   date: 'june 7, 2024',
      //   datetime: '2020-03-16',
      //   category: { title: 'payments button', href: 'https://cash.app/$JaedonSeo' },
  
      //   author: {
      //     name: 'Nadir',
      //     role: 'member',
      //     href: '#',
      //     imageUrl:
      //       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      //   },
      // },
      {
        id: 21,
        title: 'BT | Sir Adriel',
        href: '#',
        description:
          'scored - 2500 ',
       descriptionn:
          'account use 1 ',
          descriptionnn:
          'reward earn- 8$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:Tomiscr10@gmail.com' },
  
        author: {
          name: 'Nadir',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 12,
        title: 'Rin',
        href: '#',
        description:
          'scored - 2500 ',
       descriptionn:
          'account use 1 ',
          descriptionnn:
          'reward earn- 8$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:suijetsukuoka@gmail.com' },
  
        author: {
          name: 'Rin',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 22,
        title: 'Fabiano',
        href: '#',
        description:
          'scored - 2500 ',
       descriptionn:
          'account use 1 ',
          descriptionnn:
          'reward earn- 8$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:fabianoclash54@gmail.com' },
  
        author: {
          name: 'Fabiano',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 23,
        title: 'Gaspart',
        href: '#',
        description:
          'scored - 2500 ',
       descriptionn:
          'account use 1 ',
          descriptionnn:
          'reward earn- 8$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'payments button', href: 'mailto:mbarrantes2019@gmail.com' },
  
        author: {
          name: 'Gaspart',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      
      {
        id: 23,
        title: 'tw1nkLerin',
        href: '#',
        description:
          'scored - 2400 ',
       descriptionn:
          'account use 1 ',
          descriptionnn:
          'reward earn- 3$ ',
        date: 'june 7, 2024',
        datetime: '2020-03-16',
        category: { title: 'Pay via PayPal', href: 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=blejndevid@gmail.com&amount=3.00&currency_code=USD' },
  
        author: {
          name: 'tw1nkLerin',
          role: 'member',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      
  ]
  

  export default function Blog() {
    const [readPosts, setReadPosts] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const toggleRead = (id) => {
        setReadPosts((prevReadPosts) =>
            prevReadPosts.includes(id)
                ? prevReadPosts.filter((postId) => postId !== id)
                : [...prevReadPosts, id]
        );
    };

    return (
        <div className="bg-slate-100 py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute w-56 h-56 bg-violet-400 rounded-full mix-blend-screen filter blur-2xl opacity-60 top-1/4 left-1/3 transform -translate-x-1/2 animate-horizontal-blob"></div>
                <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-screen filter blur-2xl opacity-60 bottom-0 mb-26 right-1/2 transform translate-x-1/2 animate-horizontal-blob"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 underline-animation p-4" data-aos="fade-up">
                        Payments info
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-700" data-aos="fade-up" data-aos-delay="100">
                        Highest paying clan in Clash Royale
                    </p>
                </div>
                <div className="mx-auto mt-4 sm:mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 relative z-10">
                    {posts.map((post, index) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="bg-gray-900 focus:outline-none rounded-lg border border-gray-700 p-8 w-full relative">
                                <button
                                    onClick={() => toggleRead(post.id)}
                                    className="absolute top-2 right-2 bg-white text-gray-900 rounded-full p-2 w-8 h-8 flex items-center justify-center"
                                >
                                    {readPosts.includes(post.id) ? '✓' : ''}
                                </button>
                                <span className="absolute top-10 right-0 text-xs text-gray-500">Mark as read</span>
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a href={post.category.href} className="relative z-10 rounded-full bg-gray-700 px-3 py-1.5 font-medium text-gray-200 hover:bg-gray-600">
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-orange-100">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-emerald-200">{post.descriptionn}</p>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-red-300">{post.descriptionnn}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-800" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-white">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-400">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
