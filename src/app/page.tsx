
import Image from 'next/image'
import Button from '../../components/Button'
import BlogCard from '../../components/BlogCard'
import Head from 'next/head';


const Logos = [
  '/images/logos/react.svg',
  '/images/logos/graphql.svg',
  '/images/logos/redux.svg',
  '/images/logos/nodejs.svg',
  '/images/logos/nextjs.svg',
  '/images/logos/mongodb.svg',
  '/images/logos/javascript.svg',
  '/images/logos/firebase.svg', 
  '/images/logos/typescript.svg',
];

const blogPosts = [
  {
    id: '1',
    slug: 'the_importance_of_learning_css',
    title: 'The Importance of Learning CSS',
    image: 'https://s3.envato.com/files/280769274/IMG_0720.jpg',
    excerpt: 'I know so many super-talented developers who share the same achilles heel: CSS. Instead of trying to "outrun" CSS, this article explores why learning in and going deeper...'
  },
  {
    id: '2',
    slug: 'the_importance_of_learning_css',
    title: 'The Rules of Margin Collapse',
    image: 'https://s3.envato.com/files/280769274/IMG_0720.jpg',
    excerpt: '"Margin collapse" has a dastardly reputation, one of the trickier parts of CSS. Fortunately, it gets a lot easier oce you learn a few rules! In this tutorial, we take a deep dive in'
  },
]

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      

      <main className="p-5  bg-gray-950 grid gap-12">
        
        <section className="flex flex-col md:flex-row items-center ">
          
          <div className="flex-1 mb-5">
            <p className="text-xs text-secondary font-mono">Development | Code | Entrepreneurship</p>
            <h1 className="text-2xl my-3 ">Im here to help you become a really good web developer.</h1>
            <p className="text-sm font-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem lpsum is that has a...</p>


          </div>

          <div className="flex-1 relative flex justify-center items-center pr-9 mb-10 w-full mix-blend">
              <Image src="/images/profile.jpg" width={144} height={144} alt="profile image" layout='responsive'/>
              <div className="absolute bg-yellow-300 bottom-0 right-0 w-30 transform translate-y-9 ">
                <Image src="/images/plus.webp" width={144} height={144} alt="profile image"  />
              </div>
          </div>

          <div><Button href="" text="Sign up" /></div>
         
        </section>
          
        <section className="flex flex-row flex-wrap justify-center ">
          {Logos.map((logo, index) => (
            <div className="relative w-8 h-8 m-5 " key={index}>
              <Image
                src={logo}
                alt="profile image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            ))}
        </section>

        <section className="flex flex-col  items-center">
          <h1 className="text-2xl">Blog</h1>
          <p className="text-xs text-gray-500 text-center">Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Quaerat dolores unde atque 
            temporibus eos doloribus beatae, quam sint exercitationem 
            numquam autem veritatis libero eius laborum at in nesciunt eaque dolor.</p>
            
            {blogPosts.map((post,index) => <BlogCard post={post} key={index}/>)}

           <div className="m-3"> <Button text="See All Blogs" href="/blog" type='secondary'></Button></div>
        </section>
        
      </main>

      <footer className="p-5 bg-gray-950">
        <section className="bg-third  p-2 pb-5 my-3 mx-10 ">
          
            <h1 className="text-2xl p-3">Duong Bao</h1>
            <p className="p-3 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque modi delectus voluptas quo quaerat minima accusamus iusto, asperiores debitis pariatur iste rerum ullam, maiores quam sunt ducimus rem deserunt.</p>
            <nav className="text-xm text-secondary ">
                <div className="flex flex-row font-medium mt-3 flex-wrap md:space-x-8 justify-center">
                  
                    <p className="block py-2 pl-3 pr-4">Company</p>
                  
                  
                    <p className="block py-2 pl-3 pr-4">Source</p>
                  
                  
                    <p className="block py-2 pl-3 pr-4 ">Resource</p>
                  
                 
                    <p className="block py-2 pl-3 pr-4">On Social</p>
                  
              </div>
            </nav>
          
          </section>
        </footer>
    </div>
  )
}
