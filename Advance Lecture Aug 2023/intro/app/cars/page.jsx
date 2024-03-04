
import Counter from "@/components/Counter";
import Form from "@/components/Form";
import axios from "axios";
import { PrismaClient } from '@prisma/client'

const getDogImage = async () => {
  return  await axios.get("https://dog.ceo/api/breeds/image/random")  
}

const getPostFromPrisma = async () => {
  const prisma = new PrismaClient();
  const post = await prisma.post.findMany()
  prisma.user.createMany
  console.log(post);
  return post
}


const Cars = async () => {
  const { data } = await getDogImage();
  const post = await getPostFromPrisma();
  console.log(post);
  return (
    <div>
      <h1>Welcome to my Cars Page!</h1>
      {/* <img src={data.message} alt="" /> */}
      {/* <Counter /> */}
      {post.map((single) => {
        return (
          <div key={single.id}>
            <p>{single.title}</p>
            <p>{single.content}</p>
          </div>
        )
      })}
      {/* <Form /> */}
    </div>
  )
}

export default Cars;

// app.get('/')